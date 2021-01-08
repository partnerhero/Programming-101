// Prettier and run a file

/*
    Josh Intro

    Hope everyone had a great holiday season! Today we'll be doing a review and getting some practice in. I realize not everyone may have had time to finish or do the homework, so today we're going to review a couple of the more difficult problems from the homework and then have you guys do some exercises. But first, let's set up a very useful extension in VSCode.

*/

/*

    VSCode extension: Prettier

    Josh will do quick Prettier extension install and setup follow-along
    -What are extensions?
    -What is prettier?
    -What settings do I recommend?
    -Do a quick example and run it.

*/

//----------------------------------------------------------------------------------------------

// Cheat Sheet for the students: https://docs.google.com/document/d/1SBGFegxdaqa28VxYyfzxXbFM1y72RV0TA4LN-5bBnqk/edit?usp=sharing

// Conditional Statements (if-else)

// We're going to go over problem number 4 from the conditional statements section of the homework, but did anyone have trouble with any other problems from this section before we do that?

// Number 4 from the HW:
// Sunday is laundry day! Write a variable that stores the day of the week. Write an if-statement that tells you to do your laundry if it’s Sunday, and otherwise tells you it isn’t laundry day.
// (Bonus: Write the logic such that both “Sunday” and “sunday” are accepted.)

// Anyone want to share their answers they got for this one?

let dayOfWeek = 'Sunday';
if (dayOfWeek === 'Sunday' || dayOfWeek === 'sunday') {
    console.log('Do your laundry.');
} else {
    console.log('Do not do your laundry');
}

// TASK 1
// Write an if-else statement that checks if the ripeness of an avocado is over 9000 or not. If it is over 9000, then eat it, if not, then don't eat it.
let avocadoRipeness = 9444;
if (avocadoRipeness >= 9000) {
    console.log('Eat it!');
} else {
    console.log("Don't eat that thing yet.");
}

//-----------------------------------------------------------------------------------------------

// Functions

// We're going to go over problem number 4 from the functions section of the homework, but did anyone have trouble with any other problems from this section before we do that?

// Number 4 from the HW:
// Write a function with one parameter that returns true if the paramter is greater than or equal to 100 and returns false if it is less than 100. Call that function inside a console.log() with a few different arguments to see if your function works. HINT: You'll need an if-else statement inside of your function.

// Anyone want to share their answers they got for this one?

const myFunction = num => {
    if (num >= 100) {
        return true;
    } else {
        return false;
    }
};
console.log(myFunction(100)); // output: true
console.log(myFunction(59)); // output: false
console.log(myFunction(9266)); // output: true
console.log(myFunction(-4)); // output: false

// TASK 2
// Write a function that converts dog years to human years.

// This might be a challenge for them, but worth exploring.
const dogToHuman = years => {
    return years * 7;
};
console.log(dogToHuman(4)); // output: 28

//----------------------------------------------------------------------------------------------

// Iteration (for and while loops)

// We're going to go over problems 4 and 5 from the iteration section of the homework, but did anyone have trouble with any other problems from this section before we do that?

// Numbers 4 from the homework:
// Using a function and a for loop, console.log() the area of squares with lengths 1 through 10 incrementing by 1.
//     HINTS:
//         1. remember area of a square = length * length
//         2. Create your function first to calculate the area.
//         3. Create your for loop separate from your function.

// Anyone want to share their answers they got for this one?

const areaOfSquare = length => {
    return length * length;
};

for (let i = 1; i <= 10; i++) {
    console.log(areaOfSquare(i));
}

// Number 5 from the homework
// Now add an if statement inside of your for loop that makes it so only squares with lengths greater than or equal to 8 are logged to the console.
for (let i = 1; i <= 10; i++) {
    if (i >= 8) {
        console.log(areaOfSquare(i));
    }
}

// TASK 3
/* 
Write a for loop such that the output is:

15
12
9
6
3
*/
for (let i = 15; i >= 3; i -= 3) {
    console.log(i);
}

//-------------------------------------------------------------------------------------------

//  Any questions about any concepts we've covered up to this point in the course?

// Since we have time, let's have you guys do another task:
// Write a function that converts hours into seconds.

// ANSWER: there are lots of ways to do this, this is only one of them.
const hoursToSeconds = hours => {
    const minutes = hours * 60;
    const seconds = minutes * 60;
    return seconds;
};
console.log(hoursToSeconds(24));
