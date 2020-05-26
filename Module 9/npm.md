##### Quick Derail

NPM is a useful package manager that comes with new versions of Node. It allows developers to easily install and manage 3rd party packages- these can be utilities or entire web frameworks.

NPM works with a local file, called a `package.json`. This file is just a manifesto that includes the dependencies and version a certain project requires. 

While NPM is useful for a number of different things, like publishing you own packages or sharing custom packages with other collaborators, today we'll only cover two commands:

`npm init` for instantiating a new package.json,

and `npm install <package>` for installing a package.


###### Now, let's get to work:


Let's first open a new folder and create a new package.json. To do this:

1. We'll open our terminal
2. `cd ~` to go into root 
3. `mkdir http` to create a new folder called http
4. `npm init` to create a new package.json

We'll run through the steps here together.

Once we've finished, let's install axios.

1. `npm install axios` to install axios locally
2. `npm install axios -g` to install axios globally

To confirm axios is installed, we can look at our package.json and it should be listed under dependencies.
