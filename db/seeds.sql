INSERT INTO department (name)
VALUES
('Management'),
('Operations'),
('Human Resource'),
('Finance'),
('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES
('Operations Manager', 90000.00, 1),
('Human Resource Manager', 90000.00, 1),
('Finance Manager', 90000.00, 1),
('Marketing Manager', 90000.00, 1),
('Human Resource Associate', 60000.00, 2),
('Staffing Coordinator', 30000.00, 2),
('Recruiter', 50000.00, 2),
('Administrator', 40000.00, 3),
('Cashier', 25000.00, 3),
('Sales Representative', 35000.00, 3),
('Accountant', 75000.00, 4),
('Revenue Cycle Administrator', 65000.00, 4),
('Budget Analyst', 45000.00, 4),
('Marketing Analyst', 80000.00, 5),
('Product Specialist', 55000.00, 5),
('Social Media Coordinator', 40000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Sandra', 'Adams', 1, NULL), 
('Felix', 'Shellberg', 2, NULL),
('Henry', 'Lake', 3, NULL),
('Chad', 'Forest', 4, NULL),
('Lily', 'Palmer', 5, 1),
('Jerry', 'Henderson', 6, 1),
('April', 'Ludgate',7, 1),
('Amy', 'Cooper', 8, 2),
('Thodderick', 'Johnson', 9, 2),
('Emilia', 'Benson', 10, 2),
('Robert', 'DeShaw', 11, 3),
('Emilio', 'Harris', 12, 3),
('Julio', 'Garcia', 13, 3),
('Janice', 'Ludwig', 14, 4),
('Terry', 'Washington', 15, 4),
('Charles', 'White', 16, 4);