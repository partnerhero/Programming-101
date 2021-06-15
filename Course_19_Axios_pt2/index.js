const axios = require('axios');
const API_URL = 'https://jsonplaceholder.typicode.com/users/';

const fetchUserData = userId =>
    new Promise((resolve, reject) => {
        axios.get(API_URL + userId).then(result => {
            resolve(result.data);
        });
    });

const updateUserData = (userId, updatedData) =>
    new Promise((resolve, reject) => {
        axios.put(API_URL + userId, updatedData).then(result => {
            resolve(result.data);
        });
    });

const updateUserWebsite = (userId, website) =>
    new Promise((resolve, reject) => {
        fetchUserData(userId).then(userData => {
            userData.website = website;
            updateUserData(userId, userData).then(result => {
                resolve(result);
            });
        });
    });

updateUserWebsite('1', 'https://gentleapple.com').then(result => {
    console.log(result);
});
