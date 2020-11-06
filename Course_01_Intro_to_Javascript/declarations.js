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
var myName = 'Nathaniel';

var placeOfBirth = 'Somewhere in the multi-verse';

var petName = 'Dawg The Bownteyhuntuh';

// TO DO: Add declarations for your name, place of birth, and your pet's name below

// myName

// placeOfBirth

// petName

/*
    SCOPED DECLARATIONS
    In order to keep our code clean, JavaScript allows us to limit the scope of a certain variable.
    This is done to prevent global variables being declared, when they are only needed on a certain function.

    BEST PRACTICE
    Let declarations are almost always preferred over var declarations. From this point on, we will use let declarations instead of var. :-)

*/

let wheelsOnACar = 4;
let wheelsOnABike = 2;

// To redclare a variable and reassign its value, drop the word let:
// You add training wheels to the bike, how many wheels does it have now?
wheelsOnABike = 4;

// TO DO: Add let declarations for 'wings on a plane' and 'states in the US'.
let wingsOnAPlane = 2;
let statesInTheUS = 50;

// Let's say Alaska decides to become its own country and leaves the United States.
// Redclare statesInTheUS to represent the new number of states in the US.
statesInTheUS = 49;

/*
    Constant declarations

    There will be cases in which we'll want to declare a value that can't, and shouldn't be changed. 
    This is done through const declarations. 
    
    BEST PRACTICE
    Generally, all declarations should be done with const UNLESS a variable is expected to change.

*/

// Examples:
const userName = 'prisonsentence2000';
const userRegion = 'G/7';

// TO DO: Add const declarations for "my favorite band" and "my third favorite number"
const myFavoriteBand = 'Dimmu Borgir';
const myThirdFavoriteNumber = 664;

// FINAL TO DO: log some of the variables you declared with the console module and run it.
// Remember to only pass the variable name to the console.log() method, no the entire declaration
console.log(myFavoriteBand);
console.log(myThirdFavoriteNumber);
