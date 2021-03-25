const figlet = require('figlet');
const inquirer = require('inquirer');
const chalk = require('chalk');

const questions = [
    {
        name: 'name',
        message: 'What is your name?',
    },
    {
        name: 'hobby',
        message: 'What is a hobby you enjoy?',
    },
];

const headerGenerator = new Promise((resolve, reject) => {
    console.clear();
    figlet('Header', { font: 'Flower Power' }, (err, data) => {
        if (err) {
            reject('Something went wrong...');
            console.dir(err);
            return;
        }
        resolve(data);
    });
});

const promptGenerator = questions =>
    new Promise((resolve, reject) => {
        inquirer.prompt(questions).then(answers => {
            resolve(`Hello, ${answers.name}! I think ${answers.hobby} is fun!`);
        });
    });

headerGenerator
    .then(result => {
        console.log(chalk.red(result));
        promptGenerator(questions)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });
    })
    .catch(error => {
        console.log(error);
    });
