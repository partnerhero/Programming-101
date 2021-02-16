/*

You are the casting director for a brand new show tasked with finding the perfect trio of actors to play the roles of parent, child, and grandparent. Chemistry is very important, so you need the perfect combo. You decide to write a program that randomly generates combinations of 3 actors so as to not have to manually go through all of the available combinations.
Each role has its own pool of actors that you will eventually create yourself once your program is built.

Steps:
1. Create an empty object named cast.

2. Add a _roles property to your cast object and set its value to an empty object. This property will eventually help map each role to the actors available in the pool.

3. Create three properties inside the _roles object called parent, child, and grandparent. Each of these properties should be an empty array.

4. Create a getter method for the _roles property.

5. In the cast object, create getter methods for the parent, child, and grandparent properties.

6. In the cast object, create setter methods for the parent, child, and grandparent properties.

7. In the cast object, create a method called addActorToRole() that takes three parameters: roleName, actorName, actorCost. This method will be used to to add a new actor to their respective role in the cast.

8. Make it so that your addActorToRole() method creates an object called actor with a name property and a cost property that get their values from the parameters. Then add a return statement that pushes the actor object you just created into the correct property in your roles object based on what roleName is passed into the method.
HINT: You will need to use bracket [] notation to access the parameter in your return statement instead of dot notation.
EX: methodName(param1, param2) {
  return this.property[param1].push(something);
}

9. We need another method that allows us to get a random actor from the pool of available actors, which will be necessary for generating a random trio. Create a method inside the cast object called getRandomActorFromPool() that takes one parameter called roleName.

10. Stuff gets a litte crazy here.
Inside this method you need to create a variable called actors that is equal to a property of roles depending on what roleName is passed into this method.
Then, inside this method, create another variable called randomIndex that generates a random number to represent the index of an actor from the actors array you just created, but you'll need to make sure the random number is between 0 and the length of the array.
(To generate a random number in Javascript, there are a couple functions at your disposal. The Math.random() generates a random number between 0 and 1. This can be multiplied by the length of an array then rounded down to a whole number using the Math.floor() function like this: Math.floor(Math.random() * someLength). Make sure to capitalize the M in Math.)
The last thing you'll do in this method is add a statement that returns the actor located at that index in actors.

11. Now that we have a way to pull a random actor from a pool, create a generateRandomTrio() method that will automatically generate a trio of actors to fill the roles. This method has no parameters.
Create a variable named parent that is result of calling the getRandomActorFromPool() method when we pass in parent as a string to it.
Create two more variables in the same way named child and grandparent.
Create a variable totalCost that calculates the total cost of the three actors.
Add a statment that returns a message containing the name of each of the actors and totalCost.

12. Now that you finished your cast object, you can use it to create your cast trios! You need to add some actors for each role using the addActorToRole() method. Add as many per role as you like.

13. Once you have actors in your actor pool, you can generate a trio by using the generateRandomTrio() method and saving it to a variable trio. Log trio to the console and run your program. Each time you run it, you should see the random combination of cast members filling their roles.

*/

const cast = {
    _roles: {
        parent: [],
        child: [],
        grandparent: [],
    },
    get roles() {
        return this._roles;
    },
    get parent() {
        return this._roles.parent;
    },
    get child() {
        return this._roles.child;
    },
    get grandparent() {
        return this._roles.grandparent;
    },
    set parent(parentActor) {
        this._roles.parent = parentActor;
    },
    set child(childActor) {
        this._roles.child = childActor;
    },
    set grandparent(grandparentActor) {
        this._roles.grandparent = grandparentActor;
    },
    addActorToRole(roleName, actorName, actorCost) {
        const actor = {
            name: actorName,
            cost: actorCost,
        };
        return this.roles[roleName].push(actor);
    },
    getRandomActorFromPool(roleName) {
        const actors = this.roles[roleName];
        const randomIndex = Math.floor(Math.random() * actors.length);
        return actors[randomIndex];
    },
    generateRandomTrio() {
        const parent = this.getRandomActorFromPool('parent');
        const child = this.getRandomActorFromPool('child');
        const grandparent = this.getRandomActorFromPool('grandparent');
        const totalCost = parent.cost + child.cost + grandparent.cost;
        return `Your trio is ${parent.name} as the parent, ${child.name} as the child, and ${grandparent.name} as the grandparent. This will cost you $${totalCost}`;
    },
};

cast.addActorToRole('parent', 'David Blaine', 150);
cast.addActorToRole('parent', 'Sissy Spacek', 90);
cast.addActorToRole('parent', "Johnny Cash's corpse", 0.5);
cast.addActorToRole('parent', 'A Dog', 1000);
cast.addActorToRole('parent', 'Skrillex', 5000);

cast.addActorToRole('child', 'Sissy Spacek', 25);
cast.addActorToRole('child', 'The Beebs', 700);
cast.addActorToRole('child', 'Corey Feldman', 6);
cast.addActorToRole('child', 'John Heder', 100);
cast.addActorToRole('child', 'Gary Coleman', 10);

cast.addActorToRole('grandparent', 'Rick Astley', 666);
cast.addActorToRole('grandparent', 'Wilson', 100000);
cast.addActorToRole('grandparent', 'Morgan Freeman', 3000);
cast.addActorToRole('grandparent', 'Seabiscuit', 2000);
cast.addActorToRole('grandparent', 'Sissy Spacek', 15);

const trio = cast.generateRandomTrio();
console.log(trio);
