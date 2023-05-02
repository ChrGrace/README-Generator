const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");



const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Detail a description of your project',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Detail how to install your project',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Detail how your project is to be used',
    },

    {
        type: 'input',
        name: 'license',
        message: 'What license are you using?',
    },

    {
        type: 'input',
        name: 'contribute',
        message: 'If you would like other developers to contribute, you can detail how here',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application here.',
    },

    {
        type: 'input',
        name: 'github',
        message: 'Add your Github username to connect with other developers',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Add your email so you can be contacted',
    },

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) throw error;
        console.log("README.md has been generated successfully!");
    });
}

function init() {
    inquirer.prompt(questions).then((data) => {
        const markdown = generateMarkdown(data);
        console.log(data);
        writeToFile("README(sample).md", markdown);
    });
}

init();

