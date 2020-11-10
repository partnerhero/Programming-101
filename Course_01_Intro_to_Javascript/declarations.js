/* 
      ____
    //    ) )                                                                                    
   //    / /  ___      ___     //  ___      __      ___    __  ___ ( )  ___       __      ___    
  //    / / //___) ) //   ) ) // //   ) ) //  ) ) //   ) )  / /   / / //   ) ) //   ) ) ((   ) ) 
 //    / / //       //       // //   / / //      //   / /  / /   / / //   / / //   / /   \ \     
//____/ / ((____   ((____   // ((___( ( //      ((___( (  / /   / / ((___/ / //   / / //   ) )  

JavaScript applications consist of declarations. Declarations are a way to assign a value to a word, also called a variable.

All declarations should be followed by semicolons. This tells the Node runtime that is the ending of the declaration.

BEST PRACTICE
Declarations should always be done in camelcase. That means, if you need your variable name to have more than one word, all words after the first should start with a capital letter.

For example,

firstName instead of firstname

testVariable instead of testvariable

anotherOneBitesTheDust instead of anotheronebitesthedust

*/

// Variable declarations
// The var keyword can be used to declare a variable. This is the syntax:
var myName = 'Nathaniel';
var placeOfBirth = 'Somewhere in the multi-verse';
var petName = 'Dawg The Bownteyhuntuh';

// You can log these to the console as well, this time WITHOUT quotes since these are variables:
console.log(myName);

// TO DO: Add declarations for your name, place of birth, and your pet's name, then log one of them to the console.
// myName
// placeOfBirth
// petName

// Up until 2015, var was the only way to declare variables in Javascript. After an update and new version, called ES6, we have two other ways of doing this depending on the situation. LET's go over LET! hahahahahahahhhahaaa11!!11
let wheelsOnACar = 4;
let wheelsOnABike = 2;
console.log(wheelsOnABike);

// To redeclare a variable and reassign its value, drop the word let.
// You add training wheels to the bike, how many wheels does it have now?
wheelsOnABike = 4;
console.log(wheelsOnABike);

// Notice the difference in the console between the two variables.
// You can also reassign values declared with var.

// TO DO: Create a let declaration for 'states in the US'.
let statesInTheUS = 50;
console.log(statesInTheUS);

// Let's say Alaska decides to become its own country and leaves the United States.
// Redclare statesInTheUS to represent the new number of states in the US.
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
const userName = 'prisonsentence2000';
const userRegion = 'G/7';
console.log(userRegion);

// If I try to redeclare one of these variables, I get an error:
userRegion = 88;

// TO DO: Add const declarations for "my favorite band" and "my third favorite number" and log them to the console.
const myFavoriteBand = 'Dimmu Borgir';
const myThirdFavoriteNumber = 664;

// Remember to only pass the variable name to the console.log() method, no the entire declaration
console.log(myFavoriteBand);
console.log(myThirdFavoriteNumber);
