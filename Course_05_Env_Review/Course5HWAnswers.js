/*
    Answers to the homework to recap courses 1 - 5! :)

    Work on these problems in VSCode in the index.js file we all set up together. To run your program when you want, open the terminal, make sure you're in the right directory, save your work, then type node index.js and press enter.

    Use the handy dandy Reference Guide to help with the homework:
    https://docs.google.com/document/d/1SBGFegxdaqa28VxYyfzxXbFM1y72RV0TA4LN-5bBnqk/edit?usp=sharing
*/

/* 
    Data types and variables
    
    1. Label each of the following examples with the correct data type of either string, number, or boolean:
        a. 'Coffee with cream, no sugar.' // string
        b. false // boolean
        c. 81364.3 // number
        d. true // boolean
        e. '615' // string
*/

// 2. Declare a variable using const and set its value equal to your birth place. Console.log() your variable and run it.
const birthPlace = 'California';
console.log(birthPlace);

// 3. Declare a variable using let and set its value equal to your favorite movie as a child. Directly below that declaration, log that variable to the console.
let favoriteFilm = 'Aladdin';
console.log(favoriteFilm);

// 4. Next, below that console.log(), reassign the value of your favorite movie variable to your current favorite movie. Now log that variable to the console again.
favoriteFilm = 'The Dark Knight';
console.log(favoriteFilm);

//-----------------------------------------------------------------------------------------------
// Mathematical and Comparative Operators

// 1. Log the following statement to the console. Your output should be the result of the equation: 13.
//     1 + 6 - 4 + 10
console.log(1 + 6 - 4 + 10); // output: 13

// 2. Guess the output of each of these statements and then log each to the console to see if you were right.
//     a. '5' === 5
//     b. (5 > 4) && (6 > 7)
//     c. (5 > 4) || (6 > 7)
//     d. !('7' == 7)
console.log('5' === 5); // output: false
console.log(5 > 4 && 6 > 7); // output: false
console.log(5 > 4 || 6 > 7); // output: true
console.log(!('7' == 7)); // false

// 3. Create a variable that compares any two numbers, then log that variable to the console. Your output should evaluate to either true or false.
const numComparison = 23 < 1077;
console.log(numComparison); // output: true

// 4. Create a variable that holds the value of a mathematical operation. This operation should include both multiplication and addition. Log this variable to the console.
const mathOp = (77 * 2) / 7;
console.log(mathOp); // output: 22

//-----------------------------------------------------------------------------------------------
// Conditional Statements (if-else and while)

// 1. What will be the output of the following statement? Feel free to run it to check your answer!
if (6 < 7) {
    console.log('seven ate nine');
} else {
    console.log('six eight seven');
}
// output: 'seven ate nine'

// 2. Write an if statement such that if milk <= 1, then you log to the console that 'You need to buy milk!', otherwise, log to the console that 'You do not need milk!'
let milk = 0;
// If done correctly, your output should be 'You need to buy milk!'
if (milk <= 1) {
    console.log('You need to buy milk!');
} else {
    console.log('You do not need milk!');
}

// 3. Now change the value of milk to 5 and then run your code again.
// Hint: If done correctly your output should now be 'You do not need milk!'
let milk = 5;
if (milk <= 1) {
    console.log('You need to buy milk!');
} else {
    console.log('You do not need milk!');
}

// 4. Sunday is laundry day! Write a variable that stores the day of the week. Write an if-statement that tells you to do your laundry if it’s Sunday, and otherwise tells you it isn’t laundry day.
// (Bonus: Write the logic such that both “Sunday” and “sunday” are accepted.)
let dayOfWeek = 'Sunday';
if (dayOfWeek === 'Sunday' || dayOfWeek === 'sunday') {
    console.log('Do your laundry.');
} else {
    console.log('Do not do your laundry');
}

// Functions

// 1. Write a function with no parameters that returns the number 32 when called, then call that function.
const returnNumber = () => {
    return 32;
};
console.log(returnNumber());

// 2. Write a function that greets your user! It should take 1 parameter (“username”) and return the string “Welcome back, <username>!” where <username> is replaced by the passed parameter.
const greeting = username => {
    return 'Welcome back, ' + username + '!';
};
console.log(greeting('jwils65'));

// 3. Write a function with two parameters that returns the sum of those two parameters. Call the function a few times inside a console.log(),trying out different combinations of numbers and strings.
const returnSum = (p1, p2) => {
    return p1 + p2;
};
console.log(returnSum(3, 5)); // output: 8
console.log(returnSum(112.67, 387.0999)); // output: 499.7699
console.log(returnSum('forty', 5)); // output: 'forty5'
console.log(returnSum('I like ', 'eggs.')); // output: 'I like eggs'
console.log(returnSum('se7en', '2')); // output: 'se7en2'

// 4. Write a function with one parameter that returns true if the paramter is greater than or equal to 100 and returns false if it is less than 100. Call that function inside a console.log() with a few different arguments to see if your function works. HINT: You'll need an if-else statement inside of your function.
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

// Iteration (for and while loops)

// 1. Create a for loop that iterates from 1 through 10 by steps of one and logs the iterator variable to the console each time. Your output should show the numbers 1 through 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Create a for loop that iterates from 0 to 20 by steps of two and logs the iterator variable to the console each time. You should only see even numbers in your output.
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

// 3. Create a for loop that returns the current iterator variable squared. Console.log() the result of squaring the even numbers from 4 to 12.
for (let i = 4; i <= 12; i += 2) {
    console.log(i * i);
}

// 4. Using a function and a for loop, console.log() the area of squares with lengths 1 through 10 incrementing by 1.
//     HINTS:
//         1. remember area of a square = length * length
//         2. Create your function first to calculate the area.
//         3. Create your for loop separate from your function.
const areaOfSquare = length => {
    return length * length;
};

for (let i = 1; i <= 10; i++) {
    console.log(areaOfSquare(i));
}

// 5. Now add an if statement inside of your for loop that makes it so only squares with lengths greater than or equal to 8 are logged to the console.
for (let i = 1; i <= 10; i++) {
    if (i >= 8) {
        console.log(areaOfSquare(i));
    }
}
