// Course 5 - Environment and Review

// Consider showing off final project in latter half of this course

/*

POSSIBLY ENVIRONMENT SETUP INSTEAD OF REVIEW
    SETUP
    We'll start by downloading the NodeJS binaries from https://nodejs.org/en/ and installing
    them on your computer. Once the binaries have been installed, you should be able to open the terminal (or command
    prompt on Windows), run the 'node -v' command, and see an output indicating the Node version that was installed.

    After installing Node, let's create a folder to store the files we will be working with. 
    To do this, write 'mkdir node-workshop' and then 'cd node-workshop'. The mkdir commant 'makes' a directory and
    the cd command 'changes directory', or moves you into it.

    Once you are in the node-workshop directory, run the following command: 'node intro.js' and you should see an 
    output in your terminal.
    
    Congrats! You just ran your first JavaScript file. We will be using the 'node' command to execute the files
    we will write throughout this workshop.

*/

// 1. Write a variable that contains your name. Write another variable that contains your date of birth. Print those variables to the console.

const myName = 'Josh';
let myDOB = '01/24/1988';

console.log(myName);
console.log(myDOB);

console.log(myName, myDOB);

console.log(
    'Hello, my name is ' + myName + ' and I was born on ' + myDOB + '!'
);
// output = Hello, my name is Josh and I was born on 01/24/1988!

// 2. Write a variable that contains the outcome of the following mathematical formula: (8 + 7) / (4 - 1). Print the value of that variable to the console.

const formula = (8 + 7) / (4 - 1);
console.log(formula);
// output: 5

const formula2 = 8 + 7 / 4 - 1;
console.log(formula2);
// output: 8.75

const formula3 = (8 + 7) / (4 - 1);
console.log(formula3);
// output: 5

/*
3. True or False Questions:

'5' === 5

(5 > 4) && (6 > 7) 

(5 > 4) || (6 > 7) 

15 !== 10

!('7' == 7)

*/

// Answers:
console.log('5' === 5);
// output = false
console.log(5 > 4 && 6 > 7);
// output = false
console.log(5 > 4 || 6 > 7);
// output = true
console.log(15 !== 10);
// output = true
console.log(!('7' == 7));
// output = false

// 4. You’re in a game of rock-paper-scissors. Your opponent has just thrown paper. Using an if-else statement and console.log statements, write up the various results of each possible throw. (paper vs rock, paper vs paper, and paper vs scissors).

let myThrow = 'paper';

if (myThrow === 'rock') {
    console.log('This is a loss for the tiger blood');
} else if (myThrow === 'paper') {
    console.log('Thai');
} else if (myThrow === 'scissors') {
    console.log('WIN!');
} else {
    console.log('Pick something else, homie');
}

myThrow = 'rock';

if (myThrow === 'rock') {
    console.log('Loser');
}
if (myThrow === 'paper') {
    console.log('Tieler');
}
if (myThrow === 'scissors') {
    console.log('Winnnnnn');
}
if (myThrow !== 'rock' && myThrow !== 'paper' && myThrow !== 'scissors') {
    console.log('Does not compute.');
}

// 5. You’re playing a rousing game of red light green light! Write up a ternary statement such that when light = green, you let the console know you will head forward. Otherwise, you will stop.

const light = 'green';

if (light === 'green') {
    console.log('Go!');
} else {
    console.log('No!');
}

light === 'green' ? console.log('Go!') : console.log('No!');

// 6. You’re a QA Engineer testing your company’s login page. Write up a switch statement based on the username entered. If username = “admin”, tell the console to go to the admin page. If username = “member”, tell the console to go to the member page. Otherwise, tell the console not to allow access.

const username = 'admin';

switch (username) {
    case 'admin':
        console.log('Go to the Admin page!');
        break;
    case 'member':
        console.log('Go to the Member page!');
        break;
    default:
        console.log('Do not allow access!');
        break;
}

// 7. You’re on the board of directors for a school district. Write up if statement(s) based on age and location such that when students are between the ages of 5 and 18, AND they live in Boise, they notify the console that this student is accepted to the school district.

let myLocation = 'Boise';
let myAge = 20;

if (myAge >= 5 && myAge <= 18) {
    if (myLocation === 'Boise') {
        console.log('yurin');
    } else {
        console.log('yurout');
    }
}

if (myAge >= 5 && myAge <= 18 && myLocation === 'Boise') {
    console.log('yurin');
} else {
    console.log('yurout');
}
