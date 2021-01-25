const mysql = require('mysql2');
const inquirer = require('inquirer');
const connection = require('./db/database');
const questions = require('./lib/questions');
const cTable = require('console.table');


// to view departments
getDepartments = () => {
    console.log('Veiwing all departments...\n');
    connection.promise().query('SELECT * FROM department')
        .then(([rows]) => {
            const departments = rows
            console.table(departments)
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