const chalk = require('chalk');

// Main logic to return the list of cars
module.exports = db => {
    console.log(
        chalk.blue.bold(
            `There are ${db.count('/carArray')} cars currently in the lot:\n`
        )
    );
    // for each entry in our car db, pull that data, turn it into a string, and perform basic string manipulation in order to make it readable.
    for (let i = 0; i < db.count('/carArray'); i++) {
        const rawData = db.getData(`/carArray[${i}]`);
        let data = JSON.stringify(rawData);
        data = data.replace(/"/g, '');
        data = data.replace(/,/g, ', ');
        data = data.replace(/:/g, ': ');
        console.log(
            chalk.green.italic(`Car ${i + 1} details: `) + chalk.green(data)
        );
    }
    console.log('\n\n');
};
