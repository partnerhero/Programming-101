/* 

    //    ) )                                                                                    
   //    / /  ___      ___     //  ___      __      ___    __  ___ ( )  ___       __      ___    
  //    / / //___) ) //   ) ) // //   ) ) //  ) ) //   ) )  / /   / / //   ) ) //   ) ) ((   ) ) 
 //    / / //       //       // //   / / //      //   / /  / /   / / //   / / //   / /   \ \     
//____/ / ((____   ((____   // ((___( ( //      ((___( (  / /   / / ((___/ / //   / / //   ) )  

JavaScript applications consist of declarations. Declarations are a way to assign a value to 
a word, also called a variable.

All declarations should be followed by semicolons. This tells the Node runtime that is the 
ending of the declaration. 

BEST PRACTICE
Declarations should always be done in camelcase. That means, if you need your variable name
to have more than one word, all words after the first should start with a capital letter.

For example,

completeName instead of completename

userLanguage instead of userlanguage

*/

// Variable declarations
var myName = 'Daniel';

var placeOfBirth = 'San Pedro Sula, Honduras';

var petName = 'Milly';

//TODO: Add declarations for your name, place of birth, and your pet's name below

//myName

//placeOfBirth

//petName

/*
    Scoped declarations

    In order to keep our code clean, JavaScript allows us to limit the scope of a certain variable.
    This is done to prevent global variables being declared, when they are only needed on a certain
    function.

    BEST PRACTICE
    Let declarations are almost always preferred over var declarations. From this point on, we will use
    let declarations. :-)

*/

let wheelsInACar = 4;

let wheelsInABus = 8;

//TO DO: Add let declarations for 'wings on a plane' and 'states in the US'.

// wings on a plane

// states in the US

/*
    Constant declarations

    There will be cases in which we'll want to declare a value that can't, and shouldn't be changed. 
    This is done through const declarations. 
    
    BEST PRACTICE
    Generally, all declarations should be done with const UNLESS a variable is expected to change.

*/

const userName = 'danle';

const userRegion = 'CA';

//TO DO: Add const declarations for 'my favorite band' and 'my favorite pokemon'

// FINAL TO DO: log some of the variables you declared with the console module.
// Remember to only pass the variable name to the console.log() method, no the entire declaration
// Also, remember to run your file with the "node <filename>" command!
