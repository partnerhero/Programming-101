// Course 5 - Environment and Review

// Josh will go over the installations
// Encourage to participate since a good portion on content if review

/*
    Nodejs Installation

    Download Node from:
    https://nodejs.org/
    Use the download link on the left, it's the most stable version

    Go to the downloaded file and run it to install.

    Click next through the installer and stick with all the default options. Agree to the terms and conditions.
    
    DO NOT check to "automatically install the necessary tools..." - this installs Chocolatey and will take some time. We don't need it for what we're doing.

*/

/*
    After installing node

    Show them how to open cmd prompt
    WINDOWS: Type "command" in the search bar in bottom left and click Command Prompt
    MAC: CMD+SPACE then search "terminal"
    
    Type "node -v" to have them see if their version of Node appears

    Talk a little bit about the command prompt (terminal) and how we'll be using it a little in this course.

    Have them create a folder at their root by typing:
    mkdir node-workshop

    Cover a couple concepts/commands:
    cd - change directory
    the file path
    cd .. - moves back once to the parent directory
    dir(windows) - displays all directories in given file path
    others?

*/

/*
    Download VSCode from:
    https://code.visualstudio.com/download

    Click download button according to your operating system
    Go to your downloads and click the downloaded file to start the installer
    Click Next through all of the default selections in the installer

    Once it launches you should see the welcome screen. Click "Open Folder" and select the new directory you made "node-workshop"
*/

/*
    VSCode Navigation

    Create a file called index.js
    console.log('My first js file!');
    Save the file

    Open integrated terminal in VSCode
    node index.js to run the file

    You ran your first file!

    Let's talk about Nodejs here a little real quick:
    -Javascript is the programming language we've been learning so far
        -Javascript is run by the browser
    -Nodejs is a runtime environment used to execute Javascript code outside of a browser
        -Hence why we used the node command to run the file since we're not in a browser

*/

/*
    Show off the final project

    The finalProject folder contains all of the files and dependencies needed.
    Run node index.js and show off the project.

    The point of showing this is to give a bit of a preview of what we'll be making in the course and to show the possibilities of what a couple months of learning can do.

*/

// REVIEW QUESTIONS
// Remind students to not forget to save!

// 1. In your index.js file, create a variable that contains your name. Create another variable that contains your date of birth. Log those variables to the console, save your work, and run your file by typing node index.js into the Integrated Terminal and pressing enter.

const myName = 'Josh';
let myDOB = '01/24/1988';

console.log(myName);
console.log(myDOB);

// OR
console.log(myName, myDOB);

// 2. Using those variables you just created, log to the console such that the output looks something like this but use your own name and birth date:
// Hello, my name is Josh and I was born on 01/24/1988!

// ANSWER
console.log(
    'Hello, my name is ' + myName + ' and I was born on ' + myDOB + '!'
);

/*
3. console.log() the following statements to find out if they evaluate to true or false. Try to guess the output of each before you run the program.

'5' === 5

(5 > 4) && (6 > 7) 

(5 > 4) || (6 > 7) 

!('7' == 7)

*/
// ANSWERS:
console.log('5' === 5);
// output = false
console.log(5 > 4 && 6 > 7);
// output = false
console.log(5 > 4 || 6 > 7);
// output = true
console.log(15 !== 10);
// output = true
console.log(!('7' == 7));
// output = false

// 4. You want to build an IKEA table but need a screwdriver first. A screwdriver costs 10 money, which means you can buy it if your spending money is greater than or equal to the cost of the screwdriver. Create a variable spendingMoney to hold the value of your current spending money. Write an if statement that logs whether or not you can buy the screwdriver.
let spendingMoney = 15;

if (spendingMoney >= 10) {
    console.log('Buy that screwdriver.');
} else {
    console.log('Cannot buy screwdriver.');
}

// 5. Create a function that calculates the area of a square. Call that function inside a console.log() and run it in your terminal.
// Hint: remember area of a square = length * length
const areaOfSquare = length => {
    return length * length;
};

// 6. Building from the previous problem, create a for loop that calls your area of a square function inside passing your iterator variable as the argument. Running this should log to the console the area of squares with lengths 1 through 10.

for (let i = 1; i <= 10; i++) {
    console.log(areaOfSquare(i));
}

// 7. Now add an if statement inside of your for loop that makes it so that only squares with lengths greater than or equal to 8 are logged to the console.
for (let i = 1; i <= 10; i++) {
    if (i >= 8) {
        console.log(areaOfSquare(i));
    }
}
