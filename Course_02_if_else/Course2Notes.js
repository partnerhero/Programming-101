/*

                  _       _        ____  
  /\/\   ___   __| |_   _| | ___  |___ \ 
 /    \ / _ \ / _` | | | | |/ _ \   __) |
/ /\/\ \ (_) | (_| | |_| | |  __/  / __/ 
\/    \/\___/ \__,_|\__,_|_|\___| |_____|

In course 1, we learned about variable declarations, console logs, and basic mathematical operations. In course 2, we'll learn about boolean values and conditional statements.

The topics are:
- Boolean values
- If statements
- Else statements
- Ternary operators
- Switch statements

Before we start, let's do a recap on declarations....

There are 3 types of declarations
*/

// variable declarations (deprecated)
var thisIsAVariable = 'something';

// let declarations
let thisValueCanChange = 'change me';

// constant declarations
const thisValueCannotChange = 'i cannot be changed';

/*
	------------------------------------------------------------------
    Booleans!

	This data type only has two possible values: true or false (no quotes). They are helpful for testing the "truth" behind statements.

	Write up a few quick conceptual examples and ask the audience:
		Is 5 equal to 6? false
		Is 'example text' a string? true
		Is 6842.33 a number? true
	------------------------------------------------------------------
*/

const booleanValue = true;
console.log(booleanValue);
// true is different than 'true'
// change value to false to show both

/*
	------------------------------------------------------------------
    Equality and Inequality!

	It is very useful in programming to check if one value is equal or not equal to another.

	We use the == and != operators to check for equality and inequality of values respctively.
	
	(Generally we can think of the "!" as the word "not")
	------------------------------------------------------------------
*/

// Example:
const isThisEqual = 86 == 99;
console.log(isThisEqual); // false

/*
	------------------------------------------------------------------
	TO DO:
	Declare a variable with a value that checks for the inequality between two numbers and log it to the console.
	------------------------------------------------------------------
*/

// Answer example:
const isThisNotEqual = 32 != 30;
console.log(isThisNotEqual); // true
// Does this make sense to everyone?

/*
	------------------------------------------------------------------
    Equality Checking Part 2

	When writing programs, sometimes just checking for value equality can be unsafe.

	Example:
	Checking for equality between number 5 and string '5' would give you a truthy value. This is because the == operator checks the value but not the data type.

	This can be harmful for code that cannot process string values for example.
	------------------------------------------------------------------
*/

// Example:
const myComparison = 5 == '5';
console.log(myComparison); // true

/*
	------------------------------------------------------------------
	More Equality Checking!

	We use the === and !== operators to check both value and type.
	
	TO DO:
	Check for the equality of "10" vs 10 using the === operator and log it to the console.
	------------------------------------------------------------------
*/

// Answer:
const myNumberCheck = '10' === 10;
console.log(myNumberCheck); // false

/*
	------------------------------------------------------------------
    Comparison Operators

    These are the comparison operators, you may recognize them:
    1. > greater than
    2. < less than
    3. >= greater than or equal to
    4. <= less than or equal to

    Quick Pop Quiz!:
    Ask the audience True or False for each:
	7 > 3
	7 < 3
	5 >= 5
	7 <= 2
    ------------------------------------------------------------------
*/

// Example:
const isHigher = 8 > 3;
console.log(isHigher);

/*
    ------------------------------------------------------------------
    IF Statements!

	IF statements are the core of conditional logic in programming.
	They evaluate a statement, then run a block of code only if that statement returns a truthy value (true).

    Syntax:

    if (parameter) {
        do something!
    }

    In this case, the parameter expected by our IF statement can be either:
    - A variable with a boolean value
    - A statement
    ------------------------------------------------------------------
*/

// Follow and code along:
// In my country, the drinking age for beer and wine is 16, so we can write an if statement checking that condition.
let age = 20;
if (age >= 16) {
    console.log('Serve beer and wine immediately!');
}
// If the parameter is false, the block of code will not run:
age = 14;
if (age >= 16) {
    console.log('Serve beer and wine immediately!');
}

/*
    ------------------------------------------------------------------
    ELSE statements

    ELSE statements can be chained with if statements to run a block of code if the condition tested is false.

    ELSE statements use the following syntax:

    if (parameter) {
        do something!
    } else {
        do something else!
    }
    ------------------------------------------------------------------
*/

// Follow along continuing with our drinking example:
// We can add an else statement here to make sure we get an output when the parameter is false.
age = 14;
if (age >= 16) {
    console.log('Serve beer and wine immediately!');
} else {
    console.log('Serve only soda to this youth.');
}

// Everyone following?

/*
	------------------------------------------------------------------
	Chaining Conditions!

	We check for multiple conditions in a single statement with the help of certain conditional operators:

	&& - "AND", will check that multiple conditions are all met.
	|| - "OR", will check that AT LEAST one out of multiple conditions is met.

	------------------------------------------------------------------
*/

// Continuing from our drinking example:
// People under 18 can drink beer and wine but not hard alcohol, so we can include that condition in our if-else statement.
age = 17;
if (age >= 16 && age < 18) {
    console.log('Serve ONLY beer and wine immediately!');
} else {
    console.log('Serve only soda to this youth.');
}

// Go ahead and run this, then change the age to a number higher than 17 and run it again.
// Does anyone see a problem with our if-else statement now?

// Even when the age is greater than 17, we still get an output saying to only serve soda!
// We can use else-if statements to fix this.

/*
    ------------------------------------------------------------------
    ELSE IF statements

    ELSE IF statements allow you to specify new conditions to be tested if the 
    previous condition is false. They run before any final ELSE statement.

	Syntax:
	
    if (parameterIsTrue) {
        // do something!
    } else if (thisParameterIsTrue) {
        // do something else!
    } else {
		// do another something else!
	}

    ------------------------------------------------------------------
*/

// Continuing following along from the previous example:
// We want to also be notified if a person can drink hard alcohol.
age = 35;
if (age >= 16 && age < 18) {
    console.log('Serve ONLY beer and wine immediately!');
} else if (age > 17) {
    console.log('Serve all the alcohol!');
} else {
    console.log('Serve only soda to this youth.');
}

/*
	--------------------------------------------------------------------
	TO DO:
	1. Create a password variable with any string or number value.
	2. Create a security answer variable with any string or number value
	3. Write an if-else statement that satifies the following conditions:
		a. If the password is 'pass123!' or the security answer is 'pepper' log to the console 'Success!'
		b. If neither match then log to the console 'Failure!'
	--------------------------------------------------------------------
*/
// Ask for student answers :)
// Answer:
const password = 'my passw0rd';
const securityAnswer = 'Pizza all day';
if (password === 'pass123!' || securityAnswer === 'pepper') {
    console.log('Success!');
} else {
    console.log('Failure!');
}

// ANY QUESTIONS?

/*
	------------------------------------------------------------------
	Ternary Operators

	Standard if-else statements can be rewritten using a special type of operator known as a ternary operator.

	Syntax:
	condition ? (result if true) : (result if false)

    -------------------------------------------------------------------
*/

// Follow along example:
const streetLight = 'green';
streetLight === 'green' ? console.log('Drive.') : console.log('Stop.');

/*
	-------------------------------------------------------------------
	Switch Statement

	The last form of commonly used conditional statement is known as a switch statement.
	A switch statement contains a list of possible "cases", each with a possible result.

	The syntax of a switch statement is as follows:

	switch(expression) {
		case x:
			do this;
			break;
		case y:
			do this;
			break;
		case z:
			do this;
			break;
		default:
			do this;
			break;
	}

	It is important to have a break statement within each case.
	If the case does not contain a break statement, the compiler will run through each line of code.
	This is different than the if-else statements that only run a single block of code.
	-------------------------------------------------------------------
*/

// Follow along example:
const racePlacement = 'First';

switch (racePlacement) {
    case 'First':
        console.log('You won the gold!');
        break;
    case 'Second':
        console.log('You won the silver!');
        break;
    case 'Third':
        console.log('You won the bronze!');
        break;
    default:
        console.log('Did not place in Top 3');
        break;
}

// Stop here unless there is more time

//-----------------------------------------------------------------------------------------------

/*
	------------------------------------------------------------------
	NESTED IF Statements

	The process of "nesting" means to use a statement within the "scope" of another statement.

	Consider the following: You want to find results from a database of anybody
	named "Daniel" that is in the United States.

	We could write this one of two ways:

	1. We can write it with multiple conditions and one of our logical operators:
		 if (firstName == Daniel && country == US) { return "found"; }

	OR

	2.  We can write it using nested if statements:
		if (country == US) {
			if (firstName == Daniel) {
				return "found";
			}
		}
	------------------------------------------------------------------
*/
