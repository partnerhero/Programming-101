### Exporting/Importing Code

There are two ways to export code:
1. Default exports - when you need to export only one value/function
2. Grouped exports - when you need to export multiple values/functions

Because of the nature of our code, it makes sense to split our functions on the following order:
1. `index.js` would import the master function and call it.
2. `updateUserWebsite.js` would store the master function.
3. `utilities.js` would store the 2 helper functions that the master function needs, `fetchUserData` and `updateUserData`.

Let's start by creating all three files, which we'll populate soon.

#### Grouped exports - exporting

Grouped exports are useful for storing small utilities on the same file. We will use grouped exports to store `fetchUserData` and `updateUserData`, since they are helper functions.

To do that, we'd create a file called `utilities.js` and put both functions there. 

`utilities.js`
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
```

To export each function separately, we can add a `module.exports` statement at the end that exports an object containing both functions:
```
module.exports = { fetchUserData, updateUserData };
```

#### Grouped exports - importing

Both functions that we just exported will be **required** by the master function, so let's import them on `updateUserWebsite.js` using the **require** keyword:

```
const { fetchUserData, updateUserData } = require('./utilities.js')
```
Notice how we're adding `./` before the name of the file. This is a relative path, and it indicates that the file is stored on the same folder than our index.js file. 

Let's now throw our `updateUserWebsite` function in there, and that's it! We don't need to declare the helper functions in our file cause they are already being imported.

```
const { fetchUserData, updateUserData } = require('./utilities.js')

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
```

Now we need to export `updateUserWebsite` to make it accessible to `index.js`.

#### Default exports & imports

Default exports are useful when there's only one piece of functionality we care about exporting. 

To export our function, we could either append a default export statement at the end of the file:
```
module.exports = updateUserWebsite;
```

Or, a cleaner way would be to append the default export statement to the function's declaration:
```
module.exports = (userId, website) =>
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
```

Noticed how we're not naming the function anymore. This is because the name is implicitly added once we import the function on another file.

We need the `fetchUserData` function on `index.js`, so we can import it by doing:
```
const updateUserWebsite = require('./updateUserWebsite');
```

Now, we could call our function the same way as if it was declared on our index.js file:
```
updateUserWebsite('5').then(result => console.log(result));
```

There we go! Now we have a super clean `index.js` file that imports a master function from `updateUserWebsite.js`. The master function in turn imports two helper functions from `utilities.js`. 

The practice of separating code in logical _compartments_ based on the function that it serves in a project is called **Separation of Concerns**, and is one of the pillars of good code structure. 
