// TODO: Include packages needed for this application
const inquiry = require('inquirer');
const fs = require('fs/promises')

// An array of questions for user input
const questions = () => {
    return inquiry.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Project Title : '
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github username : '
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Repository name : '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of the project : '
    },
    {
        type: 'input',
        name: 'link',
        message: 'Link to deployed app : '
    },
]);
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(`./dist/${fileName}`,data)

}
// TODO: Create a function to initialize app
function init() {
    return inquiry.prompt(questions)
}

// Function call to initialize app
init();
