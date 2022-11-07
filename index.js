const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require('./src/page-template.js');
const path = require("path");
const dist_dir = path.resolve(__dirname, "output");
const distPath = path.join(dist_dir, "team.html");
const teamMembers = [];

const promptManger = () => {
    return inquirer.prompt()
}



const questions = [];
//array of questions 

function writeToFile(fileName, data) {}
//function to write HTML determine if this needs to be changed

function init() {}

init();
//test if correct....