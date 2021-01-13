// Course 6 Homework!

// Reference Guide: https://docs.google.com/document/d/1SBGFegxdaqa28VxYyfzxXbFM1y72RV0TA4LN-5bBnqk/edit?usp=sharing

// 1. A Footlocker has asked you to write up an inventory management program. Write a function that takes a number “shoeSize” and string “brand” as parameters and writes to the console: “Placing order for a size <shoeSize> of <brand> shoes.”

const shoeManager = (shoeSize, brand) => {
    return 'Placing order for ' + brand + ' shoes in a size ' + shoeSize + '.';
};

console.log(shoeManager(7, 'Adidas'));

// 2. You’re writing the logic for the new stoplight down the street. Write an if statement (using the if, else if, else structure) that tells the driver to stop if the light is red, slow if the light is yellow, and go if the light is green.
let lightColor = 'cyan';

if (lightColor === 'red') {
    console.log('Stop!');
} else if (lightColor === 'yellow') {
    console.log('Slow down!');
} else {
    console.log('Go!');
}

// 3. You’re writing a function that returns a greeting for a Tinder profile. Your function will take a “name”, “age”, and “hobby” parameter, and will return a greeting of your choice that incorporates all 3 of those variables. (For example: “Hi, I’m Dan, I’m 30 and I love to program. Let’s chat!”)

const greetingMaker = (name, age, hobby) => {
    return (
        'Hi, I’m ' +
        name +
        ", I'm " +
        age +
        ' years old and ' +
        hobby +
        " is one of my favorite things to do. Let's chat!"
    );
};

console.log(greetingMaker('Dan', 30, 'snorkeling'));

/* 
4. A video game distributor needs your help! They need a way to know which platforms to distribute certain games on. Write a switch statement that evaluates the variable “platformType” and handles the following cases based on this variable:
    case “PS5”: log “This game will be released on PS5”
    case “XBox”: log “This game will be released on XBox”
    case “PC”: log “This game will be released on “PC”
    case “all”: log “This game will be released on all platforms”
    Don’t forget your default case!
*/
let platformType = 'PC';

switch (platformType) {
    case 'PS5':
        console.log('This game will be released on PS5');
        break;
    case 'XBox':
        console.log('This game will be released on XBox');
        break;
    case 'PC':
        console.log('This game will be released on PC');
        break;
    case 'all':
        console.log('This game will be released on all platforms');
        break;
    default:
        console.log(
            'You have not selected a valid distribution platform. Please try again!'
        );
}

// 5. I’m thinking of a number! Write a while loop (or do-while loop) such that you start from 1 and count up by 1. The while loop should continue to count up until it hits the value of a number variable. Once it hits this number, break the loop and console.log that you’ve found the number.
const number = 45;
let i = 1;
while (i != number) {
    i++;
    if (i === number) {
        console.log("I've found the number! It is " + i);
        break;
    }
}
