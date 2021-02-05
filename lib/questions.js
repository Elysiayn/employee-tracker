// questions for prompt
const questions = [{
        type: 'list',
        name: 'promptQuestions',
        message: 'How would you like to proceed?',
        choices: [
            'View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role',
            'Add an employee', 'Update an employee', 'Delete a department', 'Delete a role', 'Delete a employee', 'Quit'
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
    },
    {
        type: 'number',
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
    },
    {
        type: 'number',
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
    {
        type: 'input',
        name: 'newEmployeeFirstName',
        message: 'What is the first name of the new employee being added?',
        when: ({
            promptQuestions
        }) => {
            if (promptQuestions === 'Add an employee') {
                return true;
            } else {
                return false;
            }
        },
        validate: newEmployeeFirstNameInput => {
            if (newEmployeeFirstNameInput) {
                return true;
            } else {
                console.log('Please enter a first name for the new employee!');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'newEmployeeLastName',
        message: 'What is the last name of the new employee being added?',
        when: ({
            newEmployeeFirstName
        }) => {
            if (newEmployeeFirstName) {
                return true;
            } else {
                return false;
            }
        },
        validate: newEmployeeLastNameInput => {
            if (newEmployeeLastNameInput) {
                return true;
            } else {
                console.log('Please enter a last name for the new employee!');
                return false;
            }
        },
    },
    {
        type: 'number',
        name: 'newEmployeeRoleId',
        message: 'What is the role ID of the new employee being added?',
        when: ({
            newEmployeeLastName
        }) => {
            if (newEmployeeLastName) {
                return true;
            } else {
                return false;
            }
        },
        validate: newEmployeeRoleIdInput => {
            if (newEmployeeRoleIdInput) {
                return true;
            } else {
                console.log('Please enter a role ID for the new employee!');
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'newEmployeeManagerId',
        message: 'What is the manager ID of the new employee being added?',
        when: ({
            newEmployeeRoleId
        }) => {
            if (newEmployeeRoleId) {
                return true;
            } else {
                return false;
            }
        },
    },
    {
        type: 'number',
        name: 'updateEmployee',
        message: 'What is the employee ID of the employee being updated?',
        when: ({
            promptQuestions
        }) => {
            if (promptQuestions === 'Update an employee') {
                return true;
            } else {
                return false;
            }
        },
        validate: updateEmployeeInput => {
            if (updateEmployeeInput) {
                return true;
            } else {
                console.log('Please enter the employee ID for the employee being updated!');
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'updateEmployeeRoleId',
        message: 'What is the new role ID of the employee being updated?',
        when: ({
            updateEmployee
        }) => {
            if (updateEmployee) {
                return true;
            } else {
                return false;
            }
        },
        validate: updateEmployeeRoleIdInput => {
            if (updateEmployeeRoleIdInput) {
                return true;
            } else {
                console.log('Please enter the new role ID for the employee being updated!');
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'updateEmployeeManagerId',
        message: 'What is the new manager ID of the employee being updated?',
        when: ({
            updateEmployeeRoleId
        }) => {
            if (updateEmployeeRoleId) {
                return true;
            } else {
                return false;
            }
        },
    },
    {
        type: 'number',
        name: 'deleteDepartment',
        message: 'What is the department ID of the department to be deleted?',
        when: ({
            promptQuestions
        }) => {
            if (promptQuestions === 'Delete a department') {
                return true;
            } else {
                return false;
            }
        },
        validate: deleteDepartmentInput => {
            if (deleteDepartmentInput) {
                return true;
            } else {
                console.log('Please the department ID of the department to be deleted!');
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'deleteRole',
        message: 'What is the role ID of the role to be deleted?',
        when: ({
            promptQuestions
        }) => {
            if (promptQuestions === 'Delete a role') {
                return true;
            } else {
                return false;
            }
        },
        validate: deleteRoleInput => {
            if (deleteRoleInput) {
                return true;
            } else {
                console.log('Please the role ID of the role to be deleted!');
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'deleteEmployee',
        message: 'What is the employee ID of the employee to be deleted?',
        when: ({
            promptQuestions
        }) => {
            if (promptQuestions === 'Delete a employee') {
                return true;
            } else {
                return false;
            }
        },
        validate: deleteEmployeeInput => {
            if (deleteEmployeeInput) {
                return true;
            } else {
                console.log('Please the employee ID of the employee to be deleted!');
                return false;
            }
        }
    },
    // end of questions
];

module.exports = questions;