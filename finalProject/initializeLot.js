//Require statements to add dependencies.
const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');
const fs = require('fs');

//Set up db if it does not exist, or declare it if it does.
module.exports = () => {
    if (fs.existsSync('/carLot.json') == false) {
        db = new JsonDB(new Config('carLot', true, true, '/'));
        db.push(
            '/carArray[0]',
            {
                id: 'TC2005',
                make: 'Toyota',
                model: 'Camry',
                year: 2005,
                cost: 7000,
            },
            true
        );
        db.push('/carArray[1]', {
            id: 'FR2002',
            make: 'Ford',
            model: 'Ranger',
            year: 2002,
            cost: 6000,
        });
        db.push('/carArray[2]', {
            id: 'HC1999',
            make: 'Honda',
            model: 'Civic',
            year: 1999,
            cost: 3000,
        });

        db.push('/carArray[3]', {
            id: 'DD2017',
            make: 'Dodge',
            model: 'Dart',
            year: 2017,
            cost: 15000,
        });
    } else {
        db = '/carLot.json';
    }
    return db;
};
