// COURSE 4 HOMEWORK

// https://repl.it/languages/nodejs

// 1. Use the += operator to reassign and increase the following variable by 3 and then log it to the console.
let myVariable = 5;

// ANSWER:
myVariable += 3;
console.log(myVariable); // output: 8

// 2. Copy and paste the following for loop. Now add console.log(i); between the curly braces so that i is logged to the console with each iteration.
for (let i = 0; i <= 10; i++) {}

// ANSWER:
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// 3. Create a for loop that iterates from 0 through 20 by 2, and then logs the iterator variable to the console for each iteration.

// ANSWER:
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

// 4. Create a for loop that iterates from 100 down to and including 0 by steps of 5. Log the iterator variable to the console with each iteration.

// ANSWER:
for (let i = 100; i >= 0; i -= 5) {
    console.log(i);
}

// 5. Create a for loop that iterates from 1 through 20 by 1 and logs the variable each time. Inside the block of code, write a statement such that if the iterator variable is strictly equal to 10, the string 'You are halfway!' is logged to the console.

// ANSWER:
for (let i = 1; i <= 20; i++) {
    console.log(i);
    if (i === 10) {
        console.log('You are halfway!');
    }
}

// 6. Create a global variable named theCount and set it equal to 20. Create a while loop such that while theCount is greater than 0, theCount is decreased by 1 and then logged to the console.

// ANSWER:
let theCount = 20;
while (theCount > 0) {
    theCount--;
    console.log(theCount);
}

// BONUS:
// Write a for loop such that this appears in the console when run:
/*
#
##
###
####
#####
######
*/
// This problem comes directly from a book titled, "Eloquent Javascript," which has been made available in its entirety by the auther for free here: https://eloquentjavascript.net/. This answer can be found online if you get stuck, but I challenge all of you to give it all you've got. If you need a hint, try adding a string to another string.

// ANSWER:
let hashtag = '#';

for (let i = 0; i <= 5; i++) {
    console.log(hashtag);
    hashtag += '#';
}
