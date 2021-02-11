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
// Your basketball is dirty now, so let's reassign the color
basketball.color = 'brown';
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
};

favoriteMovie.play = () => {
    console.log('The movie will now play!');
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
