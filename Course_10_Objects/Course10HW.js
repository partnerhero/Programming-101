// Course 10 Homework

// Example of nested objects:
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

// Use dot notation to access properties within nested objects
console.log(home.rooms.bedroom.size); // output: 250

// You just placed an order for two pizzas and and you want to practice building objects in Javascript, so you decide to build your pizza order as an object. Get creative! :) Some ideas could include dough type, toppings, size, and cost! Try to come up with a single order of two different pizzas in your object. Be sure to include a method in your object that logs a 'Delivered!' message to the console when called.
