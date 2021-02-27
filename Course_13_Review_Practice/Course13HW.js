// HOMEWORK

// While Loop

// You are trying to balance water in 2 jugs on a scale so that each jug has 5 gallons of water. Each jug can hold no more than 10 gallons of water, and will start at an arbitrary amount of water from 0 to 10 gallons. Write a program such that, while your jugs are not balanced and do not add up to 10 gallons, will add or remove water from the jugs by a gallon so that eventually the jugs are equal.

let jug1 = 2;
let jug2 = 3;
let total = jug1 + jug2;
let balance = jug1 - jug2;
console.log(
    `Our starting values are: total: ${total} balance: ${balance} jug1: ${jug1} jug2: ${jug2}`
);
while (balance != 0 || total != 10) {
    if (total >= 10) {
        if (jug1 > jug2) {
            jug1--;
        } else {
            jug2--;
        }
    } else if (jug1 > jug2) {
        jug2++;
    } else {
        jug1++;
    }
    total = jug1 + jug2;
    balance = jug1 - jug2;
    console.log(
        `Jug distribution progress: total: ${total} balance: ${balance} jug1: ${jug1} jug2: ${jug2}`
    );
}

console.log(`completed jugging`);

//-----------------------------------------------------------

// Functions
// We went through some of this problem during the course, but we added an additonal step to increase the complexity of this problem.

// You are a network administrator for your company. You are tasked with setting up an authentication system that only allows access to your company's server if certain conditions are met:

// 1. Create a function that takes one parameter, which should be the user's API key.

// 2. When called, this function should check the user's API key and compare it to our internal API key. If they match, the user should be granted access. If not, the user should receive a message saying the keys don’t match and to please try again.

// 3. Also, this function should keep track of how many times it has been called. If the user calls the function unsuccessfully 3 or more times, display the following message: “Access denied. Please contact your administrator.” without checking the API key against ours.

let checkedTimes = 0;
const internalAPI = 123456;

const authenticationCheck = userAPI => {
    if (checkedTimes >= 3) {
        console.log(`error message`);
    } else {
        checkedTimes++;
    }
    if (userAPI === internalAPI) {
        console.log(`Access granted!`);
    } else {
        console.log(`Please try again`);
    }
};

authenticationCheck(123456);
authenticationCheck(111111);
authenticationCheck(222222);
authenticationCheck(333333);
authenticationCheck(444444);
authenticationCheck(555555);

//-----------------------------------------------------------

// Arrays and Array Methods

/*
You’ve been training for a walkathon for the past 21 days. Given an array of steps taken, do the following:

a. Your goal is 4000 steps a day. Using the foreach() method, calculate how many steps you did in total. Also store a variable that keeps track of your mostSteps: this will come in handy for part b.

b. Use the indexOf() method on the array with your mostSteps variable to see which training day of the 21 was your best. (Add 1 to the index, and return it with a string.)

c. Using the filter method, create an array only of those days your goal was met.

d. Use the length property to count how many days you met your goal.

e. Your mile time before the training was 10 minutes exactly. Each day you met your goal of 4000 steps, it pushed your time down by 0.25 minutes. To win the race, you need to be under 7.5 minutes. Will you win the race?
*/

const stepsTaken = [ 3500, 3700, 4800, 3300, 5000, 2100, 9080, 2000, 100, 3000, 7700, 5000, 10000, 2200, 6000, 800, 4000, 3900, 7000, 3000, 5000,]; // prettier-ignore

let totalSteps = 0;
let mostSteps = 0;
const startingMileTime = 10.0;
stepsTaken.forEach(dailySteps => {
    totalSteps += dailySteps;
    if (mostSteps < dailySteps) {
        mostSteps = dailySteps;
    }
});

const bestDay = stepsTaken.indexOf(mostSteps) + 1;

console.log(`You had the highest number of steps on day ${bestDay}`);

console.log(bestDay);
console.log(totalSteps);
console.log(mostSteps);

const daysMet = stepsTaken.filter(dailySteps => dailySteps >= 4000);
const savedTime = daysMet.length * 0.25;

console.log(
    `You met your goal ${daysMet.length} days out of the last ${stepsTaken.length} days!`
);

if (startingMileTime - savedTime < 7.5) {
    console.log(`You will win!`);
} else {
    console.log(`You will lose!`);
}

//-----------------------------------------------------------

// Objects

/*
You are on a construction crew building a new house to a potential buyer’s specifications.

1. Create an object titled “myHome” that contains 3 properties: a “garageAttached” boolean with a value of true, a “backyardPool” boolean with a value of true, and a “squareFeet” property with a value of 3000.

2. Create a nested object list of rooms containing the following info: 
bedroom { size: 700, floor: carpet}
bathroom { size: 600, floor: tile, shower: true}
kitchen { size: 600, floor: linoleum}

3. Make your squareFeet property private by putting an underscore in front of the name.

4. Create a getter called squareFeet that returns a sentence including the squareFeet.

5. Create a setter called squareFeet that takes an argument and updates the squareFeet parameter. Then update the _squareFeet to 3500.

*/

const myHome = {
    garageAttached: true,
    backyardPoold: true,
    _squareFeet: 3000,
    roomList: {
        bedroom: {
            size: 700,
            floor: 'carpet',
        },
        bathroom: {
            size: 600,
            floor: 'tile',
            shower: true,
        },
        kitchen: {
            size: 600,
            floor: 'linoleum',
        },
    },
    get squareFeet() {
        return this._squareFeet;
    },
    set squareFeet(newFeet) {
        this._squareFeet = newFeet;
    },
};
console.log(myHome);
myHome.squareFeet = 3500;
console.log(myHome.squareFeet);

//-----------------------------------------------------------
