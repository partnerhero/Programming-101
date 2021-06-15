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

module.exports = { fetchUserData, updateUserData };
