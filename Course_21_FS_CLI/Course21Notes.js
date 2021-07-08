// Course 21

/*
Modules Review


*/

/*
File System

Node.js has a built-in dependency known as the file system that makes it easy to access files on your local machine. 

This is a great and easy way to store, access, and manage data locally for any reason. Let's say you're playing a Dungeons and Dragons campaign and you're meticulous about keeping track of everything your character goes through. Things like experience, equipment, and stats are important.

You could feasibly set up a remote server, store all your data there, set up an API endpoint, and then build functions to send requests to the API depending on the changes you want to make. This is totally doable, and you guys could basically do most of this yourselves already, but in a situation like this, there is actually an easier and better option aavailable.

You can store your data on your computer instead and manage it that way. Node.js has a handy dependency called file system that's already built-in, so you don't need to npm install it. The File System module makes it easy for us to perform our CRUD procedures on local files.

Even though there's no need to npm install file system, we still need out require statement at the top to use file system
*/

//------------------------------------------------------------------------------

const fs = require('fs');

// Some FS methods and what they do:

/*
fs.writeFile() writes data to a file
    -If a file does not exist, it creates one
    -If the file does exist, it replaces it

Syntax:
fs.writeFile(fileName, fileContents, err => {
    if (err) throw err;
    console.log('The file was written!');
});
*/

/*
The word "throw" is a new keyword for you all. If you've ever heard the phrase "throwing an error", then you get the general idea of this keyword. Here, when there's an error, "throw" stops the code and generates the error.

This line:
if (err) throw err;
is just saying, if an error exists, throw it, or generate it. "throw" allows for additional custom error definition, but we won't get into that.
*/

// Let's do an example together real quick.
fs.writeFile('file1.txt', 'This is the file 1 text, yo!', err => {
    if (err) console.log(err);
    else console.log('File written!');
});
// So this is creating a text file with the text,"This is the file 1 text, yo!"
// If we look at that file, we'll se the text here.

//------------------------------------------------------------------------------

/*
Asynchronous and Synchronous

All fs methods have async and sync versions. The above example is the asynchronous version of writeFile. Can anyone summarize what asynchronous means for me?
*/

//------------------------------------------------------------------------------

// fs.appendFile
/*
fs.appendFile appends or adds content to an existing file. If a file by the specified name does not exist, it creates a new file.​ So thinking back to our DnD character, if we wanted to add new experiences to our character's bio, we could use this method.
​
Syntax:
fs.appendFile(fileName, additionalText, err => {
    if (err) throw err;
    console.log(`The data was appended!`);
});
​
Let's append text to our file!
*/

//------------------------------------------------------------------------------

// fs.readFile
/*
    fs.readFile reads the contents of a file without 
    opening or closing the file itself.
​
    Note: readFile requires an encoding specification.
​
Syntax:
fs.readFile with file that's in the same directory:
fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
​
Note that if the file is not in the same directory, we can specify a relative path to read a file in any directory we can access.
*/

// Let's read our newly created file
fs.readFile('file1.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// File encoding needs to be specified for this method. File encoding, essentially, is a set of rules that computers use to interpret 0 and 1 bits to human-readable language. UTF-8 is a common standard, and one that we will use in this course.

/*
This is a very brief demo of how encoding works. We 
won't be doing the conversions ourselves. But it's
good to understand the general concept. 
​
UTF-8 works as such: each character has a value, 
and each value is then represented using bits.
For example: 
1. The word "hello" is comprised of the letters 
    H-E-L-L-O. 
2. These numbers are represented by the values
    104 101 108 108 111.
3. These values can be written using 8-bit "bytes" as:
    01101000 01100101 01101100 01101100  01101111
4. So, when we specify we are using UTF-8 encoding, 
the computer receives the bytes above and understands 
how to decipher them into the word "hello".
*/

//------------------------------------------------------------------------------

// A few others:
/*
fs.rename - updates a file's name
fs.copyFile - copies an existing file into a destination file.
fs.unlink - deletes a file from your system
*/

//------------------------------------------------------------------------------

// QUESTIONS?

//------------------------------------------------------------------------------

// We're going to get to work on creating and managing a character bio sheet using some of the fs methods we learned, but first I want to introduce you all to something I think is very cool.

// It's a dependency that allows us some color customization to what appears in our terminal. It's called chalk and I want everyone to install it by typing npm i chalk in their terminal

// We need our require statement as well
const chalk = require('chalk');
// Syntax is very simple:
console.log(chalk.blue('Hello World!'));

// You can get cretaive too:
console.log(chalk.yellow('Hello') + 'World' + chalk.red('!'));

// Run this, do you see something weird??? This is the async nature and the time it takes for the fs methods to complete. I'm going to show you how to write these fs methods to avoid this.

//------------------------------------------------------------------------------

// End of course
