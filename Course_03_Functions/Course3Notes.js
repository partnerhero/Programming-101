/*
    Course 3 - Functions!

    Josh's intro:

    Today we're talking a concept that makes doing the same thing over and over again really convenient. So if you've ever set up your favorite radio stations in your car, if you've ever written a formula in excel and dragged it down a column, or even customized your email inbox, then you're familiar with this concept. Creating something to make a task easier for you in the future. Keep that in mind today as we talk about functions.
*/

/*
    Navigate back to repl!
    https://repl.it/languages/nodejs

    A function houses a block of code that performs a task, but it only does so when we tell it to, otherwise known as calling the function. We can call functions as many times as we want without needing to rewrite block of code each time.

    Syntax:
    const functionName = () => {
        return 'something';
    };

*/

// Let's look at an example and talk through it.
// Follow along:
const catchPhrase = () => {
    return 'Hello World!';
};

/*
    Let's go over the syntax of this function we just wrote:
        1. const - used to declare the function
        2. catchPhrase - name of the function w/ camelCase
        3. () - this takes no parameters, we'll talk about this soon
        4. => - "equals sign" and "greater than symbol" denotes that you're writing a function. When you see this, you'll know you're working with a function.
        5. {} - block of code to run when calling the function
        6. return - Functions return (or pass back) their resulting values using the "return" keyword. The "return" ends function execution and returns the resulting value to the location where it was called. If you forget the return keyword, the function will return undefined.
*/

// Running our example won't do anything, we've only declared the function. We have to "call" the function to get it to do something.
catchPhrase(); // syntax for calling

// Normally we wouldn't be able to see this if we run it, we would need to console.log() this, but repl displays it for us anyway. Let's wrap it in a console.log()
console.log(catchPhrase);

// Any questions?

/*
    This example was very bare bones, but functions often takes an input, perform a task on that input, and then produce an output.

    EXAMPLE:
    Let's say we want to use Javascript to figure out the areas of some rectangles. Without using a function we'd need to create the width, height, and then the result.
*/
const width = 5;
const height = 2;
const rectangleArea = width * height;
console.log(rectangleArea);

// We would need to do this again for another rectangle
const width2 = 4;
const height2 = 9;
const rectangleArea2 = width2 * height2;
console.log(rectangleArea2);

/*
    This process requires several lines of code, but what if we wanted the area for 30 different rectangles? Writing this out line by line would be tedious and take a long time. Functions allow us to write up a template for this task that can be run any time we want and as many times as we want.
*/

// Follow along:
const rectangleArea = (width, height) => {
    return width * height;
};

// "width" and "height" inside the parantheses are called parameters. These are different than variables since we aren't declaring them. Basically they act as placeholders until we call the function. The paramters can be named anything you want, but they should at least make sense.

console.log(rectangleArea(3, 4));
// The "3" and "4" here are the arguments we pass in when calling the function. They represent the width and height of a rectangle here. They are passed into the function and block of code and executed as you can see here.

// We can now call this function multiple times with different arguments
console.log(rectangleArea(9, 2));

/*
    TASK 1
    
    Write a function that takes 3 parameters: (num1, num2, num3) and then adds them all together in it's block of code. Call the function and wrap it in a console.log() you can see the output.
*/

// Answer
const tripleSum = (num1, num2, num3) => {
    return num1 + num2 + num3;
};
console.log(tripleSum);

/*
    OLD SYNTAX

    We've been using what's called "arrow function" syntax up until now, but before 2015 functions were written a little differently. It's best practice to use arrow functions, so that's what you'll always see in this class, but it's good to recognize older versions of code too.

    Syntax:
    function functionName(params) {
        return something
    }

    There's no const declaration here, no "equals sign," and no arrow syntax either. There are quite a few minor differences between the older syntax and the new, but those don't affect us, so it's preferred to use the arrow function syntax.
*/

// Real quick, the above written in old syntax
function rectangelArea(width, height) {
    return width * height;
}
rectangelArea(5, 3); // Called in the same way

/*
    Scope

    Now let's talk about scope. Scope refers to where a variable declaration is accessible.
    
    Global Scope - A variable is inside the global scope when it can be accessed from anywhere in the program. Variables defined in this scope are called global variables.

    Local scope - A variable is inside local scope when it's declared within a function or a block of code. A local variable cannot be accessed from outside the function.
*/

// Follow along
const motto = 'One day at a time.';

const sayMotto = () => {
    return 'My motto is, ' + motto;
};
console.log(sayMotto());
console.log(motto);
// Since we can access motto from outside the function, motto is a global variable. Global variables can also be accessed from within functions.

// Let's rewrite this so motto is declared inside the function so we can see how local scope works
const sayMotto = () => {
    const motto = 'One day at a time.';
    return 'My motto is, ' + motto;
};
console.log(sayMotto());
console.log(motto); // error: motto is not defined

/*
    Best Practice

    It is usually best practice to stick with as small of a scope as needed when programming to keep your code clean and uncluttered. This also allows variable names to be reused.
    
    Consider a program with 3000 lines of code and three different developers working on it. If line 1842 has global variable "i" declared, then it can't be used in any other location. There's a lot of literature arguing for and against this point, so I encourage you all to check out some resources.
*/

// Functions with one parameter do not need parantheses
// Follow along:
const squaredNumber = num => {
    return num * num;
};
console.log(squaredNumber(3));

// Shorthand - Since the above function has a single line of code in the block, it can be rewritten and shortened like this:
const squaredNumber = num => num * num;
console.log(squaredNumber(3));

/*
    Adding Complexity

    We can also incorporate conditional statements from the last class into functions to add some complexity.

    Let's go through an example real quick:
    You want to write a function that when called, divides two numbers, but you need to make sure that you don't divide by 0!
*/
// Follow along:
const divide = (numerator, denominator) => {
    if (denominator > 0) {
        return numerator / denominator;
    } else {
        return 'Denominator must be greater than 0!';
    }
};
console.log(divide(8, 2));
console.log(divide(5, 0));

// Explain the logic and flow of this example. Also point out that we can "return" inside if-else instead of console.log()

/*
---------------------------------------------------------------------------------------
MAYBE SKIP THIS DEPENDING ON TIMEBOX

// TASK 2:
// Write a function with one parameter that when called, returns a message that says "Hi" to a name you pass in as an argument.
const greetUser = name => {
    return 'Hi ' + name;
};

console.log(greetUser('Josh'));
console.log(greetUser('Daniel'));
//--------------------------------------------------------------------------------------
*/

/*
    TASK 3
  
    A local bank is running a promotion! Customers who have $500 in their account will automatically receive a $20 bonus. Write a function that takes a name and a balance, then returns a message displaying the name whether or not they received the bonus based on the above conditions. Call your function and wrap it in a console.log() when you finish.
        HINT:
            1. name and balance should be parameters
            2. use an if-else statment to check conditions
            3. use the return keyword for your message
*/
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

// End of course
