// Course 22 Notes

/*
    Review

What do the following file system methods do?
fs.writeFile() - writes data to a file
    -If a file does not exist, it creates one
    -If the file does exist, it replaces it

fs.readFile() - reads the contents of a file without opening or closing the file itself.

Chalk
*/

// Let's work on our character bio sheet
const fs = require('fs');

const bio =
    'I am Swifly, keeper of the realm of forgotten waste and dried corn. I stand a proud 33 inches tall and 5 inches wide.';

// Let's create our createFile function
const createFile = () =>
    new Promise((resolve, reject) => {
        fs.writeFile('charBio.txt', bio, err => {
            if (err) {
                reject('Something went wrong...');
                console.log(err);
            }
            resolve('File created!');
        });
    });

const readFile = () =>
    new Promise((resolve, reject) => {
        fs.readFile('charBio.txt', 'utf-8', (err, data) => {
            if (err) {
                reject('Could not find file!!');
                console.log(err);
            } else {
                resolve(data);
            }
        });
    });

createFile()
    .then(result => {
        console.log(result);
        readFile()
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

// We can get fancy by using chalk in here too!

//-----------------------------------------------------------------

// We can start to make our character program a little cooler by using some of the CLI tools available to us.

// Figlet
// npm install figlet
const figlet = require('figlet');

// Syntax
figlet.text('Text here', { font: 'Ghost' }, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// This is the asynchronous version, so we need to handle it appropriately otherwise we get some weird results.

const headerGenerator = () =>
    new Promise((resolve, reject) => {
        figlet('Oktabis', { font: 'Crazy' }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

headerGenerator()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

//-----------------------------------------------------------------

// End of course
