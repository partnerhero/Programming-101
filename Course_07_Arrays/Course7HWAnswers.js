//COURSE 7 HW PROBLEMS AND ANSWERS

// 1. Create an array that lists your 3 favorite foods. Log this array to the console.

const foods = ['chicken tendies', 'chicken fingies', 'chicken nuggies'];

console.log(foods);

/*
2. Given the following array: const states = ['ID', 'CA', 'FL', 'TX', 'ND'], predict the following output, then check to see if you're right!
    a. console.log(states[0])
    b. console.log(states)
    c. console.log(states[5])
*/

// a = 'ID', b = ['ID', 'CA', 'FL', 'TX', 'ND', c = error

/*
3. Look at the following code:
const hobbies = ['playing video games', 'snorkeling', 'rock climbing', 'playing piano'];
hobbies[0] = hobbies[3];
hobbies[3] = 'cooking';
hobbies[4] = 'watching movies';
console.log(hobbies);

What will the output be in the console? Check to see if you're right!

// Answer: ['playing piano', 'snorkeling', 'rock climbing', 'cooking', 'watching movies']
*/

// 4. a. What is the length of this array?: const bands = ['Radiohead', 'The Beatles', 'Red Hot Chili Peppers'];
// b. At what index of the array is 'Red Hot Chili Peppers' located?

// 5. Using the original array in question 3 (const hobbies = ['playing video games', 'snorkeling', 'rock climbing', 'playing piano']), write a for loop that iterates through the array and prints "<hobby> is fun to do!" for each hobby in the array.

const hobbies = [
    'playing video games',
    'snorkeling',
    'rock climbing',
    'playing piano',
];

for (i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i] + ' is fun to do!');
}
