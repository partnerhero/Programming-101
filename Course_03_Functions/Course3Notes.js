/*
    Course 3 - Functions!
*/

/*
    Navigate back to repl!
    https://repl.it/languages/nodejs

    A function houses a block of code that performs a task when we tell it to, which is known as calling the function. We can call functions as many times as we want without needing to rewrite the block of code each time.

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
        4. => - "equals sign" and "greater than symbol" denotes that you're writing a function. When you see this, you'll know you're working with a function. Called arrow function.
        5. {} - block of code to run when calling the function
        6. return - Functions return (or pass back) their resulting values using the "return" keyword. The "return" ends function execution and returns the resulting value to the location where it was called. If you forget the return keyword, the function will return undefined.
*/

// We've only declared the function, we still have to call it to run it.
catchPhrase(); // syntax for calling

// Normally we wouldn't be able to see this if we run it, we would need to console.log() this, but repl behaves like a terminal, which we won't always be using.
// Let's wrap it in a console.log()
console.log(catchPhrase());

// Any questions?

/*
    This example was very bare bones, but functions often takes an input, perform a task on that input, and then produce/return an output.

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
const rectangle2Area = width2 * height2;
console.log(rectangle2Area);

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
    You want to write a function that adds three numbers together.
        1. Declare a function that takes 3 parameters: (num1, num2, num3)
        2. In the function's block of code, add num1, num2, and num3 together
        3. Call the function with 3 random numbers as arguments.
        4. Wrap it in a console.log() and run it.
*/

// Answer
const tripleSum = (num1, num2, num3) => {
    return num1 + num2 + num3;
};
console.log(tripleSum(6, 5, 2));

// Functions with one parameter do not need parantheses
// Let's write a function that will square any number we pass in:
const squaredNumber = num => {
    return num * num;
};
console.log(squaredNumber(3));

// Shorthand - Since the above function has a single line of code in the block, it can be rewritten and shortened like this:
const squaredNumber = num => num * num;
console.log(squaredNumber(3));

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

    It is best practice to stick with as small of a scope as needed when programming to keep your code clean and uncluttered. This also allows local variable names to be reused throughout a program.
    
    Consider a program with 3000 lines of code and three different developers working on it. If line 1842 has global variable "i" declared, then it can't be used in any other location.
*/

/*
    Adding Complexity

    We can also incorporate conditional statements from the last class into functions to add some complexity.

    Let's go through an example real quick:
    You want to write a function that when called, divides two numbers, but you need to make sure that you don't divide by 0!
*/
// Follow along:
const divide = (numerator, denominator) => {
    // if denominator larger than 0 then divide
    // otherwise error
    if (denominator > 0) {
        return numerator / denominator;
    } else {
        return 'Denominator must be greater than 0!';
    }
};
console.log(divide(8, 2));
console.log(divide(5, 0));

// Explain the logic and flow of this example.
// Point out that we can use the word "return" inside if-else as well

/*
    TASK 2
    Write a function that tells you to take out the trash if it's Thursday.
    Helpful instructions:
        1. Declare the function and name it.
        2. Give it a single paramter to represent the day
        3. Use a conditional statement inside the function block
        4. Check if the day is Thursday
        5. Return a message depending on the day
        6. Call the function and pass in a day
*/
// Answer
const takeOutTrash = day => {
    if (day === 'Thursday') {
        return 'Take out trash!';
    } else {
        return 'Do not take out trash';
    }
};
console.log(takeOutTrash('Thursday'));

/*
    IF WE HAVE TIME

    TASK 3
  
    A local bank is running a promotion! Customers who have $500 or more in their account will automatically receive a $20 bonus. Write a function that takes a name and a balance, then returns a message displaying the name whether or not they received the bonus based on the above conditions. Call your function and wrap it in a console.log() when you finish.
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
