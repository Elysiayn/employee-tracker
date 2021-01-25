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
        })
};

// to view all roes
getRoles = () => {
    console.log('Veiwing all roles...\n');
    connection.promise().query('SELECT * FROM roles')
        .then(([rows]) => {
            const roles = rows
            console.table(roles)
        })
};

// to view all employees
getEmployees = () => {
    console.log('Veiwing all employees...\n');
    connection.promise().query('SELECT * FROM employees')
        .then(([rows]) => {
            const employees = rows
            console.table(employees)
        })
};

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
            };
        });
};

init();


// creates new department
// createDepartment = (name) => {
//     console.log('Adding a new department...\n');
//     const query = connection.query(
//         'INSERT INTO department SET ?',
//         function (err, res) {
//             if (err) throw err;
//             console.log(res.affectedRows + 'New department sucessfully added!\n');
//         }
//     );
//     console.log(query.sql);
// };