// Course 12 - Classes

// HW review
// Anyone want to share one of the objects they made from the homework? If not:
/*
    Your pet!

1. Create a pet object with name and age properties making sure to denote using the underscore (_) that they are not to be accessed directly.

2. Create getters for the name and age properties in your pet object and console.log each property.

3. Create a setter for the age property that allows you to reassign it.

4. Reassign the age property and then log the age property to the console again to make sure it worked.

5. Use the Object.keys() method on your pet object to store the keys of your object in a variable called petKeys. Log petKeys to the console.
*/

const pet = {
    _name: 'Parsley',
    _age: 4,
    get name() {
        return this._name;
    },
    get age() {
        return this._age;
    },
    set age(newAge) {
        this._age = newAge;
    },
};
pet.age = 6;
console.log(pet.age);

const petKeys = Object.keys(pet);
console.log(petKeys);

//----------------------------------------------------------------

// Classes are an easy way to create templates for creating objects. This is especially helpful when you want to create many similar objects.

// It should be known that classes within Javascript are not nearly as robust as classes in other programming languages. This lesson is merely to introduce you to the concept so you're familiar with the idea. We recommend reading some literature online to find out more details about why classes are lacking in Javascript.

// You run a daycare and need to keep track of the kids that are enrolled. You've been creating individual objects in Javascript to represent the children, but you've found out that classes can make this much easier for you.
// Individual Kid Objects:
const misty = {
    _name: 'Misty',
    _age: 4,
    _demerits: 0,
    get name() {
        return this._name;
    },
    get age() {
        return this._age;
    },
    get demerits() {
        return this._demerits;
    },
    giveDemerit() {
        this._demerits++;
    },
};

const ash = {
    _name: 'Ash',
    _age: 5,
    _demerits: 3,
    get name() {
        return this._name;
    },
    get age() {
        return this._age;
    },
    get demerits() {
        return this._demerits;
    },
    giveDemerit() {
        this._demerits++;
    },
};

// Sure I could copy, paste, and make small edits of the above for every new kid, but there's an easier way to create objects with similar properties.

// Note: capitalize class names, no commas
// constructor method is a special method used in classes for constructing objects. It takes parameters that you would want to pass when creating the object. In the block of the constructor is where we add the properties we want all of our objects to have.

// Here we create a Kid class template that we'll want to pass name and age as arguments when registering a new kid in the childcare.

// Talk through the logic of the constructor. (i.e. this._name = name mean when we create an ibject from this class it will give it a _name property key with a value of what we pass in as the argument)
class Kid {
    constructor(name, age) {
        this._name = name;
        this._age = age;
        this._demerits = 0; // default/initial value here no parameter passed
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get demerits() {
        return this._demerits;
    }
    giveDemerit() {
        this._demerits++;
    }
}

// This is just the template we've created, we need to create the kid objects still by calling the class.
const brock = new Kid('Brock', 5);
console.log(brock);
console.log(brock.name);

// Add a demerit for brock
brock.giveDemerit();
console.log(brock);

//----------------------------------------------------------------

// TASK 1
/*
1. Create a Student class with _name and _major properties that each take an argument.
2. Give it a _gradeLevel property with an initial value of 1.
3. Create getters for each of these properties.
4. Create a method to increase the grade level by 1 when called.
5. Create a student object by calling your newly created class!
*/
class Student {
    constructor(name, major) {
        this._name = name;
        this._major = major;
        this._gradeLevel = 1;
    }
    get name() {
        return this._name;
    }
    get major() {
        return this._major;
    }
    get gradeLevel() {
        return this._gradeLevel;
    }
    gradeLevelUp() {
        this._gradeLevel++;
    }
}

const daniel = new Student('Daniel', 'Lion taming');
console.log(daniel.major);

//----------------------------------------------------------------

// Parent and Child Classes
// Sometimes you'll want to create several different objects that are all similar but slightly different in some ways. In a case like this, you can use parent and child classes.

// Example: Imagine all the different employment positions available in a grocery store. Instead of creating independent and individual classes for each employment position, you can use parent and child classes to more easily organize incoming employees no matter what position they're hired for.

// Start with the main parent class. This class should contain properties that are common to all of the employees.
class Employee {
    constructor(name) {
        this._name = name;
        this._vacationDays = 18;
    }
    get name() {
        return this._name;
    }
    get vacationDays() {
        return this._vacationDays;
    }
    useVacation(days) {
        this._vacationDays -= days;
    }
}

// This Employee class is our parent class. You can look at this like a generic template from which we can create other templates to get more specific.

//----------------------------------------------------------------

// One example would be creating a class for a Deli employee who needs an additional food safety certification that other employees do not need. Let's create a child class and work through it.

// Syntax for creating a child class:
// extends keyword allows us to create the child class and inherit all the methods from the parent class

// constructor method begins the setup of properties like creating any other class

// Inside the constructor of the child class, the first thing we must use is the super method, otherwise we get an error. The super() method here calls the parent's constructor method and gets access to the parent's properties. Inside the super method goes the parameters from the parent class that will need to be passed.

// In this Deli class an additional parameter for food safety certification needs to be added, but only for a Deli employee. This is added inside the constructor of the child class below the super method.

// Since we added a new property (_safetyCertification), we need to add a getter for it as well below the constructor method

class Deli extends Employee {
    constructor(name, safetyCertification) {
        super(name);
        this._safetyCertification = safetyCertification;
    }
    get safetyCertification() {
        return this._safetyCertification;
    }
}

// Call this the same way as before:
const josh = new Deli('Josh', true);
console.log(josh.safetyCertification);

josh.useVacation(3);
console.log(josh.vacationDays);

//----------------------------------------------------------------

// TASK 2
// Paste the Employee class into the chat so the students can use it for this task.

/*
1. Create a Butcher class that extends from the Employee class, but add a boolean property that's entered as a parameter. This property should check whether the new butcher has passed the knife handling certification.
2. Once done, call the Butcher class to create a new Butcher employee object and then log the object to the console.
*/
class Butcher extends Employee {
    constructor(name, knifeHandlingCert) {
        super(name);
        this._knifeHandlingCert = knifeHandlingCert;
    }
    get knifeHandlingCert() {
        return this._knifeHandlingCert;
    }
}

const zach = new Butcher('Zach', true);
console.log(zach);

//----------------------------------------------------------------
// END OF COURSE
//----------------------------------------------------------------
