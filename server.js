const mysql = require('mysql2');
const inquirer = require('inquirer');
const {
    connection,
    db
} = require('./db/database');
const questions = require('./lib/questions');

// to view departments
getDepartments = () => {
    console.log('Veiwing all departments...\n');
    connection.query('SELECT * FROM department'),
        function (err, res) {
            if (err) throw err;
            console.log(res);
        };
};


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



// function to begin prompt
function init() {
    return inquirer.prompt(questions)
        .then(res => {
            switch (res.startPrompt) {
                case 'View all departments':
                    getDepartments();
                    break;
            };
        });
};

init();