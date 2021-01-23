INSERT INTO department (name)
VALUES
('management'),
('human resource');

INSERT INTO role (title, salary, department_id)
VALUES
('manager', 9999.99, 1),
('resource manager', 8999.99, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Sandra', 'Adams', 1, NULL),
('Henry', 'Lake', 2, NULL);