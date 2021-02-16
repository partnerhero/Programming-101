// Course 11 Notes

// Here is a car object you can use as an example while you work through the problems:
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
    startEngine() {
        return 'Starting engine!';
    },
};
console.log(car.make); // output: Ford
console.log(car.startEngine()); // output: Starting Engine!
car.miles = 200000; // reassigns _miles property value to 200000 via setter
console.log(car.miles); // output: 200000

// Object methods:
// .entries()
// The Object.entries method returns an array of the key:value pairs each as arrays from the object.
const carEntries = Object.entries(car);
console.log(carEntries);

// .keys()
// The Object.keys() method, as the name implies, returns the keys as an array.
const carKeys = Object.keys(car);
console.log(carKeys);

// .values()
// The Object.values() method, as the name implies, returns the values as an array.
const carValues = Object.values(car);
console.log(carValues);

// .assign()
// The Object.assign() method assigns key:value pairs from existing objects and assigns them to a new object. If different objects have the same key, the value from the object in the second spot will take priority.
// Example:
const obj1 = { color: 'red', type: 'car' };
const obj2 = { color: 'blue', wheels: 6 };
const newObject = Object.assign(obj1, obj2);
console.log(newObject);

//------------------------------------------------------------------------

// Course 11 Homework Problems

/*
    Your pet!

1. Create a pet object with name and age properties making sure to denote using the underscore (_) that they are not to be accessed directly.

2. Create getters for the name and age properties in your pet object and console.log each property.

3. Create a setter for the age property that allows you to reassign it.

4. Reassign the age property and then log the age property to the console again to make sure it worked.

5. Use the Object.keys() method on your pet object to store the keys of your object in a variable called petKeys. Log petKeys to the console.
*/

//------------------------------------------------------------------------

/*
    Your robot bear pet!

1. Create a robot bear object with name, model number, and battery level (make sure the value is a number) properties. Make sure to indicate that these should not be accessed directly.

2. Create getters for the name and model number properties.

3. Create a getter for the battery level, and inside the getter create a conditional statement such that if the typeof the battery level is number, return the battery level, otherwise log to the console that there's an error.

4. Create a growl method for your robot bear pet.

5. Use the Object.assign method to create a frightening new hybrid pet object that combines the pet object from the previous exercise and the robot bear pet from this exercise. Save it to a variable and log that variable to the console to see your new object.
*/

//------------------------------------------------------------------------

// For more practice, feel free to build a starfighter object using everything you've learned! Go bananas!
