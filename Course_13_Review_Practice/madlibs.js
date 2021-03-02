/*

You're a mad libs expert and decide to create your own hilarious mad lib generating program. Essentially this program will have you cast "actors" into three different roles (parent, child, grandparent) for a tv show and then generate a random trio everytime you run it. You can pick anything or anyone you want to play these roles and the program will combine them for you as well as show you their total cost.

The end goal of this project is to have you come up with random "actors" and which role they will fill, then the program will randomly place them together for you.

Steps:
1. The first thing we want to do is store our program in an object, so create an object named cast.

2. Our cast object is made up of the roles we're going to fill, so add a nested _roles object to your cast object. This object will eventually help map each role to the actors you placed in the pool of available actors.

3. Inside the nested _roles object we want to store the specific roles the actors will play as properties. Create parent, child, and grandparent properties inside the _roles object and set their values equal to empty arrays. These will be used to store the actors' names being pushed to each role. HINT: To create an empty array, simply use brackets like this: [].

4. Create a getter method for the _roles property named roles.

5. We want to be able to easily access the properties inside the _roles nested object, so create getter methods for the parent, child, and grandparent properties and name them parent, child, and grandparent.

6. We want to be able to easily and securely reassign the values of the parent, child, and grandparent properties, so create setter methods for the parent, child, and grandparent properties. EXAMPLE:
set parent(parentActor) {
    this._roles.parent = parentActor;
},

7. Now we need a way for our program to add an actor to a role, so create a method called addActorToRole() that takes three parameters: roleName, actorName, actorCost. This method will be used later to add a new actor to their respective role in the cast.

8. Basically, what we want this method to do is let us pass in the role name, the actor we want added to that role, and the cost of hiring that actor, store that info in a simple object, then push it to the empty array that matches the roleName. Inside the method, create a simple object named actor with two properties: name and cost. Each of these should get their values from the parameters (actorName and actorCost). Last we need to push this actor object to one of the roles, so add a return statement that pushes the actor object to the respective role property passed from roleName. (i.e. if you pass 'parent' as the roleName, is should be pushed to the parent property in the roles nested object)
HINT: In an object, to access parameters from within a method's block of code, you will need to use bracket [] notation instead of dot notation.
EXAMPLE:
const obj = {
    property: {
        parent: [];
    },
    methodName(param1, param2) {
        return this.property[param1].push(something);
    },
}

9. We need another method that allows us to get a random actor from the pool of available actors, which will be necessary for generating a random trio. Create a method inside the cast object called getRandomActorFromPool() that takes one parameter called roleName.

10. Stuff gets a litte crazy here.
Inside this method you need to create a variable called actors that is equal to one of the propertoes in the roles nested object depending on what roleName is passed into this method. Again, use bracket notation to access the method's parameter.

Then, inside this method, create another variable called randomIndex that generates a random number to represent the index of an actor from the actors array you just created, but you'll need to make sure the random number is between 0 and the length of the array.
(To generate a random number in Javascript, there are a couple functions at your disposal. The Math.random() generates a random number between 0 and 1. This can be multiplied by the length of an array then rounded down to a whole number using the Math.floor() function like this: Math.floor(Math.random() * someLength). Make sure to capitalize the M in Math.)

The last thing you'll do in this method is add a statement that returns the actor located at that index in actors. Basically this is utilizing the two variables you just created.

11. Now that we have a way to pull a random actor from a pool, create a generateRandomTrio() method that will automatically generate a trio of actors to fill the roles. This method has no parameters.

Create a variable named parent that is result of calling the getRandomActorFromPool() method when we pass in 'parent' as a string to it.
Create two more variables in the same way named child and grandparent.

Create a variable totalCost that calculates the total cost of the three actors.
Add a statment that returns a message containing the name of each of the actors and totalCost.

12. Now that you finished your cast object, you can use it to create your madlib trio cast! You need to add some "actors" for each role using the addActorToRole() method. Add as many per role as you like. Remember, when calling the method, pass the role, actor name, and the cost. Be creative here! Actors could be a banana, or a swift arrow. Cost could be one index finger, or 10 kW. Go wild!

13. Once you have actors in your actor pool, you can generate a trio by using the generateRandomTrio() method and saving it to a variable trio. Log trio to the console and run your program. Each time you run it, you should see the random combination of cast members filling their roles and the total cost!

*/
