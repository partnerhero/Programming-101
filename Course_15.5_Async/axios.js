/*

    AXIOS & HTTP REQUESTS

    Understanding the axios syntax


    First, let's import axios to our http.js file.
*/
let axios = require('axios');

/*
    Axios relies on JavaScript Promise syntax, which is useful for asynchronous operations

----------------------------------------------------------------------
Parenthesis - Don't know what async is? 

Anything that requires waiting for. 
In JavaScript, operations like adding two numbers or assigning a variable are synchronous.
Operations that require HTTP are asynchronous. 

So, anything we do with Axios will be async. This is because 
getting the request back takes time, and we need to wait for the server.

----------------------------------------------------------------------

Now, going back to Axios- the syntax is simple:

axios.verb(<url>).then((response) => {
    console.log(response)
})

To make a GET request to any URL and log the response:

axios.get(<url>).then((response) => {
  console.log(response);
});
*/

// To make our first HTTP requests, we'll be using a dummyAPI (http://dummy.restapiexample.com/api/v1/)
// which simulates an employee database API.
// Let's assign that URL to a global constant
const API_URL = 'http://dummy.restapiexample.com/api/v1/';

/*

  GET Requests

We will first create a function named getRequest, and inside we will write a get request
to an endpoint in our dummy api. This endpoint lists all employees under our dummy database.

Note: We can append endpoints by just concatenating them to the API_URL constant, since
it is a string

*/

const getRequest = () => {
    axios.get(API_URL + 'employees').then(response => {
        //Notice how we're logging response.data, not the entire response object
        console.log(response.data);
    });
};

// getRequest();

/*

  POST Requests

  Now, let's use a POST request to create a new employee. To do this, we'll need to attach params
  that describe our employee. This particular API only requires a firstName and lastName. Let's try it out!
*/
const postRequest = () => {
    axios
        .post(API_URL + 'create', {
            firstName: 'Fred',
            lastName: 'Flintstone',
        })
        .then(response => {
            console.log(response);
        });
};

//postRequest();

/*

  PUT Requests

  Finally, we could do a PUT request to update our employee. To do this, the URL would be 
  http://dummy.restapiexample.com/api/v1/update/21/

  Notice that the URL requires an employee ID. This means we'll need to query all employees and get 
  the ID for our new employee. Once we have that:
*/

const putRequest = () => {
    axios
        .put(API_URL + 'update/619', {
            firstName: 'Freddy',
        })
        .then(response => {
            console.log(response);
        });
};

// putRequest();
