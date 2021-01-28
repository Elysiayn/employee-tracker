# SQL Challenge: Employee Tracker

### UCF Coding Boot-Camp Module 12 Challenge

## Description

This is a command-line application that assists the user in managing a company's employee database, using Node.js, Inquirer, and MySQL.

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Features](#Features)
- [Production](#Production)
- [Questions](#Questions)
- [Contribution](#Contribution)

<br>

## Installation

- Clone down the application code from GitHub.
- Install [MySQL](https://www.mysql.com/) in order to have access to their open source relational database management system.
- Please ensure you have a node.js integrated terminal before proceeding. If not:
- Download [Node](https://nodejs.org/en/).
- Inside root directory terminal, run 'npm init'.
- Inside root directory terminal, run 'npm install inquirer' to install [Inquirer](https://www.npmjs.com/package/inquirer#installation) to interact with the user via command-line.
- Inside root directory terminal, run 'npm install --save mysql2' to install [MySQL 2](https://www.npmjs.com/package/mysql2) and connect user MySQL database to perform queries in this application.
- Inside root directory terminal, run 'npm install console.table --save' to install [console.table](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

## Usage

- Once code has been cloned, open Windows command prompt (CMD) in the root directory of the project and run: 'mysql -u root -p'. Enter your MySQL password.
- Once MySQL has been initialized, run: 'source db/schema.sql' and 'source db/seeds.sql' in that order. User may return to preferred terminal.
- Inside root directory terminal, run 'node server' to activate application.
- This application has been populated with mock data that may be manipulated through MySQL or in the code directly.
- A prompt asking the user how they wish to proceed will appear. The user can select an option by scrolling up and down through the list with arrow keys and making a selection by pressing the Enter key. The options are as follows:
- View all departments: Will print a table in the terminal displaying all current departments in the business database by department ID and name.
- View all roles: Will print a table in the terminal displaying all current job roles in the business database by role ID, title, salary and the department the role corresponds to.
- View all employees: Will print a table in the terminal displaying all current employees by employee ID, first name, last name, title of employee job role, salary of employee, the department they work in and the manager the employee reports to.
- Add a department: Adds a new department to the database by prompting user to input the name of the new department. This will generate a new unique department ID for the new department. User may view the update by selecting to view all departments.
- Add a role: Adds a new job role to the database by prompting user to input the title of the new job role. This will generate a new unique role ID for the new job role. User will be prompted to enter salary for new job role. User will be prompted to enter the department ID that corresponds to the new job role (user may print department table beforehand in order to see the current databases department ID's) User may view the update by selecting to view all roles.
- Add an employee: Adds a new employee to the database by prompting user to input the first and last name of the new employee. This will generate a new unique employee ID for the new employee. User will be prompted to enter salary for new job role. User will be prompted to enter the role ID that corresponds to the new employee (user may print roles table beforehand in order to see the current databases role ID's). User will be prompted to enter the manager ID that corresponds to the new employee (user may print employees table beforehand in order to see the current databases managers by title and their manager ID's). A NULL value means they have no manager and would be executed in the terminal by leaving the prompt blank and pressing the Enter key. User may view the update by selecting to view all employees.
- Update an employee: This will enable user to edit and update a current employee in the database. User will be prompted to input the employee ID of the employee to be edited. User will be prompted to input new role ID of the new job role of employee, this will switch the employee's current job role into the new input role. User will be prompted to input new manager ID of the new manager of the employee, this will switch the employee's current manager into the new input manager. User may view the update by selecting to view all employees.
- Delete a department: Deletes a current department in the database. User will be prompted to input the department ID of the desired department to be deleted.
- Delete a role: Deletes a current job role in the database. User will be prompted to input the role ID of the desired job role to be deleted.
- Delete an employee: Deletes a current employee in the database. User will be prompted to input the employee ID of the desired employee to be deleted.
- Quit: This command exits the application and returns the terminal for user commands.
- Please review video of application [demo]().

## Features

- A command-line application for a company database that accepts user input.
- Tables in command-line will print a easy to read and understand table with proper rows and columns of database data.
- Ability to view database departments, job roles and employees.
- Ability to add departments, job roles and employees to database.
- Ability to delete departments, job roles and employees from database.
- Ability to edit current employees in databse by job roles and managers.
- All updates made to database will reflect in tables when prompted on view department, roles or employeees.

## Production

[employee-tracker](https://Elysiayn.github.io/employee-tracker/)

[![employee-tracker](assets/images/screenshot.png)](https://Elysiayn.github.io/employee-tracker/)

## Questions

Please feel free to reach me for additional questions at:
<br>
Email: Wendy.Lemus.WL@gmail.com

Visit my GitHub!
<br>
GitHub: [Elysiayn](https://github.com/Elysiayn)

### Contributions

- [Elysiayn](https://github.com/Elysiayn)
