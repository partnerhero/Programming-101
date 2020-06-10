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

Say we wanted to convert our bobcat mullet order into a JavaScript Promise. It would look something like this:
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
getMeAMullet().then(result => {
    console.log(result);
 }).catch(error => {
    console.log(error);
 });
```

Notice how the `.then` statement handles whatever gets resolved, whereas `.catch` handles whatever was rejected.

To apply this in practice, let's declare a function that returns a promise that waits until a for loop is finished iterating before resolving:
```
const myAsyncFunction = () => new Promise((resolve, reject) => {
        for (let i = 0; i < 10; i++) {
            if (i === 9) resolve('finished!');
        }
});
```

To execute our function, we would call it and append a `.then` statement at the end:
```
myAsyncFunction().then(result => {
    console.log(result);
})
```

Now, let's try switching the `resolve` for a `reject`, and let's add a `.catch` block to ensure we catch any rejections or errors.

#### Nested promises - Practice

You can nest promises like you would with functions - IOW, you can have one promise wait for another promise's execution. Nested promises are particularly useful for complex operations that involve one or more async operations. 

Going back to axios and HTTP, imagine you were tasked with the following:

> Write a function that GETs a certain employee's data from the [dummy API](http://dummy.restapiexample.com/), increments the "age" property by one, and POSTs that data back to the API.



1. Quick recap on module 9 and continue on POST and PUT
2. A more thorough look on Promises - Dan to write up a quick draft
3. RequestBin
4. Cover parameters on GET request
5. Practical / interactive tasks on making requests - Dan to write up 1-2 examples


