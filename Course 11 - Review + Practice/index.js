// Review

const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com/users/';

const updateUserWebsite = (userId, website) =>
    new Promise((resolve, reject) => {
        fetchUserData(userId).then(userData => {
            userData.website = website;
            updateUserData(userId, userData).then(result => {
                resolve(result);
            });
        });
    });

const fetchUserData = userId =>
    new Promise((resolve, reject) => {
        axios.get(API_URL + userId).then(result => {
            resolve(result.data);
        });
    });

const updateUserData = (userId, data) =>
    new Promise((resolve, reject) => {
        axios.put(API_URL + userId, data).then(result => {
            resolve(result.data);
        });
    });

updateUserWebsite(5, 'partnerhero.com').then(result => {
    console.log(result);
});
