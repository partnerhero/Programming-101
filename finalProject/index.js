/*
    Programming 101 Project
    -<3 Daniel Blumberg + Jawman <3
*/

const initializeLot = require('./initializeLot');
const openProgram = require('./openProgram');

const init = async () => {
    //we bind the init function to itself to make it callable
    //and assign it to a constant
    const functionRestart = init.bind(init);

    initializeLot();

    const restart = await openProgram();
    if (restart) functionRestart();
};

init();
