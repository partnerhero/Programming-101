const exitPrompt = require('./exitPrompt');
const chalk = require('chalk');

//Main logic to return car list.
module.exports = lotCars => {
    console.log(chalk.blue.bold('Here are the cars currently in the lot: \n'));
    for (let i = 0; i <= lotCars.count('/carArray') - 1; i++) {
        console.log(lotCars.getData('/carArray[' + i + ']'));
    }
    console.log('\n\n');
    exitPrompt();
};
