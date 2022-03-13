// ECMAScript 2015 (ES6)
// in 2015, Javascript introduced an important new keyword: const.
// It has become a common practice to declare arrays using const:
// const cars = ['Saab', 'Volvo', 'BMW'];

//--------------------------------------
// Cannot be Reassigned
// An array declared with const cannot be reassigned:
// const cars = ['Saab', 'Volvo', 'BMW'];
// cars = ['Toyota', 'Volvo', 'Audi'] // ERROR!

//--------------------------------------
// Elements can be Reassigned: You can change the elements of a constant array:
// const cars = ['Saab', 'Volvo', 'BMW'];  // You can create a constant array
// cars[0] = 'Toyota';  // You can change an element
// cars.push('Audi')  // You can add an element

//--------------------------------------
// Assigned when Declared: Js Const variables must be assigned a value when they are declared:
// Meaning: An arrays declared with const must be initialized when it is declared.
// Using const without initializing the array is a syntax error:
// This will not work:
// const cars;
// cars = ['Saab', 'Volvo', 'BMW'];
// console.log(cars);
// Arrays declared with var can be initialized at any time.
// You can even use the array before it is declared:
// This is OK:
// cars = ['Saab', 'Volvo', 'BMW'];
// var cars;
// console.log(cars);

//--------------------------------------
// Const Block Scope: an array declared with const has Block Scope.
// An array declared in a block is not the same as an array declared outside the block:
// const cars = ['Saab', 'Volvo', 'BMW'];
// // Here cars[0] is 'Saab'
// {
//     const cars = ['Toyota', 'Volvo', 'BMW'];
//     // Here cars[0] is 'Toyota'
// }
// // Here cars[0] is 'Saab'

// An array declared with var does not have block scope:
// var cars = ['Saab', 'Volvo', 'BMW'];
// Here cars[0] is 'Saab'
{
    // var cars = ['Toyota', 'Volvo', 'BMW'];
    // Here cars[0] is 'Toyota'
}
// Here cars[0] is 'Toyota'

//--------------------------------------
// Redeclaring Arrays: Redeclaring an array declared with var is allowed anywhere in a program:
// var cars = ['Volvo', 'BMW']; // Allowed
// console.log(cars);
// var cars = ['Toyota', 'BMW']; // Allowed
// console.log(cars);
// cars = ['Volvo', 'Saab']; // Allowed
// console.log(cars);

// Redeclaring or reassigning an array to const, in the same scope, or in the same block, is not allowed:
// var cars = ['Volvo', 'BMW']; // Allowed
// const cars = ['Volvo', 'BMW']; // Not Allowed
// console.log(cars);
{
    // var cars = ['Volvo', 'BMW']; // Allowed
    // const cars = ['Volvo', 'BMW']; // Not Allowed
    // console.log(cars); 
}
// Redclaring or reassigning an existing const array, in the same scope, or in the same block, is not allowed:
// const cars = ['Volvo', 'BMW']; // Allowed
// const cars = ['Volvo', 'BMW']; // Not Allowed
// console.log(cars);
// var cars = ['Volvo', 'BMW']; // Not Allowed
// cars = ['Volvo', 'BMW']; // Not Allowed
{
    // const cars = ['Volvo', 'BMW']; // Allowed
    // const cars = ['Volvo', 'BMW']; // Not Allowed
    // console.log(cars);
    // var cars = ['Volvo', 'BMW']; // Not Allowed
    // cars = ['Volvo', 'BMW']; // Not Allowed
}
// Redeclaring an array with const, in another scope, or in another block, is allowed:
const cars = ['Volvo', 'BMW']; // Allowed
console.log(cars);
{
    const cars = ['Volvo', 'BMW']; // Allowed
    console.log(cars);
}
{
    const cars = ['Volvo', 'BMW']; // Allowed
    console.log(cars);
}