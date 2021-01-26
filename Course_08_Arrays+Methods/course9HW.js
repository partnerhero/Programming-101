//COURSE 8 HOMEWORK PROBLEMS

//1. Given the following array: const tennisPlayers = ['Rafael Nadal', 'Roger Federer', 'Serena Williams', 'Andy Murray'];
//a. What will the output of console.log(tennisPlayers.length) be? Run it and see if you're right!
//b. What will the output of console.log(tennisPlayers.indexOf('Roger Federer')) be? Run it and see if you're right!
//c. What will the output of console.log(tennisPlayers.indexOf('Andre Agassi')) be? Run it and see if you're right!
//a - 4, b - 1, c - -1

//2. Write an array of your 3 favorite movies. Use the pop method to remove the last movie in the array. Use the push method twice to add 2 additional movies to the array. Console.log the array.

const faveMovies = ['The Room', 'Parasite', 'Avengers'];
faveMovies.pop();
faveMovies.push('Inception');
faveMovies.push('Scarface');
console.log(faveMovies);

//3. You work for a life insurance company. Customers over 55 are eligible for a discount. Given the following array of customer ages, use the filter method to note which ages are >= 55.
//const customerAges = [32, 47, 63, 55, 51, 59, 74, 41, 66];

const customerAges = [32, 47, 63, 55, 51, 59, 74, 41, 66];
const eligibleCustomers = customerAges.filter(age => age >= 55);
console.log(eligibleCustomers);

//4. Let's revisit this prompt from last HW: "Using the array: const hobbies = ['playing video games', 'snorkeling', 'rock climbing', 'playing piano'], write a for loop that iterates through the array and prints "<hobby> is fun to do!" for each hobby in the array."
//We want to accomplish the same thing, but now using the foreach method instead of a for loop.

const hobbies = [
    'playing video games',
    'snorkeling',
    'rock climbing',
    'playing piano',
];
hobbies.forEach(element => console.log(element + ' is fun to do!'));
