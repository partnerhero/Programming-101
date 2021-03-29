### Quick Derail - NPM

Code projects almost always will rely on third-party, or custom code. You may want to import either a utility library, or just another package that already does something that would be too complex to write ourselves.

There are many ways to import code into our project, and those vary depending on the language and framework. Fortunately, Node has a super simple way to manage this, called **NPM - or Node Package Manager.**

NPM comes with new versions of Node, and allows developers to easily install and manage 3rd party packages- which can be utilities or entire web frameworks.

##### How does it work

NPM uses a local file, called a `package.json`. This file is just a manifesto that includes the dependencies and version a certain project requires.

While NPM is useful for a number of different things, like publishing you own packages or sharing custom packages with other collaborators, today we'll only cover two commands:

`npm init` for instantiating a new package.json,

and `npm install <package>` for installing a package.

###### Now, let's get to work:

Let's first open a new folder and create a new package.json. To do this:

1. We'll open our terminal
2. `cd` into your Github folder or wherever you want to store this project
3. `mkdir http` to create a new folder called http
4. `cd http` to move into your http folder
5. `npm init` to create a new package.json

We'll run through the steps here together.

Once we've finished, let's install our first dependency: axios.

`npm install axios` to install axios locally

To confirm axios is installed, we can look at our package.json and it should be listed under dependencies.

End of the course! Any questions?
