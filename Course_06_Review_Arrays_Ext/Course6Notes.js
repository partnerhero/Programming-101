// Extensions, Reviews, and Arrays!

/*
    VSCode extension: Prettier

    Josh will do quick Prettier extension install and setup follow-along
*/

/*
    Quick Review

    Let's ask if anybody had trouble with the homework, and specifically where they had the trouble. Even if they finished the homework with all the right answers, we can ask if there were spots that challenged them.

    If nobody answers, Josh will chime in with something.
*/

/*
    Josh Intro

    Today we're talking about arrays. Think of arrays as lists. With arrays we can create lists of almost anything we want! Kind of like writing a to do list on a notepad or computer. Arrays allow us to store data in lists in Javascript and then manage them.
*/

// We're probably all familiar with lists of chores! Let's make one right now!
// Use a multi-line comment:
/*
Chores:

1. Do laundry
2. Go grocery shopping
3. Get a haircut

Once we finish with something on our list, we'll want to cross it off our list. We also want to be able to add new chores to our list, and even make edits to the chores on the list.

We can do all of these things using arrays in Javascript. Arrays store data in lists and then let us make changes to the data. There are a lot of cool things that Javascript allows us to do with arrays.
*/

// Now let's all create our chores as a list in Javascript, called an array.
// Explain the notation as you go along (i.e. variable, brackets, commas, etc.)
const chores = ['Do laundry', 'Go grocery shopping', 'Get a haircut'];
// Log to the console to see your list
console.log(chores);

// Arrays can store many data types (i.e. numbers, strings, booleans), but we'll mostly be working with strings today.

// TASK 1:
// Let's make another list! We said we need to go grocery shopping, so go ahead and make a grocery list in array format like above. Name your array groceryList and put 'Milk' 'Eggs' and 'Bread' on your list. Log your array to the console once you're done.
const groceryList = ['Milk', 'Eggs', 'Bread'];
console.log(groceryList); // Does everyone see their array output?

// Now, let's break down this grocery list a little bit and talk more about how arrays work.

// Each piece of data in this array is called an element.
// 'Milk' is an element, 'Eggs' is an element, and 'Bread' is an element.

/*
    INDEX

    We can keep track of each element's position in the array using what is called its index. The first element in an array is at index 0, and it increments by one for each element after that. This means the index of 'Milk' is 0 and the index of 'Eggs' is 1. This will help us be able to manage the elements in our lists!

    What does that mean the index of the element 'Bread' is?

    If we add another element to the end of our array, that will be at index 3 and so on.
*/

// Let's say we want to access only the first element on our groceryList array and log it to the console. First we need to know it's index! What is the index of the first element?
// So, using the index of the element, and brackets [], we can access and log to the console a single element from our array.
console.log(groceryList[0]); // output: Milk

// What would the output of this console.log be?
console.log(groceryList[1]); // output: Eggs

// TASK 2:
// Now on your own, log to the console the element 'Bread' using the bracket notation and index.
console.log(groceryList[2]); // output: Bread

// TASK 3 Part 1:
// Create an array of any three movie titles and then log that array to the console.
const movies = ['The Dark Knight', 'Inception', 'The Prestige'];
console.log(movies);

// Part 2:
// Now log to the console the element at index 0;
console.log(movies[0]);

//-------------------------------------------------------------------------

/*
    Mutation

    Let's talk about the concept of altering values of some variables that are declared with const; this is known as mutation.

    Our groceryList array here is declared with const, but the array itself is mutable, meaning we can mutate or change the array if we want. To be clear, we still cannot reassign or redeclare the groceryList array. In javascript, this is only possible with arrays and objects, but values like strings, numbers, and booleans cannot be mutated.

    MAYBE REMOVE THIS DESCRIPTION: Const is a type of variable declaration, const is a constant reference and not constant value. The const declaration creates a reference to a value. It does not mean the value it holds cannot be changed, just that the variable identifier cannot be reassigned.
    
    Mutations can include adding or removing elements and changing elements, but there are many other ways that arrays can be mutated.
*/

// Let's look at an example to make sense of this. Looking back at our groceryList array, Let's say we actually have enough eggs but we actually need Salt. So let's change Eggs into Salt.
// To do this we again use bracket notation and the index to access the element we want: 'Eggs'
groceryList[1] = 'Salt';
// If we log our array to the console now, we'll see that the element at index 1 changed from 'Eggs' to 'Salt'
console.log(groceryList);

// TASK 4:
// Create an array of three hobbies
const myHobbies = ['video games', 'sleeping', 'eating'];

// Log the first element of your array to the console
console.log(myHobbies[0]);

// Change the last element of your array to SOMETHING
myHobbies[2] = 'SOMETHING';

//------------------------------------------------------------------------------
// END OF COURSE 6
//----------------------------------------------------------------------------

// Arrays have properties that we can use to get information about the array.
// WHAT IS A PROPERTY?
// One example of a useful property is the length property, which returns the total number of elements in an array.

// In this array of types of shoes, how many elements are there?
const shoeTypes = ['tennis', 'basketball', 'cleats', 'boots'];

// That's right, 4! The length property will show us this too.
// Talk about dot notation.
console.log(shoeTypes.length); // output: 4

// If we think back to our list of chores, a good use for the length property could be to set up a conditional statment telling us if the length of our chore list is longer than 5, then we need to take two days to do all of our chores or something.

// TASK 4:
// Create an array of

// We'll be talking a lot more about properties and other cool things you can do with arrays in the next course.

// FOR LOOPS AND ARRAYS:
// The length property can be useful for iterating through array indexes.
// Given this fruits array, use a for loop to log each item in the array to the console. (Hint: Remember that array indexes start at 0)
const fruits = ['apple', 'peach', 'grape', 'elderberry'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//------------------------------------------------------------------------------

// HOMEWORK
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

//-----------------------------------------------------------------------------

// WHAT IS A METHOD?
// A method is basically a pre-built function that performs a specific task on whatever it's called on (WORDING)
// We can call methods on array to do a wide variety of tasks, here are a few useful ones.

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
