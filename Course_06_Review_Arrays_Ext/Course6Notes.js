//Arrays and methods

/*

ARRAYS
Arrays organize and store data in lists using the [] bracket symbols. Each item of data in an array is called an element, and any data type can be stored in arrays: strings, numbers, booleans, etc. The data is ordered, and each element has an index that denotes its position within the array starting at 0.

*/

// Quick Summary
// We save arrays to variables like this:
const groceryList = ['Toilet Paper', 'Eggs', 'Bread'];
console.log(groceryList);

// Each element's position within the array is called its index, and it starts at 0. So, Toilet Paper's index is 0, eggs is 1, and bread is 2.

// To access an individual element, use bracket notation:
console.log(groceryList[2]); // output: Bread
console.log(groceryList[1]); // output: Eggs

//---------------------------------------------------------------

// Even though groceryList is declared with a const, the values inside the array, which are called elements, are mutable. This means we can mutate them if we want, but we cannot reassign or redeclare the groceryList array.

// Let's say we have enough eggs from the last time we shopped, we can change the Eggs element to something we need like this:
groceryList[1] = 'Milk';
console.log(groceryList);

//---------------------------------------------------------------

// Arrays have properties that we can use to get information about the array. One example of a useful property is the .length property.

// .length property - returns the number of elements in an array
const shoeTypes = ['tennis', 'basketball', 'cleats', 'boots'];

console.log(shoeTypes.length); // output: 4

//--------------------------------------------------------------------

// Arrays can also have methods called on them, which perform a specific action on the array according to the specific method. You are actually already familiar with one method, .log() is a console method, and this is the format we use when calling methods.

// .indexOf() - a method that returns the first index at which a given element can be found in an array. It returns -1 if the element is not present
const stars = ['Arcturas', 'Vega', 'Alpha Cetauri', 'Sirius', 'Betelgeuse'];

console.log(stars.indexOf('Sirius')); // output: 1

// Rewriting 'Vega' to 'Sagitarrius A*' will output -1

//--------------------------------------------------------------------

// .pop() - removes the last element of an array and returns that removed element
// We have an array here of unreleased video games in descending order.
const unreleasedGames = [
    'Cyberpunk 2077',
    'The Last of Us II',
    'Final Fantasy VII Remake',
];

// FF7 Remake released, so let's remove the last element from this array
unreleasedGames.pop();
console.log(unreleasedGames);
// output: ['Cyberpunk 2077', 'The Last of Us II']

// Can also save the .pop() method to a variable if you want.

// .shift() - same as .pop() but removes one or more elements from the BEGINNING of an array and returns the removed element

//--------------------------------------------------------------------

// .push() - adds one or more elements to the end of an array and returns the new length of the array
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('make bed');
console.log(chores);
// output: ['wash dishes', 'do laundry', 'take out trash', 'make bed']

// Can also add more than one element at a time using a comma

// .unshift() - same as .push() but adds one or more elements to the BEGINNING of an array and returns the new length of the array

//--------------------------------------------------------------------

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

// .filter() - creates a new array with all elements that satisfy the given condition
// Let's say we have an array of ages and we want to find the ages that are 21 and older so we know who is legally allowed to drink alcohol in the United States
const ages = [12, 32, 49, 18, 21, 20, 6, 50, 70];

const canDrink = ages.filter(age => age >= 21);

console.log(canDrink);

//---------------------------------------------------------

// TASK 1 - FILTER
// Use the filter method on array below to create a new array of all the words whose length is longer than 6 letters. Save the array to a variable named result and log that variable to the console.
const words = [
    'sky',
    'exuberant',
    'elite',
    'limit',
    'destruction',
    'present',
    'sorceress',
];

const result = words.filter(word => word.length <= 7);
// .length here is used on each element in array - can be used on both arrays and elements

console.log(result);

//------------------------------------------------------------------

// .forEach() - executes a provided function once for each array element. Note: this does not mutate any elements in the array
const fruits = ['mango', 'papaya', 'pineapple', 'kiwi'];

// Iterate over fruits below
fruits.forEach(fruitType => {
    console.log('I want to eat a ' + fruitType);
});
// fruitType here is a parameter and acts as a placeholder for each element in the array

//--------------------------------------------------------------------

// TASK 2 - FOREACH
// Given this array of numbers, use the forEach method to add 5 to and log each element to the console.
const numbers = [17, 65, 288, 50, 0, 11, 99];

numbers.forEach(number => console.log(number + 5));

//-----------------------------------------------------------

// .map() - similar to .forEach(), but CREATES A NEW ARRAY resulting from calling a provided function on each array element
// We have an array of numbers here and want to divide each number by two
const bigNumbers = [24, 50, 40, 40];

// Create the halfNumbers array below
const halfNumbers = bigNumbers.map(bigNumber => {
    return bigNumber / 2;
});

console.log(halfNumbers);
// output [12, 25, 20, 20]

//----------------------------------------------------

// TASK 3 - MAP
// You work in an Accounts Receivable department and are checking a spreadsheet for outstanding customer payments. You notice your coworker left off decimal points on the spreadsheet, so numbers are appearing incorrectly. (for example: $500.00 is appearing as $50000)
// (Spreadsheet values: [43500, 56000, 7900, 73200, 50000, 52200, 63000, 12400, 18300, 39700] )

// Using the map method, fix the numbers so that they show the correct dollar amount owed to the company.

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

// HOMEWORK

/* PUSH AND POP HW

1. Create an array with the following animals: cat, dog, horse, monkey
2. Log the length of this array to the console
3. Call the .push() method on this array to add bird and dog to the array
4. Log the length of this array to the console
5. Call the .pop() method on this array to remove the last element
6. Log the length of this array to the console

*/

let animals = ['cat', 'dog', 'horse', 'monkey'];
console.log(animals.length);

animals.push('bird', 'dog');
console.log(animals.length);

animals.pop();
console.log(animals.length);

//------------------------------------------------------------------

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
// MIXED UP NOTES:
/*
ARRAYS
Arrays organize and store data in lists using the [] bracket symbols. Each item of data in an array is called an element, and any data type can be stored in arrays: strings, numbers, booleans. The data is ordered, and each element has an index that denotes its position within the array.
*/

// Example, we save arrays to variables like this:
const groceryList = ['Toilet Paper', 'Eggs', 'Bread'];
console.log(groceryList);
// Each element's position within the array is called its index, and it starts at 0. So, Toilet Paper's index is 0, eggs is 1, and bread is 2.

// groceryList is an array with 3 elements. To access an individual element requires bracket notation:
console.log(groceryList[2]); // output will be Bread

// What will we see with this?
console.log(groceryList[1]); // output will be Eggs

// Even though groceryList is declared with a const, the array is mutable, meaning we can mutate the elements if we like. We still cannot reassign the groceryList array though, we can only reassign elements when declaring with const. Let's say we have enough eggs from the last time we shopped, we can change the Eggs element to something else:
groceryList[1] = 'Milk';
console.log(groceryList);

// QUICK TASK 1:
// Create an array of three hobbies
const myHobbies = ['video games', 'sleeping', 'eating'];

// Log the first element of your array to the console
console.log(myHobbies[0]);

// Change the last element of your array to SOMETHING
myHobbies[2] = 'SOMETHING';

// There are certain properties and methods that can be used in javascript, and I encourage you to look through some of the resources out there to discover what they can do. Here's one very useful example, the length property.
// We'll be talking a lot about these proper ties and methods in the next course

// This returns the length of an array:
console.log(myHobbies.length);
// Go ahead and try it with your hobbies array

// ARRAYS TASK 2:
// The length property can be useful for iterating through array indexes.
// Given this fruits array, use a for loop to log each item in the array to the console. (Hint: Remember that array indexes start at 0)
const fruits = ['apple', 'peach', 'grape', 'elderberry'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// HOMEWORK
// When would you want to use a global variable? When not?

// Functions HW Problem 1
// Write a function where you input the day of the week as an argument and it tells you whether to take the trash out or not on that day.
const takeOutTrash = day => {
    if (day === 'Thursday') {
        return true;
    } else {
        return false;
    }
};

console.log(takeOutTrash('Tuesday')); // output is false
console.log(takeOutTrash('Thursday')); // output is true

// Functions HW Problem 2
// Using a function and a for loop, console.log the area of squares with lengths 1 through 10 incrementing by one.
// Hint: remember area of a square = length * length
const areaOfSquare = length => {
    return length * length;
};

for (let i = 1; i <= 10; i++) {
    console.log(areaOfSquare(i));
}

// Arrays HW Problem 1
// Write a list of your four favorite film stars and log each to the console using a for loop.
const starNames = [
    'Cathryn Blanchett',
    'Robert Downey Sr',
    'Zach Galifanakiszcsz',
    'Cassandra Bullock',
];

for (let i = 0; i < starNames.length; i++) {
    console.log(starNames[i]);
}

// Bonus Challenge Question!
// Given these two arrays, write a program that compares the numbers between the arrays and logs to the console any numbers that are in both arrays. (HINT: Nested for loops can be useful)

const myArray = [6, 20, 19, 17];
const yourArray = [20, 17, 23, 5];

for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < yourArray.length; j++) {
        if (myArray[i] === yourArray[j]) {
            console.log('Both arrays have the number: ' + yourArray[j]);
        }
    }
}
