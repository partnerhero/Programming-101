/*
Functions
A function houses a block of code that performs a task when called. Writing a function allows for this task to be called, or invoked, multiple times without needing to rewrite the code.

A function often takes an input, performs a task on that input, and produces an output.
*/

// Writing each line vs function
// If we wanted to figure out the area of a rectangle, without a function we'd need to create the width, height, then calculate the area:
const width = 5;
const height = 2;
const rectangleArea = width * height;
console.log(rectangleArea);

const width2 = 4;
const height2 = 9;
const rectangleArea2 = width2 * height2;
console.log(rectangleArea2);

// This requires several lines of code to do, but what if we had 30 different sized rectangles we needed to find the area of? This would be tedious and require a lot of lines of code to accomplish. Functions allow us to write up a task that can be run anytime we invoke them and we can invoke them many times as we want. Let's look at an example!

// OLD SYNTAX pre-ES6
function rectangelArea(width, height) {
    return width * height;
}
// Functions return (pass back) values using the return keyword. Return ends function execution and returns the specified value to the location where it was called. If you forget the return keyword, the function will return undefined.

// NEW SYNTAX called an arrow function:
const rectangleArea = (width, height) => {
    return width * height;
};

rectangleArea(3, 4); // This invokes the function and does the calculation, but it does not log the results to the console. To see the calculation, console.log this.
console.log(rectangleArea(3, 4));

/*
Let's go over the syntax of this function we just wrote:
Const keyword
Name of the function
Parameters - can be anything, usually choose a word that's relevant to what your arguments will be
Arrow - denotes that you're writing a function. When you see this, you'll know you're working with a function.
Return keyword - We talked about this
Block of code - between the curly braces
Call/invoke syntax
Arguments - values passed into a function when it is called.
*/

// We can also have a function without parameters that just runs your block of code when called.
const catchPhrase = () => {
    return 'Hello World!';
};
console.log(catchPhrase());

// Now let's talk about scope. Scope is where the variable declaration is valid.
// Global Scope - refers to the context within which variables are valid and accessible in every part of the program. Variables defined in this scope are called global variables.
const motto = 'Eat, love, eat.';

const sayMotto = () => {
    return 'My motto is, ' + motto;
};
console.log(sayMotto());
console.log(motto);
// The scope of motto is global here

// We would actually want to write this differently, because we want to stick with smaller scope as often as possible. I'll rewrite this to show how Local Scope works:
const sayMotto2 = () => {
    const motto2 = 'Not once, not never.';
    return 'My motto is, ' + motto2;
};
console.log(sayMotto2());
console.log(motto2); // error: motto is not defined
// Variables in local scope can be reused

// Sticking with local scope when you can is a best practice in programming. Let's say you have 3000 lines of code for a program and three different developers working on it. If line 1842 has global variable i declared, then it can't be used in another location. This is just one example of why sticking with local scope is preferred. There's a lot of literature arguing for and against this point, so I encourage you to check out some resources.
// Also memory concerns could be an issue.

// If you remember when we talked about loops last course; we used global variable when working with while loops.

// Example of a function with one parameter
const squaredNumber = num => {
    return num * num;
};

// Shorthand - Since the above function has a single line of code in the block, it can be rewritten like this:
const squaredNumber = num => num * num;

// TASK 1:
// Write a function with one parameter that when called, returns a message that says "Hi" to a name you pass in as an argument.
const greetUser = name => {
    return 'Hi ' + name;
};

console.log(greetUser('Josh'));
console.log(greetUser('Daniel'));

// TASK 2:
// A local bank is running a promotion, where customers who have $500 in their account will receive a $20 bonus. Write a function that takes a name and balance argument and returns a message indicating whether they will receive the bonus or not.

const bankBonus = (name, balance) => {
    if (balance >= 500) {
        return (
            'Congratulations ' + name + '!' + ' You qualify for the $20 bonus!'
        );
    } else {
        return (
            'Sorry ' + name + ', you do not qualify for the bonus this time.'
        );
    }
};

console.log(bankBonus('Josh', 517));
console.log(bankBonus('Daniel', 21));

// --------------------------------------------------------

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
