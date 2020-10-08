```
  __  __           _       _         ___  _____ 
 |  \/  |         | |     | |       / _ \| ____|
 | \  / | ___   __| |_   _| | ___  | (_) | |__  
 | |\/| |/ _ \ / _` | | | | |/ _ \  \__, |___ \ 
 | |  | | (_) | (_| | |_| | |  __/    / / ___) |
 |_|  |_|\___/ \__,_|\__,_|_|\___|   /_(_)____/ 
 
 HTTP - Part 2
 Programming 101
 ```
 
 ### Quick Recap on Module 9 
 
 #### Revising the Axios syntax
 
 #### PUT and POST Requests
 
 ### Let's talk about Promises
 
 Promises represent one of the core fundamental features in programming - asynchronous (or async) execution. 
 In short, an async process is any process that requires "waiting on", for example:

 - Reading or writing data through an HTTP request
 - Executing a complex function that requires multiple iterations
 
 Think about it in this context:
 > You order [this](https://www.amazon.com/dp/B00BC1GCOO?tag=bfbetsy-20&ascsubtag=4431391%2C5%2C21%2Cd%2C0%2C0%2Cduckduckgo%2C0%3A0) through Amazon.
 You don't know how long it will take before your payment is processed, the order is shipped, and it gets to your front door. 
 
 There are 3 states to that process:
 1. Pending - You make the payment. The order is processed, the item is packaged and shipped; delivery time, etc.
 2. Fulfilled.- The order arrived. Enjoy your bobcat mullet!
 3. Rejected - The payment was declined, or the order was shipped to the wrong address. 
 
 Those three states are also present in promises! IOW, a promise is a function that is pending until it is either resolved or rejected.
 
JavaScript, and therefore Node, are synchronous and single-threaded by nature. This means only one operation can be in progress at a time. Promises are a way to have JavaScript behave on an asynchronous way - they give JS super powers. 

#### Using Promises

There are 2 simple rules we need to follow to use Promises:
1. Like functions, promises need to be declared before they can be executed 
2. Promises can have two resolutions, resolved or rejected
    a. Resolved means the promise was successful - this is handled in the `.then` block
    b. Rejected means the promise was unsuccessful - this is handled in the `.catch` block
3. Promises finish once `resolve` or `reject` get called


The syntax for promises is very simple:
```
    let myPromise = new Promise((resolve, reject) => {
        // do something...
        resolve('finished executing!');
        //or
        reject('found an error!');
    });
```

Say we wanted to convert our bobcat mullet order into a JavaScript Promise:
```
    const correctAddress = true;
    
    const getMeAMullet = new Promise((resolve, reject) => {
        if (correctAddress) {
            resolve("here\'s your mullet!")
        } else {
            reject('whoops! wrong address')
        }    
    });
```
What do you think would happen if `correctAddress = false`?


If we wanted to call `getMeAMullet`, we would need to apply the same `.then` syntax that we used with axios requests:
```
getMeAMullet.then(result => {
    console.log(result);
 }).catch(error => {
    console.log(error);
 });
```

Notice how the `.then` statement handles whatever gets resolved, whereas `.catch` handles whatever was rejected.

#### Nested promises - Practice

You can also nest promises so that they live inside of a function. This is super helpful because it lets you pass parameters on to the promise.

The syntax is very similar:
```
const asyncFunc = () => new Promise((resolve, reject) => { resolve('finished!); })
```

To apply this in practice, let's declare a function that accepts a parameter `loopLength`, and returns a promise (called a nested promise) that resolves until a for loop is finished iterating:
```
const myAsyncFunction = (loopLength) => new Promise((resolve, reject) => {
        if (typeof loopLength !== 'number') reject('Looplength needs to be a number!');
        
        for (let i = 0; i < loopLength; i++) {
            if (i === loopLength - 1) resolve('finished!');
        }
});
```
Notice the `() => new Promise` syntax - it allows us to pass parameters on to a promise!

To execute our function, we would call it and append a `.then` statement at the end:
```
myAsyncFunction(100).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})
```

#### Practice Problem(s) 

Going back to axios and HTTP, imagine you were tasked with the following:

> You are a web developer and just finished an employee directory app for a big client called Gentle Apple. The app is connected to a database through an API. Employees on the database look like [this](https://jsonplaceholder.typicode.com/users). Now, your client calls you saying that they are moving to a new website, so they need the "website" property on all users to be updated to "https://gentleapple.com". 

The statement above gives us a number of requirements to work through:
1. We need to first retrieve data for an employee. For our purposes, we'll call employees `users`. We would need an `userId` parameter to do that. (GET)
2. Using that data, we need to replace the website property for the new `https://gentleapple.com` value. We'll need a `website` parameter. 
3. We then need to update that data through the API. (PUT)

We will be using [this api](https://jsonplaceholder.typicode.com/) to do this problem.

Let's break this down into steps:

1. Let's first declare the constants we'll need for this problem, axios and the API_URL:
```
const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com/users/';
```

2. Now, let's write our master function that'll call all other functions. For now, it'll only resolve `true`.
```
const updateUserWebsite = () => new Promise((resolve, reject) => {
    resolve(true);
});
```

3. Let's write a function to retrieve user data through a GET request. Keep in mind, we don't know the user's ID yet so we'll need to accept `userId` as a parameter. Remember we only care about `result.data`, not the entire HTTP result:
```
const fetchUserData = (userId) => new Promise((resolve, reject) => {
    axios.get(API_URL + userId).then(result => {
        resolve(result.data);
    });
});
``` 

4. Let's write a function for updating user data through a PUT request. We will also need to accept `userId` here, in addition to the `data` being updated:
```
const updateUserData = (userId, data) => new Promise((resolve, reject) => {
    axios.put(API_URL + userId, data).then(result => {
         resolve(result.data);
    })
});
```

5. Let's now rewrite our master function so that it accepts an `userId` and `keyword` parameters. Let's also plug in the `fetchUserData` function. We can update the website by replacing `user.website`.
```
const updateUserWebsite = (userId, keyword) => new Promise((resolve, reject) => {
    // get user data...
    fetchUserData(userId).then(userData => {
        // replace website
        userData.website = website; 
    })
});

```

6. Now that we're getting data and updating the date property, let's plug in our `updateUserData` function:
```
const updateUserWebsite = (userId, keyword) => new Promise((resolve, reject) => {
    // get user data...
    fetchUserData(userId).then(userData => {
        // add keyword to end of title
        userData.website = website;
        // update user...
        updateUserData(userId, userData).then(result => {
            //finish!
            resolve(result);
        })
    })
});

```

7. Let's execute our master function and see if it works! Remember to pass in a `userId` and `website` values.
```
updateUserWebsite(5, "https://gentleapple.com").then(result => {
    console.log(result);
});
```

#### What we learned today

