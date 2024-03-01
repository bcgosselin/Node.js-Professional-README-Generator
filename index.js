// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (error) {
            console.error(error);
            return;
        }

        console.log("README.md successfully generated!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const readme = generateMarkdown(answers);
            writeToFile('README.md', readme);
        })
        .catch(error => {
            console.error(error);
        });
}

// Function call to initialize app
init();
