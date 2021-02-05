// Course 10

// Homework/review

/*
    Intro

Today we're talking about objects in Javascript. Javascript is an object-oriented programming language, which essentially means that Javascript really shines when using objects. So we're going to learn the basics today!

We can use javascript objects to model real-world things. Take a basketball for example, it has certain properties we can use to describe it. It has a color: orange, and a shape: round. These are properties of this basketball.
*/

// In the case of Javascript, the object here is the basketball. A property of an object has a name and a value. For the basketball, color is the name of the property and orange is the value.
// We can create this basketball object in Javascript like this:
const basketball = {
    color: 'orange',
    shape: 'round',
};

// Also, the semi-colon belongs at the end of the object.
// These properties' names and values are called key: value pairs. Where color is the key and orange is the value. The keys are strings but do not require quotes unless they contain a special character like a space or a dash. The values can be any data type in the programming language; in the case of the basketball, they are strings.
// A colon is used to separate the key and the value, and commas are used to separate each property.

// Accessing these properties is done using dot notation just like we did with the .length property on arrays.
basketball.color;
console.log(basketball.color); // output: 'orange'

//------------------------------------------------------------

// TASK 1
// Create a favoriteMovie object with one property to represent your favorite movie's title. Once you've created the object, log the title to the console.

const favoriteMovie = {
    title: 'The Dark Knight',
};
console.log(favoriteMovie.title);

//------------------------------------------------------------

// METHODS

// A method, if you remember from our arrays course, is when a function is stored as data in an object.
// Let's say our basketball is a smart basketball that can play a message, "Let's play!" We can build this function into our object:
const basketball = {
    color: 'orange',
    shape: 'round',
    playMessage() {
        console.log('Lets play!');
    },
};
// This function/method does not have any parameters as we do not need to provide it any values.
basketball.playMessage();

// We can assign properties and methods outside of the object as well:
basketball.weight = 1.4;
console.log(basketball);
basketball.donePlaying = () => {
    console.log('Are you really done, friend!?');
};
basketball.donePlaying();

//------------------------------------------------------------

// TASK 2
// Now add a play method to your favoriteMovie object that logs 'The movie will now play!' to the console when called. Call that method once it's added.

const favoriteMovie = {
    title: 'The Dark Knight',
    play() {
        console.log('The movie will now play!');
    },
};
favoriteMovie.play();

//------------------------------------------------------------

// Nested Objects
const home = {
    homeType: 'house',
    size: 1100,
    rooms: {
        bedroom: {
            size: 250,
            color: 'purple',
        },
        kitchen: {
            size: 400,
            color: 'black',
            refrigerator: true,
        },
    },
};

console.log(home.rooms.bedroom.size); // output: 250

//------------------------------------------------------------

// TASK 3
/*
    Create a nested object to represent an airplane.

    1. Your airplane object should have a cockpit object with a captains seat object and a first officer's seat object.
    2. Each seat object should have an occupied property with a value of either true or false.
    3. Your airplane object should also have a cabin object with 300 passenger seats and 5 emergency exits.
    4. Create a method that logs "Taking off!" to the console when called.
*/

const airplane = {
    cockpit: {
        captainSeat: {
            occupied: true,
        },
        firstOfficerSeat: {
            occupied: false,
        },
    },
    cabin: {
        passengerSeats: 300,
        emergencyExits: 5,
    },
    takeOff() {
        console.log('Taking off!');
    },
};

//------------------------------------------------------------

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

//------------------------------------------------------------

// TASK 4
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

//------------------------------------------------------------

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

// TASK 4

//-------------------------------------------------------------

// Setters
// Used to indirectly make changes to properties.
// Let's create a setter to be able to change the age property:
let user = {
    _firstName: 'Josh',
    _lastName: 'Wilson',
    _age: 32,
    get firstName() {
        return this._firstName;
    },
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    },
    get age() {
        return this._age;
    },
    set age(newAge) {
        this._age = newAge;
    },
};

user.age = 55;
console.log(user.age);

//------------------------------------------

// TASK 5
// 1. Create a car object with make and miles properties. Make sure you indicate that these are not to be accessed directly.
// 2. Create getters for each property as to be able to indirectly access the properties
// 3. Create a setter for the miles peroperty that takes an argument and changes the miles on the car
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

//--------------------------------------------------

// Specific methods

// .assign()
// The Object.assign() method assigns key:value pairs from existing objects and assigns them to a new object.
// If different objects have the same key, the value from the object in the second spot will take priority.

const obj1 = { color: 'red', type: 'car' };
const obj2 = { color: 'blue', wheels: 6 };
const newObject = Object.assign(obj1, obj2);
console.log(newObject);

// .entries()
// The Object.entries method returns the key:value pairs from an object.
console.log(Object.entries(newObject));

// .keys()
// The Object.keys() method, as the name implies, returns the keys.
console.log(Object.keys(newObject));

// .values()
// The Object.values() method, as the name implies, returns the keys.
console.log(Object.values(newObject));

// .filter()
// Returns the key:value pairs based on the condition set. Similar to array
const people = {
    person1: {
        name: 'John',
        age: 28,
    },
    person2: {
        name: 'Jane',
        age: 31,
    },
    person3: {
        name: 'Peter',
        age: 55,
    },
};

const young = people.filter(person => person.age < 35);

console.log(young);

//----------------------------------------------

// TASK 3 - List of answers provided in a game of 20 questions!

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

//----------------------------------------------

// HOMEWORK
