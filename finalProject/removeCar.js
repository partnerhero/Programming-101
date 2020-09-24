const exitPrompt = require('./exitPrompt');
const chalk = require('chalk');
const inquirer = require('inquirer');

//List of questions for removing a car prompt.
const removeQuestions = [
    {
        name: 'carID',
        message:
            "Enter the ID of the car to remove (if you don't know the car's ID, check it in the lot list):",
    },
];

//Main logic to remove a car.
module.exports = soldCar => {
    console.clear();
    inquirer.prompt(removeQuestions).then(answers => {
        carIndex = soldCar.getIndex('/carArray', answers.carID, 'id');
        //If this value exists, delete it.
        if (carIndex != -1) {
            soldCar.delete('/carArray[' + carIndex + ']');
            console.log(chalk.blue('\nThe specified car has been deleted!\n'));
        } else {
            console.log(
                chalk.red(
                    '\nCould not find a car matching these values. Please double check the list of cars in the lot and try again.\n'
                )
            );
        }
        exitPrompt();
    });
};
