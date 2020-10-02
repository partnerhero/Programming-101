const inquirer = require('inquirer');
const chalk = require('chalk');

//List of questions for adding a car prompt.
const addQuestions = [
    {
        name: 'addMake',
        message: "What is the make of the car you're adding to the lot?",
    },
    {
        name: 'addModel',
        message: 'What is the model?',
    },
    {
        name: 'addYear',
        message: 'The year?',
    },
    {
        name: 'addPrice',
        message: 'How much are we selling it for?',
    },
];

//Main logic of adding a car to the lot.
//Also generates unique carID: (first letter of make and model plus year)
module.exports = async newCar => {
    console.clear();
    console.log(chalk.blue.bold("Alright, let's add a car:\n\n"));

    const answers = await inquirer.prompt(addQuestions);

    const carID =
        answers.addMake.charAt(0) +
        answers.addModel.charAt(0) +
        answers.addYear;

    newCar.push('/carArray[]', {
        id: carID,
        make: answers.addMake,
        model: answers.addModel,
        year: Number(answers.addYear),
        price: Number(answers.addPrice),
    });
    console.log(chalk.blue('\nYour car has been added!\n'));
    return;
};
