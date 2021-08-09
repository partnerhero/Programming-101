/*
    Programming 101 Project

Prompt: You are a freelance programmer who has just received a job to create an internal car management program for a local used car lot. This interface will need to:

    1. Store used car data in a json file. This file will persist across prompts and act as our car database.
    2. Allow the employee to:
        -List all cars currently in the lot
        -Add a car to the lot
        -Remove a car from the lot
        -Exit the program
    3. We will loop the prompt as needed until the user has finished interfacing with the tool.
    4. All asynchronous methods will need to be handled appropriately.

We will utilize our Command Line user interface tools to set up this UI.

This will be hosted on the PH Programming 101 GitHub repo.

For more information visit this site: https://www.npmjs.com/package/node-json-db

install all necessary packages:
node-json-db
chalk
inquirer
figlet

*/

const initializeLot = require('./initializeLot');
const { openProgram } = require('./openProgram');

initializeLot().then(result => {
    openProgram();
});
