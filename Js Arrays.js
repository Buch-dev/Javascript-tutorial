// Javascript Arrays are used to store multiple values in a single variable
// const cars = ['Saab', 'Volvo', 'BMW'];
// console.log(cars);
// ||
// const cars = [];
// cars[0] = 'Saab';
// cars[1] = 'Volvo';
// cars[2] = 'BMW';
// console.log(cars);
//--------------------------------
// Accessing Array Elements: you access an array element by referring to the index number
// const cars = ['Saab', 'Volvo', 'BMW'];
// let x = cars[0];
// console.log(x);
//--------------------------------
// Changing an Array Element: The statement changes the value of the first element in 'cars':
// cars[0] = 'Opel';
// console.log(cars[0]);
//--------------------------------
// Access the Full Array: With Javascript, the full array can be accessed by referring to the array name
// const cars = ['Saab', 'Volvo', 'BMW'];
// document.getElementById('demo').innerHTML = cars;
//--------------------------------
// Array are objects: Arrays are special type of objects. But Javascript arrays are best described as arrays
// Arrays use numbers to access its 'elements'. In this example, person[0] returns John:
// const person = ['John', 'Doe', 46];
// console.log(person[0]); 
// Objects use names to access its 'members'. In this example, person.firstName returns John:
// const person = {firstName: 'John', lastName: 'Doe', age:46};
// console.log(person.firstName);
//--------------------------------
// Array Elements can be Objects: Javascript variables can be objects. Arrays are special kinds of objects.
// Because of this, you can have variables of different types in the same Array
// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;
//--------------------------------
// Array Properties and Methods
// The length Property: returns the length of an array(the number of array elements)
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(fruits[fruits.length - 1]); // Accessing the last Array lement
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(fruits[0]); // Accessing the first Array lement
//--------------------------------
// Looping Array Elements: The safest way to loop through an array, is using a 'for' loop:
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// let fLen = fruits.length;

// text = '<ul>';
// for (let i = 0; i < fLen; i++) {
//     text += '<li>' + fruits[i] + '</li>';
    
// }
// text += '</ul>';
// console.log(text);
// document.getElementById('demo').innerHTML = text;

// You can also use the 'Array.forEach()' function:
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// let text = '<ul>';
// fruits.forEach(myFunction);
// text += '</ul>';

// function myFunction(value) {
    // text += '<li>' + value + '</li>';
// }
// console.log(text);
// document.getElementById('demo').innerHTML = text;
//--------------------------------
// Adding Array Elements: The easiest way to add a new element to an array is using the 'push()' method:
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// fruits.push('Lemon');
// console.log(fruits);
// document.getElementById('demo').innerHTML = fruits;

// New element can also be added using the 'length' property:
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// fruits[fruits.length] = 'Lemon';
// console.log(fruits);

// WARNING!!! Adding elements with high indexes can create undefined 'holes' in an array:
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// fruits[6] = 'Lemon';
// console.log(fruits);
// document.getElementById('demo').innerHTML = fruits;
//--------------------------------
// Associative Arrays: Many programming languages support arrays with named indexes.
// Arrays with named indexes are called associative arrays (or Hashes).
// Javascript does not support arrays with named indexes.
// In Javascript, arrays always use numbered indexes.
// const person = [];
// person[0] = 'John';
// person[1] = 'Doe';
// person[2] = '46';
// console.log(person.length);
// console.log(person[0]);

// WARNING!!! If you use named indexes, Javascript will redefine the array to an object.
// After that, some array methods and properties will produce incorrect results.
const person = [];
person['firstName'] = 'John';
person['lastName'] = 'Doe';
person['age'] = '46';
console.log(person.length);
console.log(person[0]);

//--------------------------------
// The difference between Arrays and Objects:
// In Javascript, arrays use numbered indexes.
// In Javascript, objects use named indexes.
// -- Arrays a special kind of objects, with numbered indexes. --

//--------------------------------
// Javascript new Array()
// Javascript as a built in array constructor 'new Array()'.
// But you can safetly use [] instead.
// These two different statements both create a new empty array named points:
// const points = new Array();
// console.log(points);
// const points = [];
// console.log(points);

// These two different statements both create a new array containing 6 numbers:
// const points = new Array(40, 100, 1, 5, 25, 10);
// console.log(points);
// const points = [40, 100, 1, 5, 25, 10];
// console.log(points);

// The 'new' keyword can produce some unexpected results:
// const points = new Array(40, 100, 1); // Create an array with three elements
// console.log(points);
// const points = new Array(40, 100); // Create an array with two elements
// console.log(points);
// const points = new Array(40); // Create an array with one elements ???
// console.log(points);

// A Common Error
const points = [40]; // Create an array with one element
console.log(points);
// is not the same as:
// const points = new Array(40); // Create an array with 40 udefined elements

//--------------------------------
// How to Recognize an Array
// Solution 1: ECMAScript 5 defines a new method 'Array.isArray()';
console.log(Array.isArray(points));

// Solution 2: The 'instanceof' operator returns true if an object is created by a given constructor:
const fruits = ['Banana', 'Orange', 'Apple'];
console.log(fruits instanceof Array);