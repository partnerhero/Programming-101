/*
    ||   / |  / /                                                  
    ||  /  | / /  ___     //  ___      ___      _   __      ___    
    || / /||/ / //___) ) // //   ) ) //   ) ) // ) )  ) ) //___) ) 
    ||/ / |  / //       // //       //   / / // / /  / / //        
    |  /  | / ((____   // ((____   ((___/ / // / /  / / ((____     

    Programming languages are a way for humans to interact with and tell computers what to do and how to behave. They are like the middle man between human speech and binary. Javascript is a programming language that is nowadays at the heart of modern web development, but it got its start in 1995 exclusively for the Netscape Navigator browser. Modern Javascript is essentially what gives web pages and web applications interactability. More on this as we move through the class.
 
    Node is a framework, or runtime environment, built on top of JavaScript that we will be using in this class. Basically, it allows Javascript to be executed outside a web browser on other ecosystems, like a script in your computer. 
    
    BEFORE WE START
    Before touching on what Node brings to the table, we'll learn the basics of Javascript.
    And before getting your local environment set up, we're going to use an in-browser tool to run our code for now.
    
    Please go to:
    https://repl.it/languages/nodejs

    This will allow us to run lines of code and see the results immediately without installing anything on your computer. 
*/

/*
    CONSOLE LOGS
    One of the most common and helpful tools in JavaScript is the the Console module.
    
    The console module allows us to 'log' stuff to our terminal. It doesn't really perform
    any operation, but it is helpful to see the output of your code. We'll be working with this quite a bit.

    TO DO
    Add a console.log with your name in it, and wrap your name with single quotes.
    We'll learn why later.
*/

console.log('My Name!');

/*
    COMMENTS
    Comments are lines or sections in our code that are ignored in JavaScript.
    Comments are wrapped in /*'s, or preceeded by double slashes //.

    TO DO
    Add a comment after your console.log with any random word in it. Remember to preceed it by //'s
    Once done, run this file again and see if you comment is logged to the terminal.
*/

console.log('My Name!');
// Moon boots

/* 
    TYPES OF VALUES

    JavaScript values can be of different types:

    - Strings
    - Numbers
    - Boolean
    - Arrays
    - Objects

    This course will cover the first two values.

    STRINGS
    In JavaScript, strings are used to represent text. They are surrounded by quotes (double(") or single('), and can be any combination of text or numbers.

    TO DO
    Add another console.log below your comment with a string, like we did before but this time with your least favorite color.
    Run it
*/

console.log('My Name!');
// Moon boots
console.log('gold');

/*
    NUMBERS
    JavaScript understands numbers, both in the form of whole and decimal values. 
    Numbers do not need to be surrounded by quotes.

    TO DO
    Add a console log with number 8.
*/

console.log('My Name!');
// Moon boots
console.log('gold');
console.log(8);

// Run to see your results!

/*
    STRING CONCATENATION
    This is the process of appending, or attaching one string to another.

*/

// Example:
console.log('My name is ' + 'not the same' + ' as my other name?!');

// TO DO:
// Add a console.log() that concatenates two strings. Your first string is "My IKEA furniture name is: " and your second string should be your first name spelled backwards.
console.log('My IKEA furniture name is: ' + 'Auhsoj');
