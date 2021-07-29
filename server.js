const express = require('express');
const mysql = require('mysql2');
var inquirer = require('inquirer');
// const { inquirer, prompt } = require('inquirer');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection({
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: 'westwest',
        database: 'company_db'
    },
    console.log(`Connected to the database.`)
);

inquirer.prompt([{
        type: 'list',
        message: "what would you like to do?",
        name: 'answer',
        choices: [
            'view employees',
            'add new employees',
            'update employee role',
            'view roles',
            'add new role',
            'view departments',
            'add new departments',
            'quit'
        ]
    }])
    .then((response) => {
        console.log(response)
        switch (response.answer) {
            case "view employees":
                db.query(`SELECT * FROM employees;`, (err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    console.table(result);
                });

        }
    })

// view all employees

// add new employees - first name - last name - role - manager
// update employee role - list of existing names to choose - role to assign to name from list of roles - 

// view all roles  
// add new role -  role name - salary - dept

// view all depts
// add new dept 

// quit 

// })

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})