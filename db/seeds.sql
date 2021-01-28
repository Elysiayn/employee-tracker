INSERT INTO departments (department_name)
VALUES
('Management'),
('Operations'),
('Human Resource'),
('Finance'),
('Marketing');

INSERT INTO roles (title, salary, department_id)
VALUES
('Operations Manager', 90000.00, 1),
('Human Resource Manager', 90000.00, 1),
('Finance Manager', 90000.00, 1),
('Marketing Manager', 90000.00, 1),
('Human Resource Associate', 60000.00, 3),
('Staffing Coordinator', 30000.00, 3),
('Recruiter', 50000.00, 3),
('Administrator', 40000.00, 2),
('Cashier', 25000.00, 2),
('Sales Representative', 35000.00, 2),
('Accountant', 75000.00, 4),
('Revenue Cycle Administrator', 65000.00, 4),
('Budget Analyst', 45000.00, 4),
('Marketing Analyst', 80000.00, 5),
('Product Specialist', 55000.00, 5),
('Social Media Coordinator', 40000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Sandra', 'Adams', 1, NULL), 
('Felix', 'Shellberg', 2, NULL),
('Henry', 'Lake', 3, NULL),
('Chad', 'Forest', 4, NULL),
('Lily', 'Palmer', 5, 2),
('Jerry', 'Henderson', 6, 2),
('April', 'Ludgate',7, 2),
('Amy', 'Cooper', 8, 1),
('Thodderick', 'Johnson', 9, 1),
('Emilia', 'Benson', 10, 1),
('Robert', 'DeShaw', 11, 3),
('Emilio', 'Harris', 12, 3),
('Julio', 'Garcia', 13, 3),
('Janice', 'Ludwig', 14, 4),
('Terry', 'Washington', 15, 4),
('Charles', 'White', 16, 4);
