// Classes
// Classes are an easy way to create templates for creating objects. This is especially helpful when you want to create many similar objects.
// It should be known that classes within Javascript are not nearly as robust as classes in other programming languages. This lesson is merely to introduce you to the concept so you're familiar with the idea. We recommend reading some literature online to find out more details about why classes arelacking in Javascript.

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

// Sure I can copy, paste, and make small edits of the above for every kid, but there's an easier way.
// We can create a template called a class
class Kid {
    // capitalize your class names!
    constructor(name, age) {
        this._name = name;
        this._age = age;
        this._demerits = 0;
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

// This is just the template we've created, we need to create the kids still by instanciating an object:
const brock = new Kid('Brock', 5);
console.log(brock);
console.log(brock.name);

// Add a demerit for brock
brock.giveDemerit();
console.log(brock);

// TASK
// Create a student class with a name, major, and grade level with an initial value of 1. Create getters for each property and a method to increase the grade level by 1 when called. Then instantiate a student object using your newly created class!
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

// Parent and Child Classes
// Sometimes you'll want to create several different objects that are all similar, but slightly different in some ways. In a case like this, you can use parent classes and child classes.

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

// Let's call this the parent class. You can look at this like a generic template from which we can get more specific.

// We have a service deli employee. We can create a deli class from the Employee class and add a property to represent whether they've passed a food safetly certification. This certification is not required for every employee, which is why we'll put in on this class:
class Deli extends Employee {
    constructor(name, safetyCertification) {
        super(name); // Super keyword must be the first line in your constructor
        this._safetyCertification = safetyCertification;
    }

    get safetyCertification() {
        return this._safetyCertification;
    }
}

// extends keyword makes the getters and methods of the Employee class available inside the Deli class.
// The super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Deli class to the constructor of the Employee class. When the Employee constructor runs, it sets this._name = name; for new Deli instances.
// Make sure to use super() on the first line of your constructor
// _safetyCertification is a new property that is unique to the Deli class, so we set it in the Deli constructor.

// Call this the same way as before:
const david = new Deli('David', true);
console.log(david.safetyCertification);
david.useVacation(3);
console.log(david.vacationDays);

// TASK!
// Create a Butcher class that extends from Employee class, but add a boolean property that's entered as a paramter. This property should check whether the new butcher has passed the knife handling certification. Once done, call the Butcher class.
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

// Static Methods
// Sometimes you will want a class to have methods that aren’t available in individual instances, but that you can call directly from the class.

/* Syntax for static methods

static generateIDNumber() {
    return Math.floor(Math.random() * 100000);
}

const eid = Employee.generateIDNumber();
console.log(eid);

*/

//-------------------------------------------------------------------------------

// HOMEWORK
/*
You own a car dealership and need to organize incoming inventory, so you decide to use what you learned from the amazing Programming 101 classes course to do that.

1. Create a parent class Automobile with make, model, and miles as properties whose values come from parameters. Make sure to create getters for each of these properties. Create a method to start the car that logs 'starting car' to the console.

2. Create a Truck subclass of the Automobile class that also includes bed length in feet and towing capacity in tons.

3. Create a Sedan subclass of the Automobile class that also includes a leather property (boolean) and trunk space in cubic feet.

4. Once done, create a new truck object and a new sedan object using your classes.

*/

class Automobile {
    constructor(make, model, miles) {
        this._make = make;
        this._model = model;
        this._miles = miles;
    }

    get make() {
        return this._make;
    }

    get model() {
        return this._model;
    }

    get miles() {
        return this._miles;
    }

    startCar() {
        console.log('starting car');
    }
}

class Truck extends Automobile {
    constructor(make, model, miles, bedLength, towingCap) {
        super(make, model, miles);
        this._bedLength = bedLength;
        this._towingCap = towingCap;
    }

    get bedLength() {
        return this._bedLength;
    }

    get towingCap() {
        return this._towingCap;
    }
}

class Sedan extends Automobile {
    constructor(make, model, miles, leather, trunkSpace) {
        super(make, model, miles);
        this._leather = leather;
        this._trunkSpace = trunkSpace;
    }

    get leather() {
        return this._leather;
    }

    get trunkSpace() {
        return this._trunkSpace;
    }
}

const truck1 = new Truck('Ford', 'Ranger', 130000, 5, 3);
console.log(truck1);

const sedan1 = new Sedan('Toyota', 'Avalon', 160000, false, 15);
console.log(sedan1);
