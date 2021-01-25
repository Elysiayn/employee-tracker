// questions for prompt
const questions = [{
        type: 'list',
        name: 'promptQuestions',
        message: 'How would you like to proceed?',
        choices: [
            'View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role',
            'Add an employee', 'Update an employee role'
        ]
    },
    {
        type: 'input',
        name: 'departmentName',
        message: 'What is the name of the new department being added?',
        when: ({
            initialPrompt
        }) => {
            if (initialPrompt === 'Add a department') {
                return true;
            } else {
                return false;
            }
        }
    }

];

module.exports = questions;