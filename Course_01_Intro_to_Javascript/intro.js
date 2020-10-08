/*

    ||   / |  / /                                                  
    ||  /  | / /  ___     //  ___      ___      _   __      ___    
    || / /||/ / //___) ) // //   ) ) //   ) ) // ) )  ) ) //___) ) 
    ||/ / |  / //       // //       //   / / // / /  / / //        
    |  /  | / ((____   // ((____   ((___/ / // / /  / / ((____     


    JavaScript is a fascinating language, originally built to operate on the browser. 
    Node is a framework built on top of JavaScript, that allows it to also be executed on 
    other ecosystems, such as on a script in your computer. 
    

    BEFORE WE START
    Before touching on what Node brings to the table, we'll learn the basics of Javascript.
    This file will cover environment setup, and how to execute JavaScript files on your computer.
    


    
    SETUP
    We'll start by downloading the NodeJS binaries from https://nodejs.org/en/ and installing
    them on your computer. Once the binaries have been installed, you should be able to open the terminal (or command
    prompt on Windows), run the 'node -v' command, and see an output indicating the Node version that was installed.

    After installing Node, let's create a folder to store the files we will be working with. 
    To do this, write 'mkdir node-workshop' and then 'cd node-workshop'. The mkdir commant 'makes' a directory and
    the cd command 'changes directory', or moves you into it.

    Once you are in the node-workshop directory, run the following command: 'node intro.js' and you should see an 
    output in your terminal.
    
    Congrats! You just ran your first JavaScript file. We will be using the 'node' command to execute the files
    we will write throughout this workshop.

    COMMENTS
    Notice how line 45 was executed? That is because comments like this one are ignored in JavaScript.
    Comments are wrapped in /*'s, or preceeded by double slashes //. 

    TO-DO
    Add a comment after line 45 with your name on it. Remember to preceed it by //'s
    Once done, execute this file again and see if you comment is logged to the terminal.

*/

console.log(' HELLO WORLD :) ');

/*

    Console Logs

    Line 45 used one of the most common and helpful tools in JavaScript, the Console module.
    
    The console module allows us to 'log' stuff to our terminal. It doesn't really perform
    any operation, but it is helpful to see the output of your code.

    TODO
    Add a console log with your name on it. Remember to wrap your name with single quotes.
    We'll learn why later.

*/

/* 

    Types of values

    JavaScript values can be of 4 different types:

    - Strings
    - Numbers
    - Arrays
    - Objects

    This file will cover the first two primitives.

    STRINGS
    In JavaScript, strings are surrounded by '''s, and can be any combination of 
    text or numbers.

    TODO
    Add a console log with a string, like we did on line 45.
*/

/*
    NUMBERS
    JavaScript understands numbers, both in the form of whole and decimal values. 
    Numbers do not need to be surrounded by '''s

    TODO
    Add a console log with number 8.
*/
