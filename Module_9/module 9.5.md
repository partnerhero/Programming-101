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
 
 
 ### Let's talk about Promises
 
 Promises represent one of the core, most important features in programming - asynchronous (or async) execution. 
 In short, an async process is any process that requires "waiting on", for example:

 - Reading or writing data through an HTTP request
 - Executing a complex function that requires multiple iterations
 
 Think about it in this context:
 > You order [this](https://www.amazon.com/dp/B00BC1GCOO?tag=bfbetsy-20&ascsubtag=4431391%2C5%2C21%2Cd%2C0%2C0%2Cduckduckgo%2C0%3A0) through Amazon. Cause who wouldn't?
 You don't know how long it will take before your payment is processed and shipped. 
 
 There are 3 states to that process:
 1. Pending - You make the payment. The order is being processed, you don't have a ship date.
 2. Fulfilled.- The order arrived. Enjoy your bobcat mullet!
 3. Rejected - The payment was declined, or the other was shipped to the wrong address. 
 
 Those three states are also present in promises! IOW, a promise is pending until it is either resolved or rejected.
 
JavaScript (and therefore Node) are synchronous and single-threaded by nature. This means only one operation can be in progress at a time. Promises are a way to have JavaScript behave on an asynchronous way. 

#### Using Promises

The syntax for promises is very simple:
```
    new Promise((resolve, reject) => {
        // do something...
        if (success) resolve('finished executing!');
        else reject('whoops!');
    });
```

There are 2 simple rules we need to follow to declare Promises:
1. Promises can have two resolutions, resolved or rejected
    a. Resolved means the promise was successful
    b. Rejected means the promise was unsuccessful
2. Promises finish once `resolve` or `reject` get called


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


Now, if we wanted to call `getMeAMullet`, we would need to apply the same `.then` syntax that we did with axios requests:
```
getMeAMullet().then(result => {
    console.log(result);
 }).catch(error => {
    console.log(error);
 });
```

Notice how the `.then` statement handles whatever gets resolved, whereas `.catch` handles whatever was rejected.

To apply this in practice, let's declare a function that returns a promise (IOW, a _nested_ promise). That promise waits until a for loop is finished iterating before resolving:
```
const myAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < 10; i++) {
            if (i === 9) resolve('finished!');
        }
    })
}
```

This is very powerful, because it let's you execute that promise through the function that is being called. This means you could do:
```
myAsyncFunction().then(result => {
    console.log(result);
})
```

#### Nested promises

Nested promises are particularly useful for complex operations that involve one or more async operations. Going back to axios and HTTP, imagine you were tasked with the following:

> Write a function that GETs a certain employee's data from the [dummy API](http://dummy.restapiexample.com/), increments the "age" property by one, and POSTs that data back to the API.



1. Quick recap on module 9 and continue on POST and PUT
2. A more thorough look on Promises - Dan to write up a quick draft
3. RequestBin
4. Cover parameters on GET request
5. Practical / interactive tasks on making requests - Dan to write up 1-2 examples


