// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdwon = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Please enter project Title: '
}, {
    type: 'input',
    name: 'github',
    message: 'What is your Github Username?'
}, {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
}, {
    type: 'input',
    name: 'description',
    message: 'Please write a description of your project: '
}, {
    type: 'list',
    name: 'license',
    message: 'What liscense should your project have?',
    choices: ['APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
}, {
    type: 'input',
    name: 'install',
    message: 'What command should be run to install dependencies?',
    default: 'npm i'
}, {
    type: 'input',
    name: 'tests',
    message: 'What command should be run to tests?',
    default: 'npm test'
}, {
    type: 'input',
    name: 'needToKnow',
    message: 'What does the user need to know about using the repo?'
}, {
    type: 'input',
    name: 'contributions',
    message: 'What does the user need to know about contributing to the repo?'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inqdata => {
        markdownData = generateMarkdwon(inqdata);
        console.log("Generating your README File");
        writeToFile('NewREADME.md', markdownData);
    });
}

// Function call to initialize app
init();
