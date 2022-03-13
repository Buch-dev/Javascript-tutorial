// Array iteration methods operate on every item

// Array.forEach(): methods calls a function (a callback function) once for each array element.
// const numbers = [45, 4, 9, 16, 25];
// let txt = '';
// console.log(numbers.forEach(myFunction));

// function myFunction(value, index, array) {
//     txt += value + '<br>';
// }
// The example above uses only the value parameter. The example can be rewritten to:
// const numbers = [45, 4, 9, 16, 25];
// let txt = " ";
// numbers.forEach(myFunction);

// function myFunction(value) {
//     txt += value + "<br>";
// }

// console.log(txt);

//--------------------------------------
//Array.map():method creates a new array by performing a function on each array element
// The method does not execute the function for array elements without values
// The method does not change the original array
// This example multiplies each array value by 2:
// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//     return value * 2;
// }
// console.log(numbers2);


// The function takes 3 arguments:
//- The item value
//- The item index
//- The array itself

// When a callback function uses only the value parameter, the index and array parameters can be omitted
// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value) {
//     return value * 2;
// }
// console.log(numbers2);

//--------------------------------------
// Array.filter(): methods creates a new array with array elements that passes a test
// The exp creates a new array from elements with a value larger than 18:
// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//     return value > 18;
// };

// console.log(over18);

// If the callback function does not use the index and array parameters, they can be omitted:
// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value) {
//     return value > 18;
// };

// console.log(over18);

//--------------------------------------
// Array.reduce(): method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array.
// -- The reduce() method does not reduce the original array
// This exp finds the sum of all numbers in an array:
// const numbers = [45, 4, 9, 16, 25];
// const sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//     return total + value
// }

// console.log(sum);
// Note that the function above takes 4 arguments:
//-- The total (the initial value/previously returned value)
//-- The item value
//-- The item index
//-- The array index
// The exp above does not use the index and array parameters. It can be rewritten to:
// const numbers = [45, 4, 9, 16, 25];
// const sum = numbers.reduce(myFunction);

// function myFunction(total, value) {
//     return total + value
// }

// console.log(sum);

// The reduce() method can accept an initial value:
// const numbers = [45, 4, 9, 16, 25];
// const sum = numbers.reduce(myFunction, 100);

// function myFunction(total, value) {
//     return total + value
// }

// console.log(sum);

//--------------------------------------
// Array.reduceRight(): method runs a function on each array element to produce (reduce it to) a single value.
// The reduceRight() works form right-to-left in the array
// This example finds the sum of all numbers in an array:
// const numbers = [45, 4, 9, 16, 25];
// const sum = numbers.reduceRight(myFunction);

// function myFunction(total, value, index, array) {
//     return total + value
// }

// console.log(sum);
// Note that the function above takes 4 arguments:
//-- The total (the initial value/previously returned value)
//-- The item value
//-- The item index
//-- The array index
// The exp above does not use the index and array parameters. It can be rewritten to:
// const numbers = [45, 4, 9, 16, 25];
// const sum = numbers.reduceRight(myFunction);

// function myFunction(total, value) {
//     return total + value
// }

// console.log(sum);

//--------------------------------------
// Array.every(): method check if all array values pass a test.
// This exp check if all array values are larger than 18:
// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(myFunction);

// function myFunction(value, index, array) {
//     return value > 18;
// }

// console.log(allOver18);
// Note that the function above takes 3 arguments:
//-- The item value
//-- The item index
//-- The array index
// When a callback function uses the first parameter only (value), the other parameters can be omitted:
// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(myFunction);

// function myFunction(value) {
//     return value > 18;
// }

// console.log(allOver18);

//--------------------------------------
// Array.some(): method check if some array values pass a test.
// This exp check if some array values are larger than 18:
// const numbers = [45, 4, 9, 16, 25];
// let someOver18 = numbers.some(myFunction);

// function myFunction(value, index, array) {
//     return value > 18;
// }

// console.log(someOver18);
// Note that the function above takes 3 arguments:
//-- The item value
//-- The item index
//-- The array index

//--------------------------------------
// Array.indexOf(): method searches an array for an element value and returns its position
// const fruits = ['Apple', 'Orange', 'Apple', 'Mango'];
// let position = fruits.indexOf('Apple') + 1;

// console.log(position);
// Array.indexOf() returns -1 if the item is not found.
// If the item is present more than once, it returns the position of the first occurrence.

//--------------------------------------
// Array.lastIndexOf(): is thesame as Array.indexOf(), but returns the position of the last occurrence of the specified element.
// Search an array for the item 'Apple':
// const fruits = ['Apple', 'Orange', 'Apple', 'Mango'];
// let position = fruits.lastIndexOf('Apple') + 1;

// console.log(position);

//--------------------------------------
// Array.includes(): Helps to check if an element is present in array (including NaN, unlike indexOf).
// const fruits = ['Apple', 'Orange', 'Apple', 'Mango'];
// fruits.includes('Mango');

//--------------------------------------
// Array.find(): method returns the value of the first array element that passes a test function.
// This example finds (returns the value of) the first element that is larger than 18:
// const numbers = [45, 4, 9, 16, 25];
// let first = numbers.find(myFunction);

// function myFunction(value, index, array) {
//     return value > 18;
// }

// console.log(first);
// Note that the function above takes 3 arguments:
//-- The item value
//-- The item index
//-- The array index

//--------------------------------------
// Array.findIndex(): methods returns the index of the first array element that passes a test function.
// This example finds the index of the first element that is larger than 18:
const numbers = [45, 4, 9, 16, 25];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

console.log(first);
// Note that the function above takes 3 arguments:
//-- The item value
//-- The item index
//-- The array index

//--------------------------------------
// Array.from(): methods returns an Array object from any object with a lenght property or any iterable object
// Create an Array from a string:
const array = Array.from('ABCDEFG');
console.log(array);

//--------------------------------------
// Array.keys(): method returns an array Iterator object with the keys of an array.
// Create an Array Iterator object, containing the keys of the array:
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
const keys = fruits.keys();

for (let x of keys) {
    text += x + '<br>';
}

console.log(keys);