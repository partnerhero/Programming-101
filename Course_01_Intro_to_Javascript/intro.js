/*
    ||   / |  / /                                                  
    ||  /  | / /  ___     //  ___      ___      _   __      ___    
    || / /||/ / //___) ) // //   ) ) //   ) ) // ) )  ) ) //___) ) 
    ||/ / |  / //       // //       //   / / // / /  / / //        
    |  /  | / ((____   // ((____   ((___/ / // / /  / / ((____     

    Programming languages are a way for humans to interact with and tell computers what to do and how to behave. Javascript is a programming language that is used for modern web development, and is essentially what gives web pages and web applications interactability. More on this as we move through the class.
    
    BEFORE WE START
    We're using Node, but all you need to know about it is that it allows us to run Javascript outside of a browser.
    For now we're going to use an in-browser tool to run our code.
    
    Please go to:
    https://repl.it/languages/nodejs

    This will allow us to run lines of code and see the results immediately without installing anything on your computer.
*/

/*
    CONSOLE LOGS
    One of the most common and helpful tools in JavaScript is the the Console module.
    
    This allows us to 'log' stuff to our terminal/command prompt. It doesn't really do much, but it is helpful to see the output of your code.

    TO DO:
    Add a console.log with your name in it, and wrap your name with single quotes.
    We'll learn why later.
*/

console.log('My Name!');

/*
    COMMENTS
    Comments are lines or sections in our code that are ignored in JavaScript.
    Comments are wrapped in /*'s, or preceeded by double slashes //.

    TO DO:
    Add a comment after your console.log with any random word in it. Remember to preceed it by //'s
    Once done, run this file again and see if you comment is logged to the terminal.
*/

console.log('My Name!');
// Moon boots

/* 
    TYPES OF VALUES

    JavaScript values can be of different types. We'll be talking about two today:

    - Strings
    - Numbers

    STRINGS
    In JavaScript, strings are used to represent text. They are surrounded by quotes (double(") or single('), and can be any combination of text or numbers.

    TO DO:
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

    TO DO:
    Add a console log with number 8.
*/

console.log('My Name!');
// Moon boots
console.log('gold');
console.log(8);

// Run to see your results!

// TALK ABOUT
// console.log() difference between number string and real numbers
console.log('123');
console.log(123);

/*
    STRING CONCATENATION
    This is the process of appending, or attaching one string to another.

*/

// Example:
console.log('My name is ' + 'not the same' + ' as my other name?!');

/*
    TO DO:
    Add a console.log() that concatenates two strings.
    Your first string can be your first name.
    Your second string last name.
*/

console.log('Joshua ' + 'Wilson');

//--------------------------------------------------------

// Proceed to declarations.js file
