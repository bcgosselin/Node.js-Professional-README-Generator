// packages needed
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// questions array
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'author',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// function that writes README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            console.error(error);
            return;
        }

        console.log("README.md added to directory");
    });
}

// function that initializes app
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

// Function call that initializes app
init();
