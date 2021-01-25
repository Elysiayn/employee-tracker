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
    {
        type: 'input',
        name: 'newRoleTitle',
        message: 'What is the title of the new role being added?',
        when: ({
            promptQuestions
        }) => {
            if (promptQuestions === 'Add a role') {
                return true;
            } else {
                return false;
            }
        },
        validate: newRoleTitleInput => {
            if (newRoleTitleInput) {
                return true;
            } else {
                console.log('Please enter a title for the new role!');
                return false;
            }
        },
        type: 'input',
        name: 'newRoleSalary',
        message: 'What is the salary of the new role being added?',
        when: ({
            newRoleTitle
        }) => {
            if (newRoleTitle) {
                return true;
            } else {
                return false;
            }
        },
        validate: newRoleSalaryInput => {
            if (newRoleSalaryInput) {
                return true;
            } else {
                console.log('Please enter a salary for the new role!');
                return false;
            }
        },
        type: 'input',
        name: 'newRoleDepid',
        message: 'What is the department ID of the new role being added?',
        when: ({
            newRoleSalary
        }) => {
            if (newRoleSalary) {
                return true;
            } else {
                return false;
            }
        },
        validate: newRoleDepidInput => {
            if (newRoleDepidInput) {
                return true;
            } else {
                console.log('Please enter a department ID for the new role!');
                return false;
            }
        }
    },
    // end of questions
];

module.exports = questions;