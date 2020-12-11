/*
	https://repl.it/languages/nodejs

	Review TASK:

	Follow these steps to write a function.
	1. Create a function with 2 parameters.
	2. Write a return statement that adds the 2 parameters together
	3. Call the function inside a console.log() and pass any 2 numbers in as argumentns.
	4. Run the program!

	Syntax:
	const functionName = (parameter1, parameter2) => {
		return something;
	}
*/

// Answer:
const add = (n1, n2) => {
    return n1 + n2;
};
console.log(add);

/*
	Loops!

	Quick Intro
*/

/*
	Increment Operators!

	We need to talk about increment operators before we get into loops
*/
let num = 1;
num = 2; // reassigns num
console.log(num); // output: 2

num = num + 1; // reassigns num and adds 1
console.log(num); // output: 3
// This is the same as:
num += 1;
console.log(num); // output: 4
// and
num++;
console.log(num); // output: 5

// same for -= and --
let int = 5;
int -= 2; // same as num = num - 2
console.log(int); // output: 3
int--;
console.log(int); // output: 2

/*
-------------------------------------------------------------------
	FOR LOOPS

	A For loop takes a range of values, and performs a set of instructions based on the parameters set by those values. For loops are a form of iteration.

	Basically, we tell the loop how to start, under what conditions it stops, and how it runs

	Syntax:
	for (starting value (iterator variable); range of values; how to traverse range) {
		do something here;
	}
-------------------------------------------------------------------
*/

// Follow along:
// For value let index = 0; index <= 10; index++, console log the value for index.
for (let index = 1; index <= 10; index++) {
    console.log(index);
}
// explain logic

// Example
for (let i = 0; i < 20; i += 2) {
    console.log(i);
}

// can be negative
for (let index = 0; index > -5; index--) {
    console.log(index);
}

// TASK 1:
// Create a for loop that iterates from 1 through 5 by 1, and logs the iterator variable to the console each time.
for (let i = 4; i <= 15; i++) {
    console.log(i);
}

// Work Together Problem:
// Let's try to ask/help the audience guide us through this problem:
// Create a for loop from 1 to 100, and log all numbers between 25 and 75 to the console.
for (let counter = 1; counter <= 100; counter++) {
    if (counter >= 25 && counter <= 75) {
        console.log(counter);
    }
}

// TASK 2:
/*	
For Loop
	Write a for loop to keep track of the total sales for your company over a week. You bring in 1 sale on your first day, and then your sales will increase by 1 more each day after that.

	DISCLAIMER: This may look complicated, but if you follow each individual step, you should get to the solution :)

		1. Create global variable totalSales and set it equal to 0

		2. Create a for loop with dailySales as your iterator variable starting at 1
		
		3. Your loop should run while dailySales is less than or equal to 7
		
		4. dailySales should increment by 1
		
		5. In your block of code, use an increment operator to reassign totalSales and have dailySales added to it 
		
		6. Below your for loop, log totalSales to the console
*/
let totalSales = 0;

for (let dailySales = 1; dailySales <= 7; dailySales++) {
    totalSales += dailySales;
}
console.log(totalSales);

/*
-------------------------------------------------------------------
	DO WHILE LOOPS

	A while loop takes a condition, and while the condition evaluates to true, the instructions will continue to run until the condition evaluates to false.

	IMPORTANT: Your while loop MUST contain a way to exit the loop, otherwise it will run indefinitely.

	Syntax:
	do {
		do something;
	} while (some condition evaluates to true);
-------------------------------------------------------------------
*/

// EXAMPLE 1:
// We want to buy a TV that costs 100 dollars. Right now we have 10 dollars in cash, but we get 5 dollars more every week. Let's write a while loop that that logs to the console our running total and stops when we have enough to buy the TV.
let cashBalance = 10;
let dailyCash = 5;
const costOfTV = 100;
do {
    cashBalance += dailyCash;
    console.log(cashBalance);
} while (cashBalance < costOfTV);

// TASK 3:
// You're making Chicken Biryani, which needs 5 cups of rice. Given this variable, write a do-while loop that increases the value of cupsAdded by 1 for each loop, while cupsAdded is less than 5.
// Give them this variable
let cupsAdded = 0; // starting with 0 cups

// Answer:
do {
    cupsAdded++;
} while (cupsAdded < 5);
// keep adding cups until condition is met
console.log(cupsAdded);

//------------------------------------------------------------------
