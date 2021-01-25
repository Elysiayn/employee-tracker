// questions for prompt
const questions = [{
        type: 'list',
        name: 'promptQuestions',
        message: 'How would you like to proceed?',
        choices: [
            'View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role',
            'Add an employee', 'Update an employee role', 'Quit'
        ]
    },
    {
        type: 'input',
        name: 'newDepartment',
        message: 'What is the name of the new department being added?',
        when: ({
            promptQuestions
        }) => {
            if (promptQuestions === 'Add a department') {
                return true;
            } else {
                return false;
            }
        },
        validate: departmentInput => {
            if (departmentInput) {
                return true;
            } else {
                console.log('Please enter a name for the new department!');
                return false;
            }
        }
    },
    // end of questions
];

module.exports = questions;