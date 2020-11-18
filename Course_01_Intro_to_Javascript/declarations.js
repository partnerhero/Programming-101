/* 
      ____
    //    ) )                                                                                    
   //    / /  ___      ___     //  ___      __      ___    __  ___ ( )  ___       __      ___    
  //    / / //___) ) //   ) ) // //   ) ) //  ) ) //   ) )  / /   / / //   ) ) //   ) ) ((   ) ) 
 //    / / //       //       // //   / / //      //   / /  / /   / / //   / / //   / /   \ \     
//____/ / ((____   ((____   // ((___( ( //      ((___( (  / /   / / ((___/ / //   / / //   ) )  

JavaScript applications consist of declarations. Declarations are a way to assign a value to a word, also called a variable.

All declarations should be followed by semicolons. This tells the runtime that is the ending of the declaration. It's also best practice to add semi-colons after each line of finished code, like our console.logs.

CAMELCASE
Declarations should always be done in camelcase. That means, if you need your variable name to have more than one word, all words after the first should start with a capital letter.

Example:

firstName instead of firstname

anotherVariableName instead of anothervariable name

This makes it easier for human readability.

*/

// Variable declarations
// The var keyword can be used to declare a variable. This is the syntax:
var myName = 'Nathaniel';
var placeOfBirth = 'Somewhere in the multi-verse';
var petName = 'Dawg The Bownteyhuntuh';

// You can log these to the console as well, this time WITHOUT quotes since these are variables:
console.log(myName);

/*
    TO DO: Add declarations for your name, place of birth, and your pet's name, then log one of them to the console.
    myName
    placeOfBirth
    petName
*/

// Up until 2015, var was the only way to declare variables in Javascript. After an update and new version, called ES6, we have two other ways of doing this depending on the situation. LET's go over LET! hahahahahahahhhahaaa!!1!!1one1
let myAge = 32;
let wheelsOnABike = 2;
console.log(wheelsOnABike);

// To reassign a variable's value, drop the word let.

// Example: You add training wheels to the bike, how many wheels does it have now?
wheelsOnABike = 4;
console.log(wheelsOnABike);

// Notice the difference in the console between the two variables.
// You can also reassign values declared with var in the same way.

/*
    Talk about the difference between declaring and assigning.
*/

/*
    TO DO:
    1. Create a let declaration for the number of states in the US.

    Then let's say Alaska decides to become its own country and leaves the United States.

    2. Reassign your variable statesInTheUS to represent the new number of states in the US.
    
*/

let statesInTheUS = 50;
console.log(statesInTheUS);

statesInTheUS = 49;
console.log(statesInTheUS);

/*
    Constant declarations

    There will be cases in which we'll want to declare a value that can't, and shouldn't be changed. 
    This is done using the keyword const.
    
    BEST PRACTICE
    Generally, all declarations should be done with const UNLESS a variable is expected to change.
*/

// Examples:
const birthDate = 'January 24';
const birthPlace = 'California';
console.log(birthPlace);

// If I try to reassign one of these variables, I get an error:
birthPlace = 88;

/*
    TO DO:
    1. Add const declarations for your favorite color and your third favorite number.
    2. Log them to the console.

*/
const myFavoriteColor = 'purple';
const myThirdFavoriteNumber = 664;

// Remember to only pass the variable name to console.log(), not the entire declaration
console.log(myFavoriteColor);
console.log(myThirdFavoriteNumber);

//------------------------------------------------

// Proceed to math.js file
