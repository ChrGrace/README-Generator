const inquirer = require('inquirer');



const questions = [

    {
        type: 'input',
        name: 'Title',
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
        name: 'Usage',
        message: 'Detail how your project is to be used',
    },

    {
        type: 'input',
        name: 'License',
        message: 'What license are you using?',
    },

    {
        type: 'input',
        name: 'How to Contribute',
        message: 'If you would like other developers to contribute, you can detail how here',
    },

    {
        type: 'input',
        name: 'Tests',
        message: 'Write tests for your application here.',
    },

    {
        type: 'input',
        name: 'Github',
        message: 'Add your Github username to connect with other developers',
    },

    {
        type: 'input',
        name: 'Email',
        message: 'Add your email so you can be contacted',
    },

];

