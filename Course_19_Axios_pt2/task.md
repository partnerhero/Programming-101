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
