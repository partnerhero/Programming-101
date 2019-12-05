/*
logic operators, bools, conditional statements, if, else if, ternary, switch() { break }
3: for loops , while loops, arrays

                  _       _        ____  
  /\/\   ___   __| |_   _| | ___  |___ \ 
 /    \ / _ \ / _` | | | | |/ _ \   __) |
/ /\/\ \ (_) | (_| | |_| | |  __/  / __/ 
\/    \/\___/ \__,_|\__,_|_|\___| |_____|

In module 1, we learned about declarations, console logs, and basic mathematical
operations. In module 2, we'll learn about boolean values and conditional statements.

The topics we will learn on Module 2 are
- Boolean values
- If statements
- Else statements
- Ternary operators
- Switch statements

Before we start, let's do a recap on declarations....

There are 3 types of declarations
*/

// let (scoped) declarations
let thisValueCanChange = "change me";

// constant declarations
const thisValueCannotChange = "i cant be changed";

// variable declarations (deprecated)
var thisIsAVariable = "something";

/*
    ------------------------------------------------------------------
    Booleans

    Boolean values rest on the concept that all values can be reduced
    to either TRUE or FALSE, or 1's and 0's. They are helpful for testing
    the "truth" behind statements.

    * Booleans can be either truthy or false *
    * All conditional statements in javascript will expect a boolean value *
    ------------------------------------------------------------------
*/






/*
    Declaring boolean values

    Boolean values can be assigned to variables. 

    TODO: assign a truthy value to a variable isTrue
    TODO: assign a false value to a variable isFalse
    TODO: log both values to the console
    ------------------------------------------------------------------
*/






/*
    ------------------------------------------------------------------
    Assigning boolean values through operators

    Statements can be evaluated to return boolean values. This is done with the
    use of comparison operators. 

    This is a list of comparison operators:
    1. === checks for equality of value and type
    2. !== checks for inequality of value and type
    3. > greater than
    4. < less than
    5. >= greater than or equal to
    6. <= less than or equal to
    ------------------------------------------------------------------
*/






/*
    ------------------------------------------------------------------
    Equality checking

    One popular use of operators is to check if values are the same.

    To do this, we use the == operator to check for equality 
    and the != operator to check for inequality

    TODO: declare a variable with a value that checks for the equality between
    two numbers and log it to the console
    TODO: declare a variable with a value that checks for the inequality between
    two text values and log it to the console
    ------------------------------------------------------------------
*/





/*
    ------------------------------------------------------------------
    Equality checking - Expanded

    At times, just checking for value equality can be unsafe. For instance, if 
    you were to check for equality of 5 and "5", you would see a truthy value.

    This can be harmful for code that cannot process string values. 

    TODO: Check for the equality of "10" vs 10 and log it to the console.

    To help with this, we will use the === and !== operators for value
    and type checking. 

    TODO: declare a variable with a value that checks for the equality using the === operator
    between two numbers and log it to the console
    TODO: declare a variable with a value that checks for the inequality using the !== operator 
    between two text values and log it to the console
    ------------------------------------------------------------------
*/




/*
    ------------------------------------------------------------------
    Boolean checking

    At times, you might want to check if a value is truthy or falsy in nature.

    The ! operator checks if a value is falsy
    so !false would return true

    The !! operator checks if a value is truthy
    !!true would return true

    TODO: declare a variable with any boolean value and check it against both
    operators above
    ------------------------------------------------------------------
*/





/*
    ------------------------------------------------------------------
    IF statements

    IF statements are the core of conditional logic in programming. They evaluate 
    a statement, and run a block of code only if that statement returns 
    a truthy value.

    IF statements use the following syntax:

    if (thisIsTrue) {
        //do something!
    }

    In this case, the parameter expected by our IF statement can be either:
    - A variable with a boolean value
    - A statement

    TODO: Declare a let variable that returns a truthy value
    TODO: Declare an if statement that receives the variable ^ as a parameter, and 
    logs a message to the console;
    TODO: Change the IF statement so that instead of a variable, it checks for an
    equality statement between to strings
    ------------------------------------------------------------------
*/



/*
    ------------------------------------------------------------------
    ELSE statements

    ELSE statements can be chained with if statements to run a block of code 
    if the condition tested is false

    ELSE statements use the following syntax:

    if (thisIsTrue) {
        //do something!
    } else {
        //do something else!
    }

    TODO: Add an else statement to the if statement declared above and try running it

    ------------------------------------------------------------------
*/



/*
    ------------------------------------------------------------------
    ELSE IF statements

    ELSE IF statements allow you to specify new conditions to be tested if the 
    previous condition is false. They run before any final ELSE statement.

    If / Else statements use the following syntax:

    if (thisIsTrue) {
        //do something!
    } else {
        //do something else!
    }

    TODO: Add an else statement to the if statement declared above and try running it

    ------------------------------------------------------------------
*/