// Course 9 - Array Methods Continued!

// Very quick review

// Any questions about any of the homework questions or concepts we've covered so far?

// Daniel's CHALLENGE ZONE
// You have a list of ages of people visiting your website:
const ages = [25, 74, 65, 23, 18, 42, 77, 58, 22, 30, 33, 87, 44, 19];
// 1. Let's sort this array! "SELECTION SORT"
for (let i = 0; i < ages.length; i++) {
    for (let j = i + 1; j < ages.length; j++) {
        if (ages[i] < ages[j]) {
            const oldValue = ages[i];
            ages[i] = ages[j];
            ages[j] = oldValue;
        }
    }
}
console.log(ages);

// 2. What is the average age of the people visiting the site?
let total = 0;

for (let i = 0; i < ages.length; i++) {
    total += ages[i];
}

const average = Math.floor(total / ages.length);

//--------------------------------------------------------------------

// Going back to our chores example from course 7. If we want to add a chore to our list, we can use the .push() method, which adds one or more elements to the end of an array. This method returns the new length of the array instead of an element.
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('make bed');
console.log(chores);

// Can also add more than one element at a time using a comma.
chores.push('stir cheese', 'mow lawn');

// .unshift() - same as .push() but adds one or more elements to the BEGINNING of an array and returns the new length of the array

//------------------------------------------------------------------

// FOREACH METHOD

// .forEach() - executes a provided task once for each array element. Note: this does not mutate any elements in the array. It's a lot like using a for loop to iterate through an array.
const chores = ['wash dishes', 'do laundry', 'take out the trash'];

// Iterate over chores below
chores.forEach(choreType => {
    console.log('I need to ' + choreType);
});
// choreType here is a parameter and acts as a placeholder for each element in the array

// Can also be written:
chores.forEach(choreType => console.log('I want to eat a ' + choreType));

// TASK 1
// Given this array of numbers, use the forEach method to add 5 to and log each element to the console.
const numbers = [17, 65, 288, 50, 0, 11, 99];

// ANSWER
numbers.forEach(number => console.log(number + 5));

//--------------------------------------------------------------------

// FILTER METHOD

// You organized a local food truck event and as requested you received the ages of the customers from the first hour of the event in the for of an array. Your goal is to create a new array from this data that only contains ages that are 18 and older, so you can learn more about your customer base.

// To do this, we can use the filter() method to accomplish this. The filter() method creates a new array with all the elements from the original array that satisfy a condition you create.
const ages = [12, 32, 49, 18, 21, 20, 6, 50, 16];

const isAdult = ages.filter(age => {
    return age >= 18;
});
// age here acts as a placeholder for each element in the ages array
console.log(isAdult);

// Can also be written like this:
const isAdult = ages.filter(age => age >= 18);

// TASK 2
// Use the filter method on the given array to create a new array of all the words whose length is longer than 6 letters. Save the array to a variable named result and log that variable to the console.
// HINT: the .length property can be used on individual elements
const words = [
    'sky',
    'exuberant',
    'elite',
    'limit',
    'destruction',
    'present',
    'sorceress',
];

// ANSWER
const result = words.filter(word => word.length <= 7);
console.log(result);

//-----------------------------------------------------------

// MAP METHOD

// .map() - similar to .forEach(), but CREATES A NEW ARRAY resulting from calling a provided function on each array element
// We have an array of numbers here and want to divide each number by two
const bigNumbers = [24, 50, 40, 40];

// Create the halfNumbers array below
const halfNumbers = bigNumbers.map(bigNumber => {
    return bigNumber / 2;
});

console.log(halfNumbers); // output [12, 25, 20, 20]

// TASK 3 - MAP
// You work in an Accounts Receivable department and are checking a spreadsheet for outstanding customer payments. You notice your coworker left off decimal points on the spreadsheet, so numbers are appearing incorrectly. (for example: 500.00 is appearing as 50000)
// (Spreadsheet values: [43500, 56000, 7900, 73200, 50000, 52200, 63000, 12400, 18300, 39700] )

// Using the map method, fix the numbers so that they show the correct dollar amount owed to the company and then log your new array to the console.

const dollarAmounts = [
    43500,
    56000,
    7900,
    73200,
    50000,
    52200,
    63000,
    12400,
    18300,
    39700,
];

const reducedDollarAmounts = dollarAmounts.map(dollarAmount => {
    return dollarAmount / 100;
});
console.log(reducedDollarAmounts);

//-------------------------------------------------------------
// END OF COURSE 8
//-------------------------------------------------------------

// HOMEWORK

/* FOREACH HW

You and your friend are playing Scrabble and have made a bet: whoever can create the longest word wins the bet. The following array shows the words that have been played; your friend's turn starts at index 0, yours starts at index 1, and you alternate turns.
[happen, regards, through, alternate, laptop, scary, wonder, forgot, keychain, justice]
1. Using the foreach method, cycle through the array and save the longest element to a variable. (Hint: if this element is longer than the previously longest variable, reassign the variable.)
2. Use the indexof method to determine who played the longest word. Write to the console a message declaring the winning word, and the person who played it.
HINT: You can use modulus (mod) with a conditional statement to figure out which player's turn it is! See end of recording for Course 6 to learn more about mod.
*/

const words = [
    'happen',
    'regards',
    'through',
    'alternate',
    'laptop',
    'scary',
    'wonder',
    'forgot',
    'keychain',
    'justice',
];

let longestWord = '';

words.forEach(word => {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
});

console.log(longestWord);

const winningIndex = words.indexOf(longestWord);
console.log(winningIndex);

if (winningIndex % 2 === 0) {
    console.log('You won');
} else {
    console.log('Other guy won');
}

//---------------------------------------------------------------

// MAP AND FILTER HW

// 1. You're given an array of NASCAR race completion times in minutes, and you need to convert the times to seconds and save them in a new array.
// 2. Once that's done, you'll need to create another array filled with only those times that are 460 seconds or less. Make sure to use arrays methods for these problems.
// 3. Log the qualifying times array to the console.

const raceTimesInMinutes = [
    8.543,
    7.934,
    8.919,
    7.868,
    7.547,
    7.989,
    8.641,
    8.556,
    7.632,
    7.425,
    8.96,
    8.953,
    7.622,
    8.001,
    8.609,
    7.439,
    7.59,
    7.426,
    8.202,
    8.591,
    10.309,
    7.566,
    8.307,
    7.424,
]; // prettier-ignore

const raceTimesInSeconds = raceTimesInMinutes.map(raceTime => {
    return raceTime * 60;
});

console.log(raceTimesInSeconds);

const qualifyingTimes = raceTimesInSeconds.filter(raceTime => raceTime <= 460);

console.log(qualifyingTimes);

//-------------------------------------------------------------

// BONUS HW PROBLEM - .find()

// There are many methods in the proverbial sea, so we recommend spending time looking through and practicing different ones that you find useful. Here is a problem that uses a method we did not talk about. https://www.w3schools.com/jsref/jsref_find.asp
// Use the .find() method on the array below to find the first element in the array above 30.

const numbers = [
    20,
    18,
    6,
    27,
    19,
    7,
    23,
    23,
    23,
    9,
    10,
    16,
    55,
    130,
    44,
    80,
    30,
    35,
]; // prettier-ignore

const firstOver30 = numbers.find(number => number > 30);

console.log(firstOver30);
// output: 55

//------------------------------------------------------------------

/* EXTRA

// Use the forEach method on the below array of colors to log each color name and index to the console.
const colors = ['red', 'blue', 'black', 'purple', 'orange'];

colors.forEach(color => {
  console.log('The color ' + color + ' is at index ' + colors.indexOf(color));
})

*/

//--------------------------------------------------------------------

// MORE EXTRA

/*
const unreleasedGames = [
    'Cyberpunk 2077',
    'The Last of Us II',
    'Final Fantasy VII Remake',
];

// FF7 Remake released, so let's remove the last element from this array
unreleasedGames.pop();
console.log(unreleasedGames);
// output: ['Cyberpunk 2077', 'The Last of Us II']
*/

/*
Brief background of filter method

// without using the .filter() method
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);

// old syntax for using the .filter() method
const canDrink = ages.filter(function (age) {
  if (age >= 21) {
    return true;
  }
})
console.log(canDrink);

*/
