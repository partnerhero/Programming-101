// Inquirer
// npm install inquirer
/*
    Syntax:

const inquirer = require('inquirer');

inquirer
  .prompt([
// Pass your questions in here as arrays
])
.then((answers) => {
// Use user feedback for... whatever!!
})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});

*/
inquirer
    .prompt([
        {
            type: 'list',
            name: 'theme',
            message: 'What do you want to do?',
            choices: [
                'Order a pizza',
                'Make a reservation',
                'Ask for opening hours',
                {
                    name: 'Contact support',
                    disabled: 'Unavailable at this time',
                },
                'Talk to the receptionist',
            ],
        },
        {
            type: 'list',
            name: 'size',
            message: 'What size do you need?',
            choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
        },
    ])
    .then(answers => {
        console.log(answers);
    });
