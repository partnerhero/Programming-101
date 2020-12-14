// 1. You want to buy some fine chocolate from your local chocolate shop, but it costs 15 money. Write a conditional statement such that when your spending money is greater than or equal to the cost of the fine chocolate, you log to the console that you're buying it. Otherwise log to the console that you still need to save more money.
let spendingMoney = 20;
const fineChocolate = 15;
if (spendingMoney >= fineChocolate) {
    console.log('Buy the chocolate!');
} else {
    console.log('Keep saving!');
}

// 2. Your car needs its oil changed every 5000 miles. Based on the amount of miles your car has driven since the last oil change, write a ternary conditional statement that logs to the console telling you if you should change your oil or not.
let milesSinceLastOilChange = 5000;
milesSinceLastOilChange >= 5000
    ? console.log('Change oil.')
    : console.log('Do not change oil.');

// 3. You’re on the board of directors for a school district. Write up conditional statement(s) based on age and location such that when students are between the ages of 5 and 18, AND they live in Boise, log the console that this student is accepted to the school district. Otherwise, log to the console that they do not meet the criteria.
let myLocation = 'Boise';
let myAge = 20;

if (myAge >= 5 && myAge <= 18) {
    if (myLocation === 'Boise') {
        console.log('Accepted!');
    } else {
        console.log('Does not meet criteria.');
    }
}

if (myAge >= 5 && myAge <= 18 && myLocation === 'Boise') {
    console.log('Accepted');
} else {
    console.log('Does not meet criteria.');
}

// 4. You’re in a game of rock-paper-scissors. Your opponent has just thrown paper. Using an if-else statement and console.log statements, write up the various results of each possible throw. (paper vs rock, paper vs paper, and paper vs scissors). Hint: Since your opponent's throw does not change, you don't need to include it as a variable.
let myThrow = 'rock';

if (myThrow === 'rock') {
    console.log('You lose');
} else if (myThrow === 'paper') {
    console.log('You tie');
} else if (myThrow === 'scissors') {
    console.log('You win');
} else {
    console.log('Must throw rock, paper, or scissors');
}

// OR

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

// 5. You’re a QA Engineer testing your company’s login page. Write up a switch statement based on the username entered. If the username is 'admin', log to the console to go to the admin page. If the username is 'member', log to the console to go to the member page. Otherwise, tell the console to not allow access.
const username = 'member';

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
