// COURSE 13 - REVIEW

// Cheat Sheet: https://docs.google.com/document/d/1DPkgL74yjn9gK8P4DvyFeUrrIZ9aRcPjGMRdvpW8lxo/edit?usp=sharing

//-----------------------------------------------------------

// Functions

/*
You are a network administrator for your company. You are tasked with setting up an authentication system that only allows access to your company's server if certain conditions are met:

1. Create a function that takes one parameter: the user's API key.

2. When called, this function should check the user's API key (passed as argument) and compare it to our internal API key, which is 123456. If the two API keys are strictly equal, the user should be granted access. If not, the user should receive a message saying the keys don’t match and to please try again.
*/

const internalAPI = 123456;

const authenticationCheck = userAPI => {
    if (userAPI === internalAPI) {
        return 'Access granted!';
    } else {
        return 'Please try again';
    }
};

console.log(authenticationCheck(111111));
console.log(authenticationCheck(123456));

//-----------------------------------------------------------

// Arrays and Array Methods

/*
You have a list of outstanding projects around the house you want to get done this weekend.

1. The weekend has come and gone, and you were able to complete the first 4 tasks in your list. Use the .filter() and the indexOf() methods on your "outstandingProjects" array to create a new "completedProjects" array that shows the tasks you have finished.

2. Now you need to remove the first 4 projects from outstandingProjects. You can either use the shift method 4 times in a row OR create a function where you pass in the number of projects you completed and it removes those from the array. Call that function if you built it.

3. Log to the console the tasks you completed and the tasks you still need to do.
*/

const outstandingProjects = [
    'fix deck',
    'rearrange furniture',
    'change battery',
    'fix roof',
    'change oil',
    'water grass',
];

const completedProjects = outstandingProjects.filter(project => {
    return outstandingProjects.indexOf(project) <= 3;
});

const removeProjects = num => {
    for (let i = 0; i < num; i++) {
        outstandingProjects.shift();
    }
};

// outstandingProjects.shift();
// outstandingProjects.shift();
// outstandingProjects.shift();
// outstandingProjects.shift();

removeFinished(4);
console.log(`Work still to be done: ${outstandingProjects}`);
console.log(`Work completed: ${completedProjects}`);

//-----------------------------------------------------------

// Objects

/*
You are on a construction crew building a new house to a potential buyer’s specifications.

1. Create an object titled myHome that contains 3 properties: a garageAttached boolean with a value of true, a backyardPool boolean with a value of true, and a squareFeet property with a value of 3000.

2. Create a nested object list of rooms containing the following info:
bedroom { size: 700, floor: carpet}
bathroom { size: 600, floor: tile, shower: true}
kitchen { size: 600, floor: wood}
*/

const myHome = {
    garageAttached: true,
    backyardPoold: true,
    squareFeet: 3000,
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
            floor: 'wood',
        },
    },
};

//-----------------------------------------------------------

// Verbal Quiz for Object methods assign, entries, keys, values

// You decide it’s time to take the SATs or entrance exams for school. You take them for the first time and get your first set of scores. You’re not happy with all of them, so you decide to take the exams again but only 2 out of the 3 sections this time. Here are your scores:
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

// 2. What would you write to return only the scores of the second test you took?
console.log(Object.values(test2));

// 3. You want to send your updated scores to a potential college. Since you did better on your second test, what method would you use and how would you write it to combine all your updated scores in a new object while making sure the scores from test2 override your older scores?
const updatedScores = Object.assign(test1, test2);

// 4. The college wants to see all test attempts. What method would you use to return all key-value pairs from each object?
console.log(Object.entries(test1));
console.log(Object.entries(test2));

//-----------------------------------------------------------

// Object methods task:

// Collecting data from users that create accounts on your web app. You store different sets of data for each user in several different objects, but you noticed you have some info duplicated across different objects. You decide to consolidate everything into a single object.

// Write a method that combines the three following objects into one and stores it in a variable called userInfo. Then log to the console all the key: value pairs from that new object.

const personalInfo = {
    name: 'Wosh',
    age: 33,
    country: 'Russia',
};

const profileInfo = {
    username: 'WJilson',
    email: 'JSSlayer@jmail.com',
    country: 'Russia',
};

const accountSettings = {
    username: 'WJilson',
    theme: 'light',
    '2FA': true,
};

// Answer:
const userInfo = Object.assign(personalInfo, profileInfo, accountSettings);
console.log(userInfo);
const userInfoProps = Object.entries(userInfo);
console.log(userInfo);

//-----------------------------------------------------------

// IF EXTRA TIME THEN

// For loop and modulus

/*
You're helping little Timmy with his math homework and he's learning about multiples.
1. For practice, you have him write a program in Javascript that iterates from 1 through 100.
2. Using modulus (%), with each iteration, log to the console each number that is a multiple of 3.
*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//-----------------------------------------------------------

// END OF COURSE

//-----------------------------------------------------------
