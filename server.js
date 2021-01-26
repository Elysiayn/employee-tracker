const mysql = require('mysql2');
const inquirer = require('inquirer');
const connection = require('./db/database');
const questions = require('./lib/questions');

// to view departments
getDepartments = () => {
    console.log('Veiwing all departments...\n');
    connection.promise().query('SELECT * FROM departments')
        .then(([rows]) => {
            const departments = rows
            console.table(departments)
            init();
        })
};

// to view all roes
getRoles = () => {
    console.log('Veiwing all roles...\n');
    connection.promise().query('SELECT roles.id, roles.title, roles.salary, departments.department_name FROM roles LEFT JOIN departments ON roles.department_id = departments.id')
        .then(([rows]) => {
            const roles = rows
            console.table(roles)
            init();
        })
};

// to view all employees
getEmployees = () => {
    console.log('Veiwing all employees...\n');
    connection.promise().query('SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.department_name, CONCAT(e2.first_name, e2.last_name) AS manager FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id LEFT JOIN employees AS e2 ON employees.manager_id = e2.id')
        .then(([rows]) => {
            const employees = rows
            console.table(employees)
            init();
        })
};

// creates new department
createDepartment = (newDepartment) => {
    console.log('Adding a new department...\n');
    const query = connection.query(
        'INSERT INTO departments SET ?', {
            department_name: newDepartment
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + 'New department sucessfully added!\n');
            init();
        }
    );
    console.log(query.sql);
};

// creates new role
createRole = (newRoleTitle, newRoleSalary, newRoleDepid) => {
    console.log('Adding a new role...\n');
    const query = connection.query(
        'INSERT INTO roles (title, salary, department_id)  VALUES (?, ?, ?)', [
            newRoleTitle,
            newRoleSalary,
            newRoleDepid
        ],
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + 'New role sucessfully added!\n');
            init();
        }
    );
    console.log(query.sql);
};

// creates new employee
createEmployee = (newEmployeeFirstName, newEmployeeLastName, newEmployeeRoleId, newEmployeeManagerId) => {
    console.log('Adding a new employee...\n');
    const query = connection.query(
        'INSERT INTO employees (first_name, last_name, role_id, manager_id)  VALUES (?, ?, ?, ?)', [
            newEmployeeFirstName,
            newEmployeeLastName,
            newEmployeeRoleId,
            newEmployeeManagerId
        ],
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + 'New employee sucessfully added!\n');
            init();
        }
    );
    console.log(query.sql);
};

// to update an employee
updateEmployee = (updateEmployeeRoleId, updateEmployeeManagerId) => {
    console.log('Updating an employee...\n');
    const query = connection.query(
        'UPDATE employees (role_id, manager_id)  VALUES (?, ?, ?) WHERE id=?', [
            updateEmployeeRoleId,
            updateEmployeeManagerId
        ],
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + 'Employee sucessfully updated!\n');
            init();
        }
    );
    console.log(query.sql);
};

// to quit program
const quit = () => connection.end();

// function to begin prompt
function init() {
    return inquirer.prompt(questions)
        .then(res => {
            // console.log(res)
            switch (res.promptQuestions) {
                case 'View all departments':
                    getDepartments();
                    break;
                case 'View all roles':
                    getRoles();
                    break;
                case 'View all employees':
                    getEmployees();
                    break;
                case 'Add a department':
                    createDepartment(res.newDepartment);
                    break;
                case 'Add a role':
                    createRole(res.newRoleTitle, res.newRoleSalary, res.newRoleDepid);
                    break;
                case 'Add an employee':
                    createEmployee(res.newEmployeeFirstName, res.newEmployeeLastName, res.newEmployeeRoleId, res.newEmployeeManagerId);
                    break;
                    // case 'Update an employee':
                    //     updateEmployee(res.updateEmployeeRoleId, res.updateEmployeeManagerId);
                    //     break;
                case 'Quit':
                    quit();
                    break;
            };
        });
};

init();