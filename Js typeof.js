// In Js there are 5 diffrent types that contain values
//-- string
//-- number
//-- boolean
//-- object
//-- function

// There are 6 types of objects
//-- Object
//-- Date
//-- Array
//-- String
//-- Number
//-- Boolean

// And 2 date types that cannot contain values:
//-- null
//-- undefined

//----------------------------------------
// The typeof Operator: can be used to find the data type of Js variables
console.log(typeof 'John');
console.log(typeof 3.14);
console.log(typeof NaN);
console.log(typeof false);
console.log(typeof [1,2,3,4]);
console.log(typeof {name: 'John', age: '34'});
console.log(typeof new Date());
console.log(typeof function () {});
console.log(typeof myCar);
console.log(typeof null);

//----------------------------------------
// Primitive Data
// A primitive data value is a single simple data value with no additional properties and method
// The typeof operator can return one of these primitive types
//-- string
//-- number
//-- boolean
//-- undefined
console.log(typeof 'John');
console.log(typeof 3.14);
console.log(typeof NaN);
console.log(typeof false);
console.log(typeof x);

//----------------------------------------
// Complex Data: The typeof operator can return one of two complex types:
//-- function
//-- object
// The typeof operator returns 'object' for objects, arrays, and null.
// The typeof operator does not return 'object' for functions.
console.log(typeof {name: 'John', age: '34'});
console.log(typeof [1, 2, 3, 4]); // Returns 'object' (not 'array')
console.log(typeof null);
console.log(typeof function myFunc(){});

//----------------------------------------
// The Data Type of typeof: It is an operator. Operators (+-*/) do not have any data type.
// Rhe typeof operator always returns a string(containing the type of the operand)

//----------------------------------------
// The Constructor Property: returns the constructor function for all Js variables
console.log('John'.constructor);// returns function String() {[native code]}
console.log((3.14).constructor);// returns function Number() {[native code]}
console.log(false.constructor);// returns function Boolean() {[native code]}
console.log({name: 'John', age: 34}.constructor);// returns function Object() {[native code]}
console.log(new Date().constructor);// returns function Date() {[native code]}
console.log(function(){}.constructor);// returns function String() {[native code]}

// You can check the constructor property to find out if an object is an Array (contains the word 'Array'):
// function isArray(myArray) {
//     return myArray.constructor.toString().indexOf('Array') > -1
// }
// console.log(isArray);

// or even simpler, you can check if the object is an Array function:
function isArray(myArray) {
    return myArray.constructor === Array;
}
console.log(isArray);

// You can check the constructor property to find out if an object is a Date (contains the word 'Date'):
// function isDate(myDate) {
    // return myDate.constructor.toString().indexOf('Date') > -1
// }
// console.log(isDate);

// or even simpler, you can check if the object is a Date function:
function isDate(myDate) {
    return myDate.constructor === Date;
}
console.log(isDate);

//----------------------------------------
// Undefined: In Js, a variable without a value, has the value undefined. The type is also undefined
// let car;
// console.log(car); // Value is undefined, type is undefined

// Any variable can be emptied, by setting the value to undefined. The type will also be undefined
// car = undefined; // Value is undefined, type is undefined
// console.log(car);

//----------------------------------------
// Empty Values: has nothing to do with undefined.
// It has both a value and a type
let car = '';
console.log(car); // The value is '', the typeof is 'string'

//----------------------------------------
// Null: In Js, null is 'nothing'. It is supposed to be something that does not exist
// Unfortunately, in Js, the data type of null is an object
//-- You can consider it a bug in Js that typeof null is an object. It should be null
// You can empty an object by setting it to null:
// let person = {firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue'};
// person = null; // Now value is null, but type is still an object
// console.log(typeof person);

// You can empty an object by setting it to undefined
let person = {firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue'};
person = undefined; // Now both value and type is undefined
console.log(typeof person);

//----------------------------------------
// Difference between Undefined and Null
// undefined and null are equal in value but different in type