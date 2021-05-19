// Course 18 - Review

//   COURSE REVIEW

/* INTRO: As we continue to explore new and more complex topics within Javascript and Node, we want to make sure
 that the last few concepts have made sense. We'll be using this course to review the material from the last few courses
 before we move forward. Before we get into some practice problems, we'd like to quickly review the material and make
 sure the class is on the same page. Please ask any questions if you're confused with anything we cover here!*/

//--------------------------------------------------

/* GITHUB CHECK-IN: We talked about GitHub recently. As a reminder: GitHub is what is called a "Version Control System". 
Simply put, this is software that allows us to maintain versions of our project, and allows people to work on the same code
base on different builds (or "branches", in GitHub). 

<<Does anybody have any specific questions about GitHub? We encourage you to play around with the repo we used in class.>>*/

//--------------------------------------------------

/* ASYNCHRONOUS PROGRAMMING: We talked about asynchronous programming.

<<Can someone remind me what asynchronous programming means?>>

Essentially, an asynchronous process is one that takes extra time. When we send a request to a server, for instance, we then have to wait for a response from that server, which takes time. Sometimes, we want to tell Javascript to wait for a process to finish before continuing to run code. We can do this via a promise.*/

//--------------------------------------------------

/* PROMISE: 
<<Who can tell me, in their own words, what a promise does?>>
(Answer: Promises are tools that are used to handle asynchronous operations. Calling a promise tells Javascript to wait until the code within the promise has been successfully completed.)

<<What are the 3 states a promise can be in?>>
(Answer: Pending (In progress), Fulfilled (Successful), Rejected (Failed))

<<What are the two parameters a promise takes, and what do they represent?>>
(Answer, if needed: "Resolve" and "Reject". Resolve for fulfilled and Reject for rejected)

<<How do I call a promise once it's been declared?>>
(Answer: With a then block and a catch block. Syntax: myPromise.then().catch() or myFunction().then().catch())

Does anybody have any other questions regarding promises?*/

//--------------------------------------------------

/*HTTP REQUEST: An HTTP Request is simply a message sent from a client (our computer) to a server. This is a perfect example 
of an asynchronous process, because we need to wait for a response from the server before we can complete our task.

<<What are the 3 verbs that we use for HTTP Requests? What do they mean?>>
(Answer: GET, POST, PUT help us perform CRUD operations. Post for C, Get for R,, PUT for U and D)

<<What is an API? What is an endpoint?>>
(Answer: The API is the infrastructure that reads requests and responds to them. Certain APIs only allow access to certain
users via an API key. The endpoint is the specific call or subset of data that you're attempting to retrieve from the API.)

We reviewed some status codes: for the purposes of our review problem(s), note that a 200 generally means the request was 
successful, a 400-level error means the page/resource wasn't found, and a 500-level error means there was a server error. 

Are there any other questions about HTTP Requests?*/

/* OUTRO: Is there anything that we talked about that doesn't make sense? Is there anything we haven't yet discussed that
you would like to?

<<Move on to examples: promise FIRST, then HTTP Request>> */

//----------------------------------------------------------------------

// Review problems!

// HTTP review:

/*
Let's review HTTP requests! Tell us what HTTP verb would be more appropriate for the case and what status code you might get:

1) You decide to search for a list of everyone called 'Gabriel' on PH's API but made a typo on the name when you sent the request.

2) You decide to change your name to 'Daniel' and you're tasked with updating your name using PH's API

3) You're tasked with adding a new hire to PH's database so you decide to use their API to do this.
*/

// Promise review:

/*
Create a new promise that checks if a number is postive, negative or zero. If so, resolve with a string stating if the number was either positive, negative or zero. If the input is not a number, reject with a string stating this is not a number.
*/

// Exercise 1

const numberChecker = number =>
    new Promise((resolve, reject) => {
        if (number > 0) {
            resolve('The number is positive!');
        } else if (number < 0) {
            resolve('The number is negative!');
        } else if (number === 0) {
            resolve('The number is zero!');
        } else {
            reject('This is not a number!');
        }
    });

numberChecker(0)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

// Exercise 2

/*
Create a promise that makes a username and password check. Make sure to take two parameters, one for the username and the other for the password, if they match resolve with the string 'Access granted' otherwise reject with 'Invalid username or password'

username: admin
password: password
*/

const username = 'admin';
const password = 'password';

const login = (user, pass) =>
    new Promise((resolve, reject) => {
        if (user === username && pass === password) {
            resolve('Access granted');
        } else {
            reject('Invalid username or password');
        }
    });

login('admin', 'password')
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

// Axios review:

/*
**************************************MAKE SURE YOU HAVE AXIOS INSTALLED****************************************************************

If it's not installed make sure to run on the VSCode terminal: npm install axios

Once installed make sure to include it on the file:

const axios = require('axios');

****************************************************************************************************************************************

Example of a GET request:

axios.get(API)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error.message);
    });

Example of a POST request:

axios.post(API, {
        key1: value1,
        key2: value2,
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error.message);
    });

Example of a PUT request:

axios.put(API, {
        key1: value1,
        key2: value2,
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error.message);
    });


We'll be using the a dummy API (reqres.in) for this exercise, we encourage you to check the page and look at the documentation for the HTTP verbs

Link: https://reqres.in/

API URL: 'https://reqres.in/api/'



Using the dummy API do the following:
*/

// 1) Using the GET search for a user with the id 3. Using dot noation retrive just the name from the response.

const axios = require('axios');

API = 'https://reqres.in/api/';

const getUser = path => {
    axios
        .get(API + path)
        .then(response => {
            console.log(response.data.data.email);
        })
        .catch(error => {
            console.log(error.message);
        });
};

getUser('users/2');

// 2) Create a user with the name: 'Gabriel', job: 'Manager' and return the id

const createUser = path => {
    axios
        .post(API + path, {
            name: 'Gabriel',
            job: 'Manager',
        })
        .then(response => {
            console.log(response.data.id);
        })
        .catch(error => {
            console.log(error.message);
        });
};

createUser('users');

// 3) Update the user with the id 3 and change the name to 'Josh' and job to 'Super Manager'

const updateUser = path => {
    axios
        .put(API + path, {
            name: 'Josh',
            job: 'Super Manager',
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.message);
        });
};

updateUser('users');

//--------------------------------------------------------------------------
// END OF COURSE
//--------------------------------------------------------------------------
