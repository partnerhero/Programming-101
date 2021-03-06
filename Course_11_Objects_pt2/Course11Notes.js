// Course 11 - Objects Part 2

// Ask if anyone wants to share their pizza order object with the class. If not, we can briefly show this one:
const pizzaOrder = {
    pizza1: {
        dough: 'gluten free',
        crust: 'flat',
        size: 'Medium',
        toppings: {
            pepperoni: false,
            olives: true,
            'extra cheese': true,
            mushrooms: true,
        },
    },
    pizza2: {
        dough: 'sour',
        crust: 'stuffed',
        size: 'super big',
        toppings: {
            pepperoni: true,
            olives: false,
            'extra cheese': true,
            mushrooms: false,
        },
    },
    totalPrice: 44.0,
    deliver() {
        console.log('Delivered!');
    },
};

//-------------------------------------------------------------

// The this keyword
// When we want to refer to or access a property from within our object, we should use the "this" keyword instead of the object by name. The "this" keyword refers to the "parent" object one level up.

// An example would be using methods to change the properties in our objects. Let's say we want a method to increase the number of views on a video we made:
const myVideo = {
    uploadDate: '04/29',
    views: 1,
    addView() {
        this.views++;
    },
};
myVideo.addView();
console.log(myVideo.views);

// You can refer to the global object by name, but a big reason why the "this" keyword can be so useful is because the name of our object can change without our method breaking. So in this way we wouldn't need to rewrite the method.

//-------------------------------------------------------------

// TASK 1
/* 
Create an object for a toy ghost that keeps track of how many times it scares people.
    1. Give your onject a numberOfScares property that starts at 0.
    2. Give your object a scare method that when called increases numberOfScares by 1.
    3. Call the scare method a couple times then log numberOfScares to the console to make sure it's keeping track.
*/

const toyGhost = {
    numberOfScares: 0,
    scare() {
        this.numberOfScares++;
    },
};
toyGhost.scare();
toyGhost.scare();
console.log(toyGhost.numberOfScares);

//-------------------------------------------------------------

// Getters and Setters

// Conveying Privacy
// In Javascript you'll often see an underscore in front of the property name, this is to indicate that the object property should not be accessed or changed directly, but rather through what are called getters and setters.

let user = {
    _firstName: 'Josh',
    _lastName: 'Wilson',
};
// We do not want to access or change these properties like this:
user._firstName;

// Getters are accessors and setters are mutators

// Getters are a way to indirectly access object properties. Using getters is considered best practice when creating objects.
// Technically, external code is able to access the name directly by using user._name. But there is a widely known convention that properties starting with an underscore "_" are internal and should not be touched from outside the object.
// The get syntax binds an object property to a function that will be called when that property is looked up.

let user = {
    _firstName: 'Josh',
    _lastName: 'Wilson',
    get firstName() {
        return this._firstName;
    },
};

console.log(user.firstName);
// While we're here, let's go ahead and add a getter for last name.

// This allows you to indirectly access the _firstName property through the getter instead of directly. This can help stop objects from unnecessarily mutating and causing problems in code
// Getters can also be used to perform an action when getting the property.
let user = {
    _firstName: 'Josh',
    _lastName: 'Wilson',
    get firstName() {
        return this._firstName;
    },
    get lastName() {
        return this._lastName;
    },
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    },
};

console.log(user.fullName);

// Getter methods are not called using parethenses, the syntax is like accessing a property. You can use conditionals inside getter methods as well.
// Getters are used to access properties

//-------------------------------------------------------------

// Setters
// Used to indirectly make changes to properties.
// Let's create a setter to be able to change the lastName property:
let user = {
    _firstName: 'Josh',
    _lastName: 'Wilson',
    get firstName() {
        return this._firstName;
    },
    get lastName() {
        return this._lastName;
    },
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    },
    set lastName(newName) {
        this._lastName = newName;
    },
};

user.lastName = 'Jilson';
console.log(user.lastName);

// Setters can allow for additional protections when writing programs. One example here would be to add an if statement to our setter to make sure we're reassigning lastName to a string.
/*
Briefly explain tyepof() because we have not talked about it yet.

set lastName(newName) {
    if (typeof newName === 'string') {
        this._lastName = newName;
    } else {
        console.log('Please enter a string.');
    }

user.lastName = 27;
console.log(user.lastName);
*/

//-------------------------------------------------------------

// TASK 2
/*
1. Create a car object with make and miles properties. Make sure you indicate that these are not to be accessed directly.
2. Create getters for each property as to be able to indirectly access the properties.
3. Create a setter for the miles peroperty that takes an argument and reassigns the miles on the car to the argument.
4. Call your setter and reassign the miles property to 10100.
*/
const car = {
    _make: 'Ford',
    _miles: 150000,
    get make() {
        return this._make;
    },
    get miles() {
        return this._miles;
    },
    set miles(newMiles) {
        this._miles = newMiles;
    },
};

//-------------------------------------------------------------

// Object methods

const coffee = {
    grind: 'coarse',
    brew: 'light',
};

// .entries()
// The Object.entries method returns an array of the key:value pairs each as arrays from the object.
console.log(Object.entries(coffee));

// .keys()
// The Object.keys() method, as the name implies, returns the keys as an array.
console.log(Object.keys(coffee));

// .values()
// The Object.values() method, as the name implies, returns the values as an array.
console.log(Object.values(coffee));

// .assign()
// The Object.assign() method assigns key:value pairs from existing objects and assigns them to a new object.
// If different objects have the same key, the value from the object in the second spot will take priority.

const obj1 = { color: 'red', type: 'car' };
const obj2 = { color: 'blue', wheels: 6 };
const newObject = Object.assign(obj1, obj2);
console.log(newObject);

//-------------------------------------------------------------

// TASK 3

// Ask the students each question after giving them the below

// 1. Lightning round: what function will I call to get color, isSolid, and isEdible from myObject1?
// 2. What function wil I call to get "blue, false, true, true" from myObject2?
// 3. What function will I call to get the key value pairs from myObject3?
// 4. What will my output be when I call Object.assign(myObject2, myObject3)?
const myObject1 = {
    color: 'blue',
    isSolid: false,
    isLiquid: true,
    isEdible: true,
};

const myObject2 = {
    color: 'red',
    isSolid: true,
    isEdible: true,
};

const myObject3 = {
    color: 'orange',
    isEdible: false,
    shape: 'round',
};

//-------------------------------------------------------------

// End of course
