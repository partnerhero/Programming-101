### Module Exports

##### Programming 101 - Module 10

Throughout the previous modules, we've been keeping the majority of our code in one single file, usually called `index.js`. While that is okay for very small projects, it becomes harder once you're working on a project that is more complex and has multiple _pieces_ to it. 

For instance,

> Imagine we have a small Node project that is stored in an `index.js`. The project consists of 5 HTTP requests for a blog API:
1. Getting all article posts
2. Updating an article post
3. Deleting an article post
4. Creating a new article post
5. Changing the title on an article post

Having everything in one file would mean an `index.js` of over 600 lines. That becomes very hard to manage very easily. How could we break this down?

One quick way to do this is by separating HTTP requests (GET, POST, DELETE, PUT) in one file each. That way, we could **import** them into our `index.js` and then just write the raw functionality that's needed for each of the 5 cases above in there. 

So, how do you even store code across more than one file? And how do you import it?

##### Breaking it down

Let's look at the code we wrote on our last module:

```
const axios = require("axios");
const API_URL = "https://jsonplaceholder.typicode.com/users/";

const fetchUserData = (userId) =>
  new Promise((resolve, reject) => {
    axios.get(API_URL + userId).then((result) => {
      resolve(result.data);
    });
  });

const updateUserData = (userId, data) =>
  new Promise((resolve, reject) => {
    axios.put(API_URL + userId, data).then((result) => {
      resolve(result.data);
    });
  });

const updateUserWebsite = (userId, website) =>
  new Promise((resolve, reject) => {
    // get article data...
    fetchUserData(userId).then((userData) => {
      // add keyword to end of title
      userData.website = website;

      // console.log(articleData);
      // update article...
      updateUserData(userId, userData).then((result) => {
        //finish!
        resolve(result);
      });
    });
  });

updateUserWebsite("5", "https://google.com").then((result) => {
  console.log(result);
});
```

There's a lot of code in here, and if we get asked to add more functionality operations to our code, the file length will just continue growing. 

** Let's separate this code into chunks. **

The easiest way to do this is ask yourself, "what is the most important function that deserves to live in `index.js`?"

In order to separate functionality, we will need to do three things:
1. Move to code to a separate file
2. Export the code from that file
3. Import the code to our index.js

Let's start with step 1!

