const chalk = require('chalk');
const inquirer = require('inquirer');

// List of questions for removing a car prompt.
const removeQuestions = [
    {
        name: 'carID',
        message: 'Enter the ID of the car to remove (check list if not known):',
    },
];

// Main logic to remove a car.
module.exports = db =>
    new Promise((resolve, reject) => {
        console.clear();
        inquirer.prompt(removeQuestions).then(answers => {
            // Check package literature for getIndex syntax
            const carIndex = db.getIndex('/carArray', Number(answers.carID));
            // If this value exists, delete it.
            if (carIndex != -1) {
                db.delete(`/carArray[${carIndex}]`);
                resolve(chalk.blue('\nThat car was deleted!\n'));
            } else {
                reject(
                    chalk.red(
                        '\nCould not find matching car. Please double check the list and try again.\n'
                    )
                );
            }
        });
    });
