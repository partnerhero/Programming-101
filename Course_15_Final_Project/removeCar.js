const chalk = require('chalk');
const inquirer = require('inquirer');

// List of questions for removing a car prompt.
const removeQuestions = [
    {
        name: 'carID',
        message:
            "Enter the ID of the car to remove (if you don't know the car's ID, check it in the lot list):",
    },
];

// Main logic to remove a car.
module.exports = soldCar =>
    new Promise((resolve, reject) => {
        console.clear();
        inquirer.prompt(removeQuestions).then(answers => {
            // Check package literature for getIndex syntax
            const carIndex = soldCar.getIndex(
                '/carArray',
                Number(answers.carID),
                'id'
            );
            // If this value exists, delete it.
            if (carIndex != -1) {
                soldCar.delete(`/carArray[${carIndex}]`);
                resolve(chalk.blue('\nThe specified car has been deleted!\n'));
            } else {
                reject(
                    chalk.red(
                        '\nCould not find a car matching this value. Please double check the list of cars in the lot and try again.\n'
                    )
                );
            }
        });
    });
