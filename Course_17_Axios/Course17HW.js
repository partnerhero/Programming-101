// Course 17 Homework

/*
Example of Promise syntax for reference:

Here is an example of Promise syntax from Course 16. Remember when we simulated ordering something from Amazon?
*/

const amazonOrder = responseCode =>
    new Promise((resolve, reject) => {
        if (responseCode === 200) {
            resolve('Your order arrived!');
        } else {
            reject('There was an issue with your order.');
        }
    });

// In the above Promise we have a responseCode we will pass in when we call it (ex: 200 or 404). Now we need to call it using .then() and .catch().

amazonOrder(200)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

/*
In the above we are calling the Promise function and passing in 200 as the responseCode, which is basically saying our amazon order was successful. So we should see the resolve() statement logged to the console.

If we pass anything except 200 as the responseCode, then we will see the reject() statement in the console, meaning there was an error.
*/

//------------------------------------------------------------------

/*
Problem 1 - Promise

For practice, you write a function to tell you if you need to comb your hair depending on if it's messy or not. Now you want to practice your ability to write functions asynchronously with Promises.

Using Promise syntax, rewrite the following function so it runs asynchronously. Use the amazonOrder example above as a guide. When resolved, your hair should be combed, and when rejected, you should not need to comb your hair.
*/

const combHair = hair => {
    if (hair === 'messy') {
        return 'You combed your hair.';
    } else {
        return 'You do not need to comb your hair.';
    }
};

console.log(combHair('messy'));

//--------------------------------------------------------------------

/*
Axios Example for reference

Now we're going to have you practice doing HTTP Requests using axios. An HTTP request is when we use one of the verbs we learned (GET, POST, PUT) to take a respective action somewhere online.
NOTE: If you don't have axios installed, open your coding folder in VSCode, open a New Terminal from VSCode and run: npm install axios

In the course we went over the example of how to make a GET request from our dummy API site: https://reqres.in/

If you remember, the request we wrote let us retrieve a specific user from the database on that site. We used the specific API url provided by the website to retrieve what we wanted.

Let's pretend we're an HR manager tasked with handling the employees of reqres.in, and the users in the database are the employees. The following GET request is what we would write and execute if we wanted to retrieve the information of a specific employee stored in the database.
*/

// We must write the following line in order to use axios. This is declaring axios as a keyword that is using the dependency we installed. This belongs at the top of your file.
const axios = require('axios');

// We declare a global variable to store our API url so we can easily pass it in as needed.
const API_URL = 'https://reqres.in/api/';

// We need to set up the GET request based on axios syntax and use path as a parameter. When we call the getRequest, we will pass in a string to represent the specific user's url we want to retrieve.
const getRequest = path => {
    axios
        .get(API_URL + path)
        .then(response => {
            // We add .data to response so we only get the data instead of the entire response object
            console.log(response.data);
        })
        .catch(error => {
            // We add .message to error so we only get the error message instead of the entire error response
            console.log(error.message);
        });
};

// Now we call the getRequest and pass in the url of the user we want. We can find out what that url should be by checking the site: https://reqres.in/
// We want a specific user, which can be retrieved from the path 'https://reqres.in/api/' + 'users/2' or a different ID like 'users/6'
getRequest('users/2');

// The response from the getRequest should be the user with ID 2 found here: 'https://reqres.in/api/users/2'

// In the following problems we will have you use axios to make a few HTTP requests yourself to retrieve, create, and update some of your employees (the users).

//--------------------------------------------------------------------

/*
Problem 2 - POST Request

As the HR Manager, you need to add a newly hired employee to the company database. POST requests are used for creating new data, so you need to use axios.post to have this person added.

For reference, here is the syntax for axios.post:

axios.post(api_url, {
    key1: value1,
    key2: value2,
}).then(response => {
    console.log(response.data);
}).catch(error => {
    console.log(error.message);
});

You only need to add their name and job to the database for now, which will be the two key:value pairs you add. The new employee's name is Faridah, and her job is Developer.

Make sure that when calling your POST request that you use the specified path to create not register from the website https://reqres.in/ (HINT: it's 'users'). If successful, the returned response object should be the newly added employee.
NOTE: Since this is a dummy API, the user will not actually be created in the database.
*/

//--------------------------------------------------------------------

/*
Problem 3 - PUT Request

Now that you've added this new employee to the database, you can move on to your next task as HR Manager. You need to update the job title of the user whose "id" is 14. Their new job is Senior Developer.

Create a PUT request using axios.put with the appropriate format shown on the site for PUT, and the appropriate path.

If successful, the returned response object should show the new job and the time it was updated.
NOTE: Since this is a dummy API, the database will not actually be updated.
*/

//--------------------------------------------------------------------

/*
BONUS PROBLEM

The dummy API site has the ability to both add users and register emails/passwords. Both of these actions require POST requests, but ultimately use different API urls (paths).

Create a new POST request that handles both creating a new user and registering an email/password depending on the parameters passed in.
*/
