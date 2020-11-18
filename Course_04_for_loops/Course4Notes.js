/* 
    1. environment setup
        a. NodeJS dist (Windoes vs Mac) 10
        b. VSCode
    2. 


*/

/*
	Loops!

	So far we have had to program every possibility we have wanted. Loops make it so that we can quickly generate many results.


*/

/*
	-------------------------------------------------------------------
	FOR LOOPS

	A For loop takes a range of values, and performs a set of instructions
	based on the parameters set by those values.

	The syntax is as follows:

	for(starting value; range of values; how to traverse range)
	{
		//do something
	}

	Follow along: For a value index = 0; i <= 25; i++, console log the value for i.

	for(index = 1; index <= 25; index++)
	{
		console.log(i);
	}
	-------------------------------------------------------------------

	TASK:

*/

/*
	-------------------------------------------------------------------
	DO WHILE LOOPS

	A while loop takes a condition, and while that loop is satisfied,
	the instructions will continue to run until the loop is no longer satisfied.

	IMPORTANT: Your while loop MUST contain a way to exit the loop, otherwise it will run indefinitely.

	The syntax is as follows:

	while(condition)
	{
		//do something
	}

	--Note that the loop is giving a return value of 30 as well.--
	-------------------------------------------------------------------
	
	TASK:

*/

/*HOMEWORK PROBLEMS

	For
	1. Iterate from 1 to 100. Print all numbers between 25 and 75 to the console.
	for(counter = 1; counter = 100; counter++)
	{
		if(let counter >= 25 && counter <=75)
		{
			console.log(counter);
		}
	}

	2. Iterate from 1 to 10. At each step, add the current value to an overall total value. After iteration, print the total value. 
	let total = 0
	for(let counter = 1; counter = 10; counter++)
	{
		total = total + counter;
	}
	console.log(total);
	
	Do While
	3. Start iterating from 1. For each iteration, add the current value to an overall total value. Once the total value is above 50, break from the loop.
	Print the current counter value as well as the total number value.
	
	let total = 0;
	let counter = 1;
	while(total <= 50)
	{
		total = total + counter;
		counter++;
	}

*/

/*
	-------------------------------------------------------------------
	Iteration

	So far, we have very carefully written out our code for precise examples.
	However, using the concept of iteration, we can perform complex processes 
	with small lines of code.

	Iteration is essentially performing a task or set of tasks until a condition has been satisfied.

	The two types of Iteration we will discuss:
	-For Loops
	-While Loops
	-------------------------------------------------------------------
*/

/*
	-------------------------------------------------------------------
	FOR LOOPS

	A For loop takes a range of values, and performs a set of instructions
	based on the parameters set by those values.

	The syntax is as follows:

	for(starting value; range of values; how to traverse range)
	{
		//do something
	}

	Follow along: For a value i = 0; i <= 25; i++, console log the value for i.

	for(i = 1; i <= 25; i++)
	{
		console.log(i);
	}
	-------------------------------------------------------------------
*/

/*
	-------------------------------------------------------------------
	WHILE LOOPS

	A while loop takes a condition, and while that loop is satisfied,
	the instructions will continue to run until the loop is no longer satisfied.

	IMPORTANT: Your while loop MUST contain a way to exit the loop, otherwise it will run indefinitely.

	The syntax is as follows:

	while(condition)
	{
		//do something
	}

	--Note that the loop is giving a return value of 30 as well.--
	-------------------------------------------------------------------
*/

/*
	-------------------------------------------------------------------
	Final Tasks:

	1: Declare a variable and a conditional statement such that when the 
	variable = your first name it is printed to the console.
	
	2: Use one of our two loops to print to the console the values 0 through 10.

	-------------------------------------------------------------------
*/
