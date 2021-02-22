// Course 12 Homework - Classes

// Notes for example:
// Parent class
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

// Child class
class Deli extends Employee {
    constructor(name, safetyCertification) {
        super(name);
        this._safetyCertification = safetyCertification;
    }
    get safetyCertification() {
        return this._safetyCertification;
    }
}

// Call the class to create an object:
const josh = new Deli('Josh', true);
console.log(josh);

josh.useVacation(3);
console.log(josh.vacationDays);

/*
Homework!

You own a car dealership and need to organize incoming inventory, so you decide to use what you learned from the amazing Programming 101 classes course to do that.

1. Create a parent class Automobile with make, model, and miles as properties whose values come from parameters. Make sure to create getters for each of these properties. Create a method to start the car that logs 'starting car' to the console.

2. Create a Truck child class of the Automobile class that also includes bed length and towing capacity.

3. Create a Sedan child class of the Automobile class that also includes a leather property (boolean) and trunk space.

4. Once done, create a new truck object and two new sedan objects using your classes.
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
