/*
Programming 101: Final Project!

The final project will be a group programming exercise. Students will be encouraged to both give input and code along with the instructors, but the instructors will be leading the coding exercise. 

Prompt: You are a freelance programmer who has just received a job creating an internal car management tool for a local used car lot. This interface will:

    1. Store used car data in a json file. This file will persist across prompts and act as our car database.
    2. Allow the employee to:
        -List all cars currently in the lot
        -Add a car to the lot
        -Remove a car from the lot
        -Exit the program
    3. We will loop the prompt as needed until the user has finished interfacing with the tool.
    4. All asynchronous methods will need to be handled appropriately.

We will utilize our Command Line user interface tools to set up this UI.
*/

/*
We'll be using a node package called node-json-db to create and manage our database using a JSON file. This package allows us to do a wide variety of things, but we're mainly focused on creating, retrieving, adding, and removing data.

For more information visit this site: https://www.npmjs.com/package/node-json-db

npm init to initialize if not done already.
npm i node-json-db to install the package
*/

const initializeLot = require('./initializeLot');
const { openProgram } = require('./openProgram');

initializeLot().then(result => {
    openProgram();
});
