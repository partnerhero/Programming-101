const openProgram = require('./openProgram');
const chalk = require('chalk');
const inquirer = require('inquirer');

//Handles the logic to continue interfacing or exit the tool.
module.exports = async () => {
    const { outro } = await inquirer.prompt({
        type: 'list',
        name: 'outro',
        message: 'What would you like to do next?',
        choices: ['Go back to main menu', 'Exit tool'],
    });

    let shouldRestart;

    if (outro === 'Go back to main menu') {
        shouldRestart = true;
    } else {
        console.log(
            chalk.blue.italic(
                '\nThank you for using our management tool, have a great day!\n\n'
            )
        );
        shouldRestart = false;
    }

    return shouldRestart;
};
