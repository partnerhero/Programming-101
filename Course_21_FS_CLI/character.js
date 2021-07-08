const fs = require('fs');

// const createCharacter = () =>

// Character bio function

// character stats function

// Character equipment function

const text = 'This is the file 1 text, yo!';

const createFile = text => {
    fs.writeFile('file1.txt', text, err => {
        if (err) console.log(err);
        else console.log('File written!');
    });
};

const readFile = () => {
    fs.readFile('file1.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
};

createFile(text);

readFile();
