/*
    Quick Recap of last course

Last course we covered HTTP requests and had you guys install the axios package using npm. Axios will allow us to make our own HTTP requests with the three verbs we learned about.

Does anyone remember the three verbs we covered last course? Bonus points if you can tell me what they represent!
GET - used for retrieving data
POST - used for creating new data
PUT - used for replacing data

Before we start making our own requests, we have two more concepts to cover that we'll get through today.

*/

/*
    Synchronous Programming

Javascript is a single thread programming language, which means when we run a program, it starts at the top and runs to the bottom. Things happen one at a time and only one thing can happen at any given time. Let's look at a quick example:
*/
console.log(0 + 1);
console.log(2);
console.log(3);
console.log(4);

/*
Each operation here is executed starting at the top, and the operation after it cannot start until the previous one is finished. This is called synchronous programming and it's what we've all been working with so far.

However, this does not make good use of the processing power computers can offer nowadays. Technology is at the point where computer hardware can process several operations at the same time instead of one by one.

Let's think of a quick example. When I turn on my computer, I instinctively open several proggrams that I know I'll be using. Chrome, Slack, Zoom, Notes. If my computer processed this synchronously, it would open each program in the order that I click them, and each program would have to wait for the previous one to finish opening. Since my computer doesn't do this, it opens them in parallel. This is called asynchronous, where multiple things can all happen at the same time.

This greatly reduces the time it takes for all the programs to be opened and ready for me to use. There are tools available to us to help do this in Javascript. NodeJS is actually one of those tools.
*/

/*
    Asynchronous

Let's look at an example of this concept using our previous example. We have a method available to use called setTimeout() that will help us illustrate this idea. setTimeout() is a function that lets us tell it to run something after a set amount of time.
*/
console.log(0 + 1);
setTimeout(() => {
    console.log(2);
}, 1000);
console.log(3);
console.log(4);

// Before I run this, what do you guys expect the output to be here?
// output: 1 3 4 2

// Explain what's happening here and relate to asynchronous

/*
    Why are we talking about this?

In the last course we talked about HTTP requests, which by nature take some time to complete. If we remember, generally in an HTTP request, a request to a server is made and then we have to wait for that server to send a response back to us. Depending on what that response is, will determine what we see. Running an HTTP request asynchronously is an efficient use of time instead of waiting to get a response before the rest of the program proceeds.
*/

/*
    Promises

To work asynchronously in Javascript, we need to use what are called Promises. Promises essentially allow us to start an operation we think will take a long time and then have the program continue running until it's finished. This is accomplished by "promising" to return a result no matter if the long operation succeeds or fails!

Let's look at this from a practical standpoint. We decide to order a gaming headset from Amazon. There are three states our order can have once we've made it:
    1. Pending - the operation has begun but a response has not been received
        - This state means the order is being processed, the item is being packaged and shipped, you're making the payment, etc.
    2. Fulfilled - a successful response has been received
        - This state means that the order has arrived.
    3. Rejected - This means en error response has been received
        - This could mean either the payment was declined, the item was discontinued, shipped to the wrong address, etc.

Let's build this order using a Promise. Just like functions, we have to build the Promise before we can call it. Follow along if you're able to.
*/
const amazonOrder = responseCode =>
    new Promise((resolve, reject) => {
        if (responseCode === 200) {
            resolve('Your order arrived!');
        } else {
            reject('There was an issue with your order.');
        }
    });

// Talk through the syntax. Explain the reject and that we could expand if we wanted depending on the error code.

// Is everyone caught up to this point?

// We have the function built now and it's wrapped inside of a Promise, but we still need to call it. When calling a function wrapped in a Promise, special syntax is required as well. Of course lol.

amazonOrder(200)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

// Talk through syntax. The .then statement handles whatever gets resolved and the .catch handles whatever gets rejected.

// This can be written a little differently as well! We can set the Promise equal directly to a variable and create a separate orderResponse variable.

// Let's have you practice!

//---------------------------------------------------------------------------------------------

/* 
    TASK 1

You're writing a function that updates your super popular blog with what you ate for breakfast. Since this function takes some time, you decide to wrap it in a Promise so it can run asynchronously.

Write your function so that if the status of your breakfast is 'outdated', then you resolve with 'Breakfast updated!'. Otherwise have your reject statement say 'Already up to date!'.
*/

const breakfastUpdate = status =>
    new Promise((resolve, reject) => {
        if (status === 'outdated') {
            resolve('Breakfast updated!');
        } else {
            reject('Already up to date!');
        }
    });

breakfastUpdate('outdated')
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
