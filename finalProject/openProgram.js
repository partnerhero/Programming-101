const listReturn = require('./listReturn');
const exitPrompt = require('./exitPrompt');
const addCar = require('./addCar');
const removeCar = require('./removeCar');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');

//List of questions for main inquirer prompt.
const introQuestions = [
    {
        name: 'Intro',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'List cars currently in the lot',
            'Add a car to the lot',
            'Remove a car from the lot',
            'Exit program',
        ],
    },
];

//Main program/prompt.
//Also loads title on each iteration of main prompt.
const openProgram = async () => {
    console.clear();
    console.log(chalk.red(figlet.textSync('Car Management Tool')));

    const { Intro } = await inquirer.prompt(introQuestions);

    if (Intro === 'List cars currently in the lot') {
        console.clear();
        await listReturn(db);
    } else if (Intro === 'Add a car to the lot') {
        await addCar(db);
    } else if (Intro === 'Remove a car from the lot') {
        await removeCar(db);
    } else if (Intro === 'Exit program') {
        console.log(
            chalk.blue.italic(
                '\nThank you for using our management tool, have a great day!\n\n'
            )
        );
        return false;
    }
    return exitPrompt();
};

module.exports = () => openProgram();
