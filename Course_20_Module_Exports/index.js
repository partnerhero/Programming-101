const updateUserWebsite = require('./updateUserWebsite');

// Update user 1's website
updateUserWebsite('1', 'https://gentleapple.com').then(result => {
    console.log(result);
});
