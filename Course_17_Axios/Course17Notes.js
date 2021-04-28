// Course 17 - Promises and Axios

/*
    Quick Review of Promises 

Promises are the syntax we use to make operations run asynchronously in Javascript.

Example: You manage your own blog!
a.) You’re going to write a new blog post for the day. Which VERB will be used in your API call? (GET, POST, or PUT)

b.) You want to refresh yourself on what you discussed yesterday. You attempt to pull up your old blog post but you type in the wrong URL. What status code do you expect to see?

c.) Let’s write a promise that outlines our update request!
*/
const blogUpdate = statusCode =>
    new Promise((resolve, reject) => {
        if (statusCode === 200) {
            resolve('Your blog was updated!');
        } else {
            reject('There was an error and your post was not made.');
        }
    });

blogUpdate(200)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

/*
    Axios

Axios is the tool that lets us actually make HTTP requests and use these "verbs" we've learned about. We will achieve this using a dummy API. API stands for Application Programming Interface. It's basically a means for comminucating and passing data between two end points. So for example between our computer and a website server.
*/

// Talk about the require syntax here
const axios = require('axios');

/*
Axios syntax is simple now since we've learned the Promise syntax!

const request = () => {
    axios.<verb>(<API-url>).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    });
};
*/

/*
The <verb> here is replaced by either get, post, or put.

We also need the url for the API. The dummy API we'll be using can be found here: https://reqres.in/

Let's visit this site real quick to check it out.
*/

// Let's declare a global variable to easily grab the API URL
const API_URL = 'https://reqres.in/api/';

/*
  GET Requests

We will first create a function named getRequest, and inside we will write a get request to an endpoint in our dummy api. This endpoint will return a user from the database in object format.

Note: We can change the endpoint by passing in part of the required url as a parameter and then adding that to the end of the API_URL constant
*/

const getRequest = path => {
    axios
        .get(`${API_URL}${path}`)
        .then(response => {
            // Notice how we get all this info as part of the response
            // If we add .data to response, we'll receive what we want
            // Why? Let's look at what's being returned
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.message);
        });
};

getRequest('users/4');

// Write this is such a way that that returns an error.
// Add .message to the error to return the message only

/*
  POST Requests

Now, let's use a POST request to create a new user. To do this, we'll need to attach parameters that describe our employee. Let's go back to the site and see what's required.

This particular API only requires a name and a job. Let's try it out!
*/

// Add your own name and dream job!
const postRequest = path => {
    axios
        .post(`${API_URL}${path}`, {
            name: 'Josh',
            job: 'developer',
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.message);
        });
};

// Creates a user
postRequest('users');

/*
  PUT Requests

Finally, we could do a PUT request to update our employee. Let's check the site once more to see the format needed. 

Notice that the URL lets us update the name and the job.
*/

const putRequest = path => {
    axios
        .put(`${API_URL}${path}`, {
            name: 'Joshua',
            job: 'Junior Developer',
        })
        .then(response => {
            console.log(response.data);
        });
};

putRequest('users/2');

//---------------------------------------------------------------------
