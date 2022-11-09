const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require('./src/page-template.js');
const path = require("path");
const dist_dir = path.resolve(__dirname, "./dist");
const distPath = path.join(dist_dir, "team.html");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?"
        },

        {
            tytype: 'input',
            name: 'id',
            message: "What is the team manager's id?"

        },

        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?"
        },
        
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?"
        }
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = ()  => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'menu',
            message: 'Which type of team member would you like to add?',
            choices: ["Engineer",
                        "Intern",
                        "I don't want to add any more team members"]
            
        }
  ])

.then(userChoice => {
    switch (userChoice.menu) {
        case "Engineer":
            promptEngineer();
            break;
        case "Intern":
            promptIntern();
            break
        default:
            createTeam();
    }
})};


const promptEngineer = () => {
    console.log('Provide information for Engineer');

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's name?"
        },
        
        {
            tytype: 'input',
            name: 'id',
            message: "What is Engineer's id?"

        },

        {
            type: 'input',
            name: 'email',
            message: "What is the Engineer's email"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's github username?"
        },

    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        promptMenu();
})};

const promptIntern = () => {
    console.log('Provide information for Intern');

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the Intern's name?"
        },
        
        {
            tytype: 'input',
            name: 'id',
            message: "What is Intern's id?"

        },

        {
            type: 'input',
            name: 'email',
            message: "What is the Intern's email"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school/university does the Intern attend?"
        },

    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
})}; 

const createTeam = () => {
    console.log ("Team created!!!");

    if(!fs.existsSync(dist_dir)) {
        fs.mkdirSync(dist_dir)
    }

fs.writeFileSync(distPath, generateHTML(teamMembers), "utf-8");
}

promptManager();




