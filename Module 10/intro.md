### Module Exports

##### Programming 101 - Module 10

Throughout the previous modules, we've been keeping the majority of our code in one single file, usually called `index.js`. While that is okay for very small projects, it becomes harder once you're working on a project that is more complex and has multiple _pieces_ to it. 

For instance, if you look at the code we wrote on the module 9.5 to update a user's website through an API, you'll notice it is 46 lines long. If we continue adding functionality and features to it, it'll soon become very hard to manage. How could we break this down?

That's where the principle of **Separation of Concerns** comes handy. This is a design principle for software development, and one of the pillars of clean code, and it basically states that "code should be separated into logical groups that overlap in functionality". 

In Object-oriented programming languages, we call separate files `modules`. That is because all files need to follow one simple rule:
** A module exports at least one thing. Be it a variable, function, or any other value.**

One quick way to implement this principle on any project is by following a folder structure composed of two or more modules:
1. an `index.js` file that only contains the most important block of code, usually a function call.
2. a `utilities.js` file that contains helper functions

You can add additional modules as needed, but always ensuring that functions are separated in logical groups.

If we do this, how do we store code across more than one file? And how can we then import it to where it's needed?

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

** Let's separate this code into modules. **

The easiest way to do this is ask yourself, "what is the most important piece of code that deserves to live in `index.js`?"

In order to separate functionality, we will need to do three things:
1. Move our code to separate files (modules)
2. Export code from those modules
3. Import code back to `index.js`

Let's start with step 1!

