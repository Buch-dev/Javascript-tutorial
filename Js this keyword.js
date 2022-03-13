// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     id: 5566,
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// console.log(person.fullName);

// What is 'this'? The Js this keyword refers to the object it belongs to. It has different values depending on where it is used:
// In a method, this refers to the owner object
// Alone, this refers to the global object
// In a function, this refers to the global object
// In a function, in strict mode, this is undefined
// In an event, this refers to the elemnt that received the event
// Methods like call(), and apply() can refer this to any object

//-------------------------------------------
// this in a Method: In an object method, this refers to the 'owner' of the method.
// In the example on the top of this page, 'this' refers to the person object
// The person object is the owner of the fullName method
// fullName: function() {
    // return `${this.firstName} ${this.lastName}`;
// }

//-------------------------------------------
// this Alone: When used alone, the owner is the Global object, so 'this' refers to the Global object.
// In a browser window the Global object is: [object Window]:
// let x = this;
// console.log(x);
// In strict mode, when used alone, 'this' also refers to the Global object [object Window]:
// 'use strict';
// let x = this;
// console.log(x);

//-------------------------------------------
// this in a Function (Default): In a Js function, the owner of the function is the default binding for 'this'.
// So, in a function, 'this' refers to the Global object [object Window].
// function myFunction() {
//     alert(this);
// }

// myFunction();

//-------------------------------------------
// this in a Function (Strict): Js strict mode does not allow default binding
// So, when used in a strict mode, 'this' is 'undefined'
'use strict';
function myFunction() {
    return this;
}

console.log(myFunction());

//-------------------------------------------
// this in Event Handlers: in HTML Event Handlers, 'this' refers to the HTML element that received the event:
{/* <button type="button" onclick="this.style.display='none'">Click to Remove Me!</button> */}

//-------------------------------------------
// Object Method Binding: In these examples, 'this' is the person object (The person object is the 'owner' of the function):
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     id: 5566,
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     id: 5566,
//     fullName: function() {
//         return this;
//     }
// };

// console.log(person);

//-------------------------------------------
// Explicit Function Binding: The call() and apply() methods are predefined Js methods
// They can both be used to call an object method with another object as argument
// In the exp below, when calling person1.fullName with person2 as argument, 'this' will refer to person2, even if it is a method of person1:
const person1 = {
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}
const person2 = {
    firstName: 'John',
    lastName: 'Doe'
}
console.log(person1.fullName.call(person2));