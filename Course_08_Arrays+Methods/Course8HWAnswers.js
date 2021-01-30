// HOMEWORK

// Give Daniel's Dasterdly Challange a try on your own. We reviewed the answer at the beginning of the course, but try to get through it as best you can before looking at the recording:

// Given these two arrays, write a program that compares the numbers between the arrays and logs to the console any numbers that are in both arrays.
const myArray = [6, 20, 19, 17];
const yourArray = [20, 17, 23, 5];

for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < yourArray.length; j++) {
        if (myArray[i] === yourArray[j]) {
            console.log('Both arrays have the number: ' + yourArray[j]);
        }
    }
}

// Try adding this third array of numbers and changing the code to check for a common number in all three arrays.
const theirArray = [99, 7, 20, 31];

for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < yourArray.length; j++) {
        for (let k = 0; k < theirArray.length; k++) {
            if (myArray[i] === yourArray[j] && myArray[i] === theirArray[k]) {
                console.log(
                    'The number ' + theirArray[k] + ' is in all three arrays'
                );
            }
        }
    }
}

/*
Array methods homework problem

1. Create an array with the following animals: cat, dog, horse, monkey
2. Log the length of the array to the console
3. Using the .indexOf() method, log the index of 'monkey' to the console
4. Call the .pop() method on this array to remove the last element and save it to a variable
5. Log that variable to the console
6. Call the .pop() method one more time on your array
7. Log the entire array to the console
*/

const animals = ['cat', 'dog', 'horse', 'monkey'];
console.log(animals.length);
console.log(indexOf('monkey'));

const removedElement = animals.pop();
console.log(removedElement);

animals.pop();
console.log(animals);
