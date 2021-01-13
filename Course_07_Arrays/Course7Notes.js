// Course 7 - Arrays!

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

//----------------------------------------------------------------------------------------

// Length Property

// Arrays have a property we can access to gain more information about them. This is called the length property, and it tells us the length of the array: how many many elements are in the array.

// In this array of types of shoes, how many elements are there?
const shoeTypes = ['tennis', 'basketball', 'cleats', 'boots'];

// That's right, 4! The length property will show us this too.
// Talk about dot notation.
console.log(shoeTypes.length); // output: 4

// It can be easy to get this confused with the index sometimes too.

// If we think back to our list of chores, a good use for the length property could be to set up a conditional statment telling us if the length of our chore list is longer than 3, then we need to take two days to do all of our chores.
const chores = [
    'Do laundry',
    'Go grocery shopping',
    'Get a haircut',
    'take out trash',
];
const doChores = () => {
    if (chores.length > 3) {
        console.log('Take 2 days to complete your chores.');
    } else {
        console.log('You can do all your chores today.');
    }
};
doChores();

// TASK 4:
// Create an array of the three primary colors (red, yellow, blue). Create a function with no parameters called colorChecker and inside this function write an if statement. Your if statement should check if the length of the color array is 3. Return true if length is 3 and false if not.
const colors = ['red', 'yellow', 'blue'];
const colorChecker = () => {
    if (colors.length === 3) {
        return true;
    } else {
        return false;
    }
};
console.log(colorChecker());

//------------------------------------------------------------------------------
// END OF COURSE 7
//------------------------------------------------------------------------------

// If extra time

// FOR LOOPS AND ARRAYS:
// The length property can be useful for iterating through array indexes.
// Given this fruits array, use a for loop to log each item in the array to the console. (Hint: Remember that array indexes start at 0)
const fruits = ['apple', 'peach', 'grape', 'elderberry'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

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

// Challenge Question!
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
