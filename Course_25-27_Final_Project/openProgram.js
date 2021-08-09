const listDB = require('./listDB');
const addCar = require('./addCar');
const removeCar = require('./removeCar');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');

// List of questions for main inquirer prompt.
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

// Main prompt
// Also loads title on each iteration of main prompt.
const openProgram = () => {
    console.clear();
    console.log(chalk.red(figlet.textSync('Car Manager')));
    inquirer.prompt(introQuestions).then(answers => {
        if (answers.Intro === 'List cars currently in the lot') {
            console.clear();
            listDB(db);
            exitPrompt();
        } else if (answers.Intro === 'Add a car to the lot') {
            addCar(db).then(result => {
                console.log(result);
                exitPrompt();
            });
        } else if (answers.Intro === 'Remove a car from the lot') {
            removeCar(db)
                .then(result => {
                    console.log(result);
                    exitPrompt();
                })
                .catch(error => {
                    console.log(error);
                    exitPrompt();
                });
        } else if (answers.Intro === 'Exit Program') {
            console.log(
                chalk.blue('\nThanks for using Car Manager! Peace!\n\n')
            );
        }
    });
};

const exitPrompt = () => {
    inquirer
        .prompt({
            type: 'list',
            name: 'Outro',
            message: 'What would you like to do next?',
            choices: ['Go back to main menu', 'Exit program'],
        })
        .then(answers => {
            if (answers.Outro == 'Go back to main menu') {
                openProgram();
            } else {
                console.log(
                    chalk.blue('\nThanks for using Car Manager! Peace!\n\n')
                );
            }
        });
};

module.exports = { openProgram };
