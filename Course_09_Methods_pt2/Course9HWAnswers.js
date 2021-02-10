// COURSE 9 HOMEWORK PROBLEMS

/*

1. Given the following array:
const tennisPlayers = ['Rafael Nadal', 'Roger Federer', 'Serena Williams', 'Andy Murray'];

    a. What will the output of console.log(tennisPlayers.length) be? Run it and see if you're right!
    b. What will the output of console.log(tennisPlayers.indexOf('Roger Federer')) be? Run it and see if you're right!
    c. What will the output of console.log(tennisPlayers.indexOf('Andre Agassi')) be? Run it and see if you're right!

    ANSWERS:
    a: 4, b: 1, c: -1
*/

//-------------------------------------------------------------------------------

// 2. Write an array of your 3 favorite movies. Use the shift method to remove the first movie in the array. Use the push method to add one new movie the the end of the array. Use the unshift method to add a new movie to the beginning of the array. Console.log the array once you've finished.

// ANSWER:
const faveMovies = ['The Room', 'Parasite', 'Avengers'];
faveMovies.shift();
faveMovies.push('Inception');
faveMovies.unshift('Scarface');
console.log(faveMovies);

//-------------------------------------------------------------------------------

// 3. Remember this prompt from a previous homework? "Using the array: const hobbies = ['playing video games', 'snorkeling', 'rock climbing', 'playing piano'], write a for loop that iterates through the array and prints "<hobby> is fun to do!" for each hobby in the array."
const hobbies = ['playing video games', 'snorkeling', 'rock climbing', 'playing piano']; // prettier-ignore
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i] + ' is fun to do!');
}

// Try to accomplish the same thing as the above for loop, but now using the forEach method instead of a for loop.

// ANSWER:
hobbies.forEach(hobby => console.log(`${hobby} is fun to do!`));

//-------------------------------------------------------------------------------

// 4. Use the forEach method on the below array of colors to log each color name and index to the console. Example output: The color red is at index 0. Try to use the template literal format when logging your messages to the console.
const colors = ['red', 'blue', 'black', 'purple', 'orange'];

// ANSWER:
colors.forEach(color => {
    console.log(`The color ${color} is at index ${colors.indexOf(color)}`);
});

//-------------------------------------------------------------------------------

// 5. You work for a life insurance company. Customers over 55 are eligible for a discount. Given the following array of customer ages, use the filter method to create a new array with only the ages that are >= 55. Log your new array to the console.
const customerAges = [32, 47, 63, 55, 51, 59, 74, 41, 66];

// ANSWER:
const eligibleCustomers = customerAges.filter(age => age >= 55);
console.log(eligibleCustomers);

//-------------------------------------------------------------------------------

/*
    MAP METHOD

There was one array method we didn't cover in class that I wanted you all to be familiar with. It's called the map method.

.map() is similar to .forEach(), but CREATES A NEW ARRAY resulting from calling the provided function on each array element.
*/

// Example:
// We have an array of numbers here and want to divide each number by two.
const bigNumbers = [24, 50, 40, 40];

// Create a halfNumbers array and call the map method to store a separate array filled with elements that have had the function executed on them.
const halfNumbers = bigNumbers.map(bigNumber => {
    return bigNumber / 2;
});

// The resulting array is filled with elements from teh original that have been divided by 2.
console.log(halfNumbers); // output: [12, 25, 20, 20]

/*
    Map Exercise:

You work in an Accounts Receivable department and are checking a spreadsheet for outstanding customer payments. You notice your coworker left off decimal points on the spreadsheet, so numbers are appearing incorrectly. (for example: 500.00 is appearing as 50000)
(Spreadsheet values: [43500, 56000, 7900, 73200, 50000, 52200, 63000, 12400, 18300, 39700] )

Using the map method, fix the numbers so that they show the correct dollar amount owed to the company and then log your new array to the console.
*/

const dollarAmounts = [43500, 56000, 7900, 73200, 50000, 52200, 63000, 12400, 18300, 39700]; // prettier-ignore

// ANSWER:
const reducedDollarAmounts = dollarAmounts.map(dollarAmount => {
    return dollarAmount / 100;
});
console.log(reducedDollarAmounts);

//-------------------------------------------------------------------------------

/*
    MAP AND FILTER HW

1. You're given an array of NASCAR race completion times in minutes. Your job is to convert the times to seconds and then save them in a new array using the .map() method. Log your new array to the console to check your work.

2. Once that's done, you'll need to create another new array filled only with the times that qualify. Qualifying times are 460 seconds or less. Use the .filter() method here. Log your new array containing qualifying times to the console.
*/

const raceTimesInMinutes = [8.543, 7.934, 8.919, 7.868, 7.547, 7.989, 8.641, 8.556, 7.632, 7.425, 8.96, 8.953, 7.622, 8.001, 8.609, 7.439, 7.59, 7.426, 8.202, 8.591, 10.309, 7.566, 8.307, 7.424]; // prettier-ignore

// ANSWER:
const raceTimesInSeconds = raceTimesInMinutes.map(raceTime => {
    return raceTime * 60;
});
console.log(raceTimesInSeconds);

const qualifyingTimes = raceTimesInSeconds.filter(raceTime => raceTime <= 460);
console.log(qualifyingTimes);

//-------------------------------------------------------------------------------

/*
    BONUS HW PROBLEM #1

There are many array methods out there, so we recommend spending time looking through and practicing different ones that you find useful. Here is a problem that uses a method we did not talk about called the .find() method. Here are a couple resources about it: https://www.w3schools.com/jsref/jsref_find.asp or https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

Use the .find() method on the array below to find the first element in the array above 30.
*/

const numbers = [20, 18, 6, 27, 19, 7, 23, 23, 23, 9, 10, 16, 55, 130, 44, 80, 30, 35]; // prettier-ignore

// ANSWER:
const firstOver30 = numbers.find(number => number > 30);

console.log(firstOver30); // output: 55

//-------------------------------------------------------------------------------

/*
    BONUS HW PROBLEM #2

You and your friend are playing Scrabble and have made a bet: whoever can create the longest word wins! The following array shows the words that have been played; your friend's turn starts at index 0, yours starts at index 1, and you alternate turns.

const words = ['happen', 'regards', 'through', 'alternate', 'laptop', 'scary', 'wonder', 'forgot', 'keychain', 'justice'];

    1. Using the foreach method, cycle through the array and save the longest element to a variable. (Hint: if this element is longer than the previously longest variable, reassign the variable.)

    2. Use the indexOf method to determine who played the longest word. Write to the console a message declaring the winning word, and the person who played it.

    HINT: You'll have to learn about what modulus (mod) is to use with a conditional statement to figure out which player's turn it is! Search online to see if you can figure it out!
*/

// ANSWER:
const words = ['happen', 'regards', 'through', 'alternate', 'laptop', 'scary', 'wonder', 'forgot', 'keychain', 'justice']; // prettier-ignore

let longestWord = '';

words.forEach(word => {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
});

console.log(longestWord); // output: alternate

const winningIndex = words.indexOf(longestWord);
console.log(winningIndex); // output: 3

// If the winningIndex divided by 2 has a remainder equal to 0, that means the index is even and the person who went first (your friend) won. If not, then you won.
if (winningIndex % 2 === 0) {
    console.log('Your friend won!');
} else {
    console.log('You won!');
}
// output: You won!

//-------------------------------------------------------------------------------
