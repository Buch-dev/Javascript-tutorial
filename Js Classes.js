// Js Classes are templates for JS Objects

// Javascript Class Syntax: use the keyword 'class' to create a class
// Always add a method named constructor();
// class ClassName {
//     constructor() { ... }
// }

// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }

//-- A Js class is not an object. It is a template for Js Objects

//---------------------------------
// Using a Class: When you have a class, you can use the class to create objects:
// let myCar1 = new Car('Ford', 2014);
// let myCar2 = new Car('Audi', 2009);
// The exp above uses the Car class to create two Car objects
//-- The constructor method is called automatically when a new object is created

//---------------------------------
// The Constructor Method: is a special method
//-- It has to have the exact name 'constructor'
//-- It is executed automatically when a new object is created
//-- It is used to initialize object properties
// If you do not define a constructor method, Js will add an empty constructor method

//---------------------------------
// Class Methods: are created with the same syntax as object methods
// Javascript Class Syntax: use the keyword 'class' to create a class
// Always add a method named constructor();
// Then add any number of methods
// class ClassName {
//     constructor() {...}
//     method_1() {...}
//     method_2() {...}
//     method_3() {...}
// }

// Create a Class method named 'age', that returns the Car age:
// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     age() {
//         let date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// let myCar = new Car('Ford', 2014);
// document.getElementById('demo').innerHTML = `My car is ${myCar.age()} years`

// You can send parameters to Class methods:
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age(x) {
        return x - this.year
    }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car('Ford', 2017);
document.getElementById('demo').innerHTML = `My car is ${myCar.age(year)} years old.`;

// You will learn a lot more about Js Classes later in this tutorial