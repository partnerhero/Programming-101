const { openProgram } = require('./openProgram');
const chalk = require('chalk');
const inquirer = require('inquirer');

//Handles the logic to continue interfacing or exit the tool.
module.exports = () => {
    inquirer
        .prompt({
            type: 'list',
            name: 'outro',
            message: 'What would you like to do next?',
            choices: ['Go back to main menu', 'Exit tool'],
        })
        .then(answers => {
            if (answers.outro == 'Go back to main menu') {
                openProgram();
            } else {
                console.log(
                    chalk.blue.italic(
                        '\nThank you for using our management tool, have a great day!\n\n'
                    )
                );
            }
        });
};
