DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;
USE business_db;

-- department table
CREATE TABLE department (
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

-- employee role table
CREATE TABLE role (
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INTEGER,
    PRIMARY KEY (id)
);

-- table for employee info
CREATE TABLE employee (
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES role(title),
    manager_id INTEGER,
    FOREIGN KEY (manager_id) REFERENCES role(id),
    PRIMARY KEY (id)
);
