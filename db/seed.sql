 INSERT INTO department (name)
VALUES
    ("engineering"),
    ("finance"),
    ("legal"),
    ("sales");

INSERT INTO roles (title, salary, department_id)
VALUES
    ("sales lead", 100000, 4),
    ("salesperson", 80000, 4),
    ("lead engineer", 150000, 1),
    ("software engineer", 120000, 1),
    ("account manager", 160000, 2),
    ("accountant", 125000, 2),
    ("legal team lead", 250000, 3),
    ("lawyer", 190000, 3);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES
    ("john", "doe", 1, null),
    ("mike", "chan", 2, 1),
    ("ashley", "rodriguez", 3, null),
    ("kevin", "tupik", 4, 3),
    ("kunal", "singh", 5, null),
    ("malia", "brown", 6, 5),
    ("sarah", "lourd", 7, null),
    ("tom", "allen", 8, 7);

