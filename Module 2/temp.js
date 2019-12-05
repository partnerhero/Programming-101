/*
logic operators, bools, conditional statements, if, else if, ternary, switch() { break }
3: for loops , while loops, arrays

                  _       _        ____  
  /\/\   ___   __| |_   _| | ___  |___ \ 
 /    \ / _ \ / _` | | | | |/ _ \   __) |
/ /\/\ \ (_) | (_| | |_| | |  __/  / __/ 
\/    \/\___/ \__,_|\__,_|_|\___| |_____|

In module 1, we learned about declarations, console logs, and basic mathematical
operations. In module 2, we'll learn about more complex data types, which will allow
us to store and share information, and execute more intricate code.

The primitives we will learn on Module 2 are
- Objects
- Functions
- Arrays

Before we start, let's do a recap on declarations....

There are 3 types of declarations
*/

// let (scoped) declarations
let thisValueCanChange = "change me";

// constant declarations
const thisValueCannotChange = "i cant be changed";

// variable declarations (deprecated)
var thisIsAVariable = "something";

//The three primitives we'll learn today are declared using any of the three
//declarations below

/*

    OBJECTS

    Imagine we are building objects for dogs. 
    A dog has properties for "breed", "weight", and "height". Similarly,
    a dog might have methods for "eat" and "bark" 
    
    Think of objects as entities that have different properties and methods. 

    Objects are useful to:
    - Classify entities into similar data models
    - Ensure all entities have the same structure (schema)
    - Modify multiple entities at once
*/

/*
    Object declarations

    In JavaScript, objects are declared by using a pair of {}'s. The objects 
    properties can be declared within the {}'s, in the form of key-value pairs.

    Object {
        property: value
    }

    So going back to our dog example, let's declare a dog object with a 
    property "breed" of value "schnauzer". Our code could look similar to:
*/

let dog = {
  breed: "schnauzer"
};

/*

Alternatively, properties can be assigned/changed after an object has been declared. 
There are two ways to assign/change properties:

1. Dot notation: follows the syntax object.property, and is the preferred method for reassigning
values. 

TODO: add a property "weight", of value 50.
 */

dog.weight = 50;

/*
 2. Bracket notation: follows the syntax object['property']. It is usually used to assign
 properties with space characters, that would not be accessible through dot notation.

 TODO: Let's assign a "leg count" property of 5.
 */

dog["leg count"] = 5;
