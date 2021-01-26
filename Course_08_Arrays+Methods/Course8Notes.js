// Course 8 - Array Methods!

// Quick Review of Arrays: Let's review question number 5 from last course's homework.

// 5. Using the original array in question 3 (const hobbies = ['playing video games', 'snorkeling', 'rock climbing', 'playing piano']), write a for loop that iterates through the array and prints "<hobby> is fun to do!" for each hobby in the array.

const hobbies = [
    'playing video games',
    'snorkeling',
    'rock climbing',
    'playing piano',
];

for (i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i] + ' is fun to do!');
}

//----------------------------------------------------------------------------

// Daniel's Challenge Question!
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

const theirArray = [99, 7, 20, 31];

for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < yourArray.length; j++) {
        for (let k = 0; k < theirArray.length; k++) {
            if (myArray[i] === yourArray[j] && myArray[i] === theirArray[k]) {
                console.log(
                    'The number ' + theirArray[k] + ' is in all three arrays'
                );
            }
        }
    }
}

//-----------------------------------------------------------------------------

/*
    INTRO!

    Last course we introduced the basics of arrays, and today you're going to learn more about how to manage and manipulate them further.
*/

//-----------------------------------------------------------------------------

// WHAT IS A METHOD?

// A method is basically a function with a pre-determined set of instructions. We can call methods on our arrays to perform a variety of tasks, but we'll only be showing you a few useful ones.

// You are all actually familiar with a method already, the .log() method is a console method that performs the task of logging something to the console. Methods for arrays use the same dot notation as the console.log().

// .indexOf() - a method that returns the first index at which a given element can be found in an array. It returns -1 if the element is not present.
const stars = ['Arcturas', 'Vega', 'Sirius', 'Betelgeuse'];

console.log(stars.indexOf('Sirius')); // output: 1

// What will my output be for the following?
console.log(stars.indexOf('Arcturas')); // output: 0

// What will my output be for the following?
console.log(stars.indexOf('North Star')); // output: -1

//--------------------------------------------------------------------

// Let's say you buy and sell houses but you're only allowed to own three in addition to your permanent residence. You keep your inventory organized using an array.
const myHouses = ['house1', 'house2', 'house3'];

// You just sold 'house3' so now you need to remove it from your array. We will be using a method to mutate this array and remove the last element. This is called the .pop() method
myHouses.pop();
console.log(myHouses);
// The pop() method also returns the removed element. Console.log() the above method to show this.
// You can even save the .pop() method to a variable if you want.

// TASK 1
// You are given this array of unreleased films and your task is to remove the last element in the aray since that movie is being released today. Save the removed element to variable called todaysRelease, and the log the array to the console to check your work.
const unreleasedFilms = ['Space Jam', 'Avatar 2', 'The Dig'];

// ANSWER
const todaysRelease = unreleasedFilms.pop();
console.log(unreleasedFilms);
