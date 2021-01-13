// COURSE 11 - REVIEW
// arrays, objects, classes

// Template Literals

// Template literals are string definitions that more easily allow embedding variables. Template literals are enclosed by the backtick (` `) character instead of double or single quotes.
// Template literals can contain placeholders. These are indicated by the dollar sign and curly braces ${expression}.

// Previously, using standard string concantenation:
const firstName = 'Josh';
const lastName = 'Wilson';

let string = 'My name is: ' + firstName + ' ' + lastName + '.';
console.log(string);

// Using template literal:
string = `My name is: ${firstName} ${lastName}.`;
console.log(string);

//------------------------------------------------

// Course 4 - For Loop and Modulus
// You're helping little Timmy with his math homework and he's learning about multiples.
// 1. For practice, you have him write a program in Javascript that iterates from 1 to 100.
// 2. With each iteration, log to the console each number that is a multiple of 3.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//------------------------------------------------

// Course 5 - Functions
// You are a network administrator for your company. You are tasked with setting up an authentication system that only allows access to your company's server if certain conditions are met:

// 1. Create a function that takes one parameter, which should be the user's API key.

// 2. When called, this function should check the user's API key and compare it to our internal API key. If they match, the user should be granted access. If not, the user should receive a message saying the keys don’t match and to please try again.

const internalAPI = 123456;
let checkedTimes = 0;

const authenticationCheck = userAPI => {
    if (userAPI === internalAPI) {
        console.log(`Access granted!`);
    } else {
        console.log(`Please try again`);
    }
};

authenticationCheck(111111);
authenticationCheck(123456);

//----------------------------------------------

// Course 6 - Arrays and Array Methods
/*
You have a list of 3 outstanding projects you want to get done this weekend.

1. Using the .push() method, add 3 new projects to the end of the "outstandingProjects" array: ‘fix roof’, ‘change oil’, ‘water grass’.

2. The weekend has come and gone, and you were able to complete the first 4 tasks in your list. Use the .filter() and the indexOf() method on your "outstandingProjects" array to create a new "completedProjects" array that shows the tasks you have finished.

3. Use the shift method 4 times in a row to remove the first 4 projects from the "outstandingProjects" array.

4. Log to the console the tasks you completed and the taks you still need to do.
*/

const outstandingProjects = [
    'fix deck',
    'rearrange furniture',
    'change battery',
];

outstandingProjects.push('new roof', 'change oil', 'water grass');

const completedProjects = outstandingProjects.filter(
    project => outstandingProjects.indexOf(project) <= 3
);

outstandingProjects.shift();
outstandingProjects.shift();
outstandingProjects.shift();
outstandingProjects.shift();

console.log(`Work still to be done: ${outstandingProjects}`);
console.log(`Work completed: ${completedProjects}`);

//----------------------------------------------

// Course 7 - Objects
// You are on a construction crew building a new house to a potential buyer’s specifications.

// 1. Create an object titled “myHome” that contains 3 properties: a “garageAttached” boolean with a value of true, a “backyardPool” boolean with a value of true, and a “squareFeet” property with a value of 3000.

// 2. Create a nested object list of rooms containing the following info:
// bedroom { size: 700, floor: carpet}
// bathroom { size: 600, floor: tile, shower: true}
// kitchen { size: 600, floor: linoleum}

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
};

//-----------------------------------------

// Lightning Round for assign, entries, keys, values
// You decide it’s time to take the SATs. You take it for the first time and get your first set of scores, but you’re not happy with all of them. You decide to take it again but only 2 of the 3 sections for this time around.
const test1 = {
    verbal: 700,
    math: 750,
    writing: 500,
};

const test2 = {
    verbal: 720,
    writing: 550,
};

// 1. You want to do additional research into the test topics. Using one of the above methods, what would you write to return only the subjects of the first test you took?
console.log(Object.keys(test1));

// 2. You are hoping to average at least a 660 across all test subjects. What would you write to return only the scores of the second test you took?
console.log(Object.values(test2));

// 3. You want to send your updated SAT scores to a potential college. What method would you use to combine all your updated scores in a new object?
const updatedScores = Object.assign(test1, test2);

// 4. The college wants to see all test attempts. What method would you use to return all key-value pairs from each object?
console.log(Object.entries(test1));
console.log(Object.entries(test2));

//----------------------------------------------

// HOMEWORK

// Try to use template literals from now on when logging messages and such to the console

//----------------------------------------------

// Course 4 HW - While Loop

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

//----------------------------------------------

// Course 5 HW - Functions
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

//----------------------------------------

// Course 6 HW - Arrays and Array Methods

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

//--------------------------------------------

// Course 7 HW - Objects
// WRITE UP PROMPT

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
