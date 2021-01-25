const mysql = require('mysql2');
const inquirer = require('inquirer');
const connection = require('./db/database');
const questions = require('./lib/questions');
const cTable = require('console.table');

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
// createDepartment = (name) => {
//     console.log('Adding a new department...\n');
//     connection.promise().query('INSERT INTO departments (department_name) VALUES (?)')
//         .then(([rows]) => {
//             const newDepartment = rows
//             console.table(newDepartment)
//         })
// };

//     const query = connection.query(
//         'INSERT INTO department SET ?',
//         function (err, res) {
//             if (err) throw err;
//             console.log(res.affectedRows + 'New department sucessfully added!\n');
//         }
//     );
//     console.log(query.sql);
// };

// to quit program
const quit = () => connection.end();

// function to begin prompt
function init() {
    return inquirer.prompt(questions)
        .then(res => {
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
                    createDepartment();
                    break;
                case 'Quit':
                    quit();
                    break;
            };
        });
};

init();