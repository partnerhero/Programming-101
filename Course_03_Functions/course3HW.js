/*
Functions homework!

https://repl.it/languages/nodejs

1. Copy and paste the following function into https://repl.it/languages/nodejs. Then inside the console.log(), call the function and run it.

const greeting = () => {
    return 'Hey there! :)';
};
console.log();

ANSWER:
const greeting = () => {
    return 'Hey there! :)';
};
console.log(greeting());

2. Write a function with no parameters that returns any string. Call the function inside a console.log() and then run it.

ANSWER:
const myString = () => {
    return 'This can say anything';
};
console.log(myString());
ALTERNATE ANSWER:
const myString = () => 'This can say anything';
console.log(myString());

3. Write a function with one parameter that multiplies that parameter by 2. Call the function inside a console.log() and pass in the number 5 as an argument then run it.

ANSWER:
const multiplyThis = number => {
    return number * 2;
};
console.log(multiplyThis(5)); // output: 10

4. Write a function that adds two parameters together. Call the function inside a console.log() and pass any two numbers as arguments. Call this function three times with three different sets of numbers.

ANSWER:
const addingFunction = (num1, num2) => {
    return num1 + num2;
};
console.log(addingFunction(3, 4));
console.log(addingFunction(2, 2));
console.log(addingFunction(10, 0));

5. Write a function that converts meters to feet. 1 meter is 3.28 feet, so your function block should multiply meters by 3.28. When calling the function, it should take meters as an argument.

ANSWER:
const convert = meters => {
    return meters * 3.28;
};
console.log(convert(5));

6. Write a function with one parameter that returns true if it is greater than 50 and returns false if it is less than 50.

ANSWER:
const checkValue = num => {
    if (num > 50) {
        return true;
    } else {
        return false;
    }
};
console.log(checkValue(87));
console.log(checkValue(24));
P.S. I forgot to say greater than "or equal to" in the instructions, sorry about that.

BONUS:
Write a function that checks two given numbers and returns true if one of the numbers is 50 or if the sum of both numbers is 50, otherwise return false.

ANSWER:
const numCheck = (num1, num2) => {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return true;
    } else {
        return false;
    }
};
console.log(numCheck(13, 20)); // output: false
console.log(numCheck(50, 9)); // output: true
console.log(numCheck(31, 30)); // output: false
console.log(numCheck(22, 28)); // output: true

*/
