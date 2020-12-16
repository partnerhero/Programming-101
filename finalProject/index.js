/*
    Programming 101 Project
*/

const initializeLot = require('./initializeLot');
const { openProgram } = require('./openProgram');

initializeLot().then(result => {
    openProgram();
});
