const fs = require('fs');
const chalk = require('chalk');

const text =
    'This is my file text. This is the text that makes up my file. When you open the file, this is the text. The text in this file is, in fact, this text.';

const createFile = new Promise((resolve, reject) => {
    console.clear();
    fs.writeFile('myFile.txt', text, err => {
        if (err) {
            reject('Something went wrong...');
            console.dir(err);
            return;
        }
        resolve('File written!..\n');
    });
});

const readFile = new Promise((resolve, reject) => {
    fs.readFile('myFile.txt', 'utf-8', (err, data) => {
        if (err) {
            reject("Couldn't read file....");
            console.dir(err);
            return;
        }
        resolve(data);
    });
});

createFile
    .then(result => {
        console.log(chalk.red(result));
        readFile
            .then(result => {
                console.log(
                    chalk.blue('Reading file contents, one moment...\n\n')
                );
                setTimeout(() => console.log(chalk.green(result)), 4000);
            })
            .catch(error => {
                console.log(error);
            });
    })
    .catch(error => {
        console.log(error);
    });
