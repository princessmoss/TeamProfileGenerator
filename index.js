const inquirer = require("inquirer");

const fs = require("fs");
const generateTeam = require('./src/page-template');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function manager() {

    inquirer.prompt([
        {
            type: "input",
            message: "What is your manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your employee ID.",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email address.",
            name: "email"
        },
        {
            type: "input",
            message: "What is your office number.",
            name: "officeNumber"
        },
    ])

        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(manager);
            console.log(answers);
            newEmployee();
        })

}

function createManager() {

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "Please provide an employee ID number."
        },
        {
            type: "input",
            name: "email",
            message: "Please provide your email address."
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please provide your office number."
        },
    ])

        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(manager);
            console.log(answers);
            newEmployee();
        })

}

function newIntern() {

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "Please provide an employee ID number."
        },
        {
            type: "input",
            name: "email",
            message: "Please provide your email address."
        },
        {
            type: "input",
            name: "school",
            message: "Please provide the university you attend."
        },
    ])
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            team.push(intern);
            console.log(answers);
            newEmployee();
        })
}

function newEngineer() {

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "Please provide an employee ID number."
        },
        {
            type: "input",
            name: "email",
            message: "Please provide your email address."
        },
        {
            type: "input",
            name: "github",
            message: "Please provide your GitHub information."
        },
    ])
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team.push(engineer);
            console.log(answers);
            newEmployee();
        })
}

function newEmployee() {
    const addEmployeePrompt = [{

        type: "list",
        name: "employeeChoice",
        message: "What type of employee is this?",
        choices: ['Intern', 'Engineer', 'Finish Team']

    }]
    inquirer.prompt(addEmployeePrompt)
        .then(answers => {
            switch (answers.employeeChoice) {
                case 'Finish Team':
                    writeFile('output/index.html', team)
                    break;
                case 'Intern':
                    newIntern();
                    break;
                case 'Engineer':
                    newEngineer();
                    break;


            }
        })
}