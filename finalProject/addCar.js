const inquirer = require('inquirer');
const chalk = require('chalk');

// List of questions for adding a car prompt.
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

// Main logic of adding a car to the lot.
// Also generates unique carID: (first letter of make and model plus year)
module.exports = db =>
    new Promise((resolve, reject) => {
        console.clear();
        console.log(chalk.blue.bold("Alright, let's add a car:\n\n"));
        inquirer.prompt(addQuestions).then(answers => {
            const carID = Math.floor(Math.random() * 99999);
            db.push('/carArray[]', {
                id: carID,
                make: answers.addMake,
                model: answers.addModel,
                year: Number(answers.addYear),
                price: Number(answers.addPrice),
            });
            resolve(
                chalk.blue(`\nYour car has been added with ID: ${carID}\n`)
            );
        });
    });
