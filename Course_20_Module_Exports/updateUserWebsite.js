const utilites = require('./utilities');

const fetchUserData = utilites.fetchUserData;
const updateUserData = utilites.updateUserData;

const updateUserWebsite = (userId, website) =>
    new Promise((resolve, reject) => {
        fetchUserData(userId).then(userData => {
            userData.website = website;
            updateUserData(userId, userData).then(result => {
                resolve(result);
            });
        });
    });

module.exports = updateUserWebsite;
