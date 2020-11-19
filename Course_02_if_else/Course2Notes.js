/*

                  _       _        ____  
  /\/\   ___   __| |_   _| | ___  |___ \ 
 /    \ / _ \ / _` | | | | |/ _ \   __) |
/ /\/\ \ (_) | (_| | |_| | |  __/  / __/ 
\/    \/\___/ \__,_|\__,_|_|\___| |_____|

In course 1, we learned about variable declarations, console logs, and basic mathematical operations. In course 2, we'll learn about boolean values and conditional statements.

Still using repl for this course!
https://repl.it/languages/nodejs

Today's topics are:
- Boolean values
- If and else statements
- Ternary operators
- Switch statements

Before we start, let's do a quick recap on variabe declarations:
3 types of declarations:
*/

// var declarations (deprecated)
var thisIsAVariable = 'something';

// let declarations
let thisValueCanChange = 'change me';

// constant declarations
const thisValueCannotChange = 'i cannot be changed';

/*
	------------------------------------------------------------------
    Booleans!

	This data type has two possible values:
	true or false (without quotes)
	
	They are helpful for testing the "truthiness" of statements.

	Write up a few quick conceptual examples and ask the audience:
		Is 5 equal to 6? false
		Is 'example text' a string? true
		Is 6842.33 a number? true
	------------------------------------------------------------------
*/
// Example:
const booleanValue = true;
console.log(booleanValue);
const stringValue = 'true';
console.log(stringValue);
// true is different than 'true'

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
	Please declare a variable whose value checks for inequality between two numbers, then log that variable to the console.
	------------------------------------------------------------------
*/
// Answer example:
const isThisNotEqual = 32 != 30;
console.log(isThisNotEqual); // true
// Does this make sense to everyone?

/*
	------------------------------------------------------------------
    Equality Checking Part 2

	"==" and "!=" only check for value and not data type like string or number.
	Knowing that, what do you think the output of this statement will be?
*/
// Example
const myComparison = 5 == '5';
console.log(myComparison); // true

/*
	------------------------------------------------------------------
	Checking for equality between number 5 and string '5' would give you a truthy value.
	This can be harmful for code that cannot process string values for example.

	To check for value and type, we use the "===" and "!==" operators.
	------------------------------------------------------------------
*/
// What will we see now?
const myComparison2 = 5 === '5';
console.log(myComparison2); // false

/*
	------------------------------------------------------------------
	TO DO:
	Please create a variable check the equality of "10" vs 10 using the "===" operator, then log it to the console.
	------------------------------------------------------------------
*/
// Answer:
const myNumberCheck = '10' === 10;
console.log(myNumberCheck); // false

/*
	------------------------------------------------------------------
    Comparison Operators!

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
// Follow along example:
const isGreater = 8 > 3;
console.log(isGreater);

/*
    ------------------------------------------------------------------
    IF Statements!

	IF statements are at the core of conditional logic in programming.
	They evaluate a statement, then run a block of code only if that statement returns a truthy value.

    Syntax:
    if (parameterIsTrue) {
        do something!;
	}
	
	We employ conditional logic like this in our everyday lives. For example, if we're low on milk, we go to the store, but only if the store is open. So we run through these types of checks in our head, and these if statements we're writing are basically telling the computer to do the same thing!
    ------------------------------------------------------------------
*/

/*
	------------------------------------------------------------------
	Let's look at an example! Follow and code along:

	You're a starting programmer and you're asked to come up with a small program for bars where you input the age of a customer and a message tells you if they can drink alcohol and what types.
	
	The first bar that will use your program is in Switzerland, where the drinking age for beer and wine is 16.
	------------------------------------------------------------------
*/

// Let's just start with the minimum age and slowly work our way through the program.
// Write an if statement checking the condition:
let age = 20;
if (age >= 16) {
    console.log('Serve beer and wine.');
}
// Check if the parameter is false, that the block of code will not run:
age = 14;
if (age >= 16) {
    console.log('Serve beer and wine immediately!');
}

// This example only logs a message if the customer is over 16, but we should include a message if they're under the drinking age too.

/*
    ------------------------------------------------------------------
	ELSE statements!
	
    ELSE statements can be chained with if statements to run a block of code if the condition tested is false.

    Syntax:
    if (parameter) {
        do something!
    } else {
        do something else!
    }
    ------------------------------------------------------------------
*/

// Keep following along!
// Let's add an else statement here so we get a message when someone is underage.
age = 14;
if (age >= 16) {
    console.log('Serve beer and wine.');
} else {
    console.log('Serve only soda or capri-sun to this youth.');
}
// The code in the else block runs only if the statement evaluated to false.

/*
	------------------------------------------------------------------
	Chaining Conditions!

	In Switzerland, once someone turns 18, they can drink hard alcohol and don't have to stick to only beer and wine. Let's build this into our program!

	To do this, we need to be able to check for multiple conditions in a single statement:

	&& - "AND", will check that multiple conditions are all met.
	|| - "OR", will check that AT LEAST one out of multiple conditions is met.

	The pipe, or vertical line key, "|" is often found on the backslash "\" key near the Enter button. Everyone see it?
	------------------------------------------------------------------
*/
// So, can only drink beer and wine IF they are 16 or older AND under 18.
// We can include this additional condition in our if-else statement:
age = 17;
if (age >= 16 && age < 18) {
    console.log('Serve ONLY beer and wine immediately!');
} else {
    console.log('Serve only soda or capri-sun to this youth.');
}
// Go ahead and run this.

/*
    ------------------------------------------------------------------
	ELSE IF statements
	
	Now, change the age to something higher than 17 and run it again.
	The output tells us to only serve soda so someone who can actually drink any alcohol.
	We need to expand our statment to include a message for customers 18 and older.

    ELSE IF statements specify new conditions to be tested if the previous condition is false, but will also run before any final ELSE statement.

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
// Let's add this statment right in the middle of what we have.
age = 35;
if (age >= 16 && age < 18) {
    console.log('Serve ONLY beer and wine immediately!');
} else if (age >= 18) {
    console.log('Serve all the alcohol!');
} else {
    console.log('Serve only soda or capri-sun to this youth.');
}

/*
	-------------------------------------------------------------------
	Nested statements

	The process of "nesting" means to use a statement within the "scope" of another statement.

	Chaining conditions is often a better approach, but this is a useful concept to learn.

	Using the same drinking age example we've been building, all of these conditions are only relevant if this is being used in a specific country.
	In other words, we only want to check these conditions IF we're in Switzerland, and we can specify this by nesting.
	-------------------------------------------------------------------
*/
age = 17;
let country = 'Switzerland';
if (country === 'Switzerland') {
    if (age >= 16 && age < 18) {
        console.log('Serve ONLY beer and wine immediately!');
    } else if (age >= 18) {
        console.log('Serve all the alcohol!');
    } else {
        console.log('Serve only soda or capri-sun to this youth.');
    }
}
// Our original if statement only runs if the country is Switzerland.

/*
	--------------------------------------------------------------------
	TO DO:
	You're helping build a security login page for a website. Your task involves making sure either a user's password or security answer matches the system's.
	Given these variables, write an if-else statement that satifies the following conditions:
		a. If the password is 'pass123!' OR the security answer is 'pepper' log to the console 'Success!'
		b. If neither match then log to the console 'Failure!'
	--------------------------------------------------------------------
*/
// Give the students these variables
const password = 'my passw0rd';
const securityAnswer = 'pepper';

// Ask for student answers :)
// Answer:
if (password === 'pass123!' || securityAnswer === 'pepper') {
    console.log('Success!');
} else {
    console.log('Failure!');
}

// If we change securityAnswer to 'Pepper' what do you think will happen?
// It will show Filaure! because it is case sensitive

// ANY QUESTIONS?

/*
	------------------------------------------------------------------
	Let's talk about a couple alternatives to the traditional if-else statements.

	The first is called a Ternary operator.
	This is a standard if-else statement that can be written in a special way.

	Syntax:
	condition ? (result if true) : (result if false)

	These are best used when only checking one condition. Ternary operators can be used when checking multiple conditions, but it can start to look pretty messy.
	The big advantage of a ternary is it's simplicity, take that away and it loses its purpose.
    -------------------------------------------------------------------
*/
// Follow along example:
// Let's use a ternary to model the logic of streetlights.
let streetLight = 'green';
streetLight === 'green' ? console.log('Drive.') : console.log('Stop.');
// Explain logic flow and ask if there are questions.

/*
	-------------------------------------------------------------------
	Switch Statement

	The last alternative for conditional statements is a switch statement.
	A switch statement contains a list of possible "cases", each with their own result.

	Syntax:
	switch(parameter) {
		case x:
			do this;
			break;
		case y:
			do that;
			break;
		case z:
			do the other thing;
			break;
		default:
			do some stuff;
			break;
	}

	It is important to have a break statement within each case. The break statement tells the program to stop running the switch statement.
	If the case does not contain a break statement, the program will run through each line of code event after a case has been met.
	This is different than the if-else statements that only run a single block of code.
	-------------------------------------------------------------------
*/

// Follow along example:
// Let's say you're asked to write a quick program for a local footrace in your neighborhood.
// Your task is to have a message stating the runner's medal if they're in the top 3.
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
// default statement runs if none of the above cases are met.

// The End. Questions?

//-----------------------------------------------------------

// Homework include nesting
