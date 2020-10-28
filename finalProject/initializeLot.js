const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');
const fs = require('fs');

// Set up db if it does not exist, or declare it if it does.
module.exports = () =>
    new Promise((resolve, reject) => {
        const exists = fs.existsSync('./carLot.json');
        db = new JsonDB(new Config('carLot', true, true, '/'));
        if (exists === false) {
            db.push('/carArray[0]', {
                id: Math.floor(Math.random() * 99999),
                make: 'Toyota',
                model: 'Camry',
                year: 2005,
                price: 7000,
            });
            db.push('/carArray[1]', {
                id: Math.floor(Math.random() * 99999),
                make: 'Ford',
                model: 'Ranger',
                year: 2002,
                price: 6000,
            });
            db.push('/carArray[2]', {
                id: Math.floor(Math.random() * 99999),
                make: 'Honda',
                model: 'Civic',
                year: 1999,
                price: 3000,
            });
            db.push('/carArray[3]', {
                id: Math.floor(Math.random() * 99999),
                make: 'Dodge',
                model: 'Dart',
                year: 2017,
                price: 15000,
            });
        }
        resolve(db);
    });
