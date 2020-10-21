/*
    Programming 101 Project
    -<3 Daniel Blumberg + Jawman <3
*/

const initializeLot = require('./initializeLot');
const { openProgram } = require('./openProgram');

initializeLot().then(result => {
    openProgram();
});

// Calling our initialize function to set up database, then calling our main prompt.
// const mainFunction = () => {
//     initializeLot().then(result => {
//         openProgram();
//     });
// };

// mainFunction();
