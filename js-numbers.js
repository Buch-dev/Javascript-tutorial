// The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate
// let x = 0.2 + 0.1;
// console.log(x);
// to solve the problem above, it helps to multiply and divide
// let x = (0.2 * 10 + 0.1 * 10) / 10;
// console.log(x);

// Adding Numbers and Strings
// JAVASCRIPT USES THE += OPERATOR FOR BOTH ADDITION AND CONCATENATION. NUMBERS ARE ADDED, STRINGS ARE CONCATENATED
// If you add two numbers, the result will be a number
// let x = 10;
// let y = 20;
// let z = x + y;
// console.log(z);
// If you add two strings, the result will be a concatenation
// let x = '10';
// let y = '20';
// let z = x + y;
// console.log(z);
// If you add a number and a string, the result will be a string concatenation
// let x = 10;
// let y = '20';
// let z = x + y;
// console.log(z);
// If you add a string and a number, the result will be a string concatenation
// let x = '10';
// let y = 20;
// let z = x + y;
// console.log(z);
// A common mistake is to expect this result to be 30
// let x = 10;
// let y = 20;
// let z = 'The result is: ' + x + y;
// console.log(z);
// A common mistake is to expect this result to be 102030
// let x = 10;
// let y = 20;
// let z = '30';
// let result = x + y + z;
// console.log(result);

// Numeric Strings: Javascript strings can have numeric content
// let x = 100;
// x is a number
// let y = '100';
// y is a string
// Javascript will try to convert strings to numbers in all numeric operations:
// This will work
// let x = '100';
// let y = '10';
// let z = x/y;
// console.log(z);
// This will also work
// let x = '100';
// let y = '10';
// let z = x*y;
// console.log(z);
// And this will work
// let x = '100';
// let y = '10';
// let z = x-y;
// console.log(z);
// But this will not work
// let x = '100';
// let y = '10';
// let z = x+y;
// console.log(z);

// NaN - Not a Number
// Nan is a Javascript reserved word indicating that a number is not a legal number.
// Trying to do arithmetic with a non-arithmetic string will result in NaN (Not a Number)
// let x = 100 / 'Apple';
// console.log(x);
// If the string contains a numeric value, the reult will be a number
// let x = 100 / '10';
// console.log(x);
// You can use the global Javascript function isNAN() to find out if a value is not a number
// let x = 100 / 'Apple';
// console.log(isNaN(x));

// If you use NaN in a mathematical operation, the result will also be NaN
// let x = NaN;
// let y = 5;
// let z = x + y;
// console.log(z);
// Or the result might be a concatenation
// let x = NaN;
// let y = '5';
// let z = x + y;
// console.log(z);
// Nan is a number: typeof NaN returns number
// console.log(typeof NaN);
// Infinity: or (-Infinity) is the value Javascript will return if you calculate a number outside the largest possible number
// let myNumber = 2;
// while (myNumber != Infinity) {
//     myNumber = myNumber * myNumber;
// };
// console.log(myNumber);
// Division by 0 (zero) also generates Infinity
// let x = 2 / 0;
// let y = -2 / 0;
// console.log(y);

// Infinity is a number: typeof Infinity returns number
// console.log(typeof Infinity);

// Hexadecimal: Javascripts interprets numeric constants as hexadecimal if they are preceded by 0x
// let x = 0xFF;
// console.log(x);
// Never write a number with a leading zero(like 07). Some Javascript versions interpret numbers as octal if they are written with a leading zero
// By default, Javascript displays numbers as base 10 decimals.
// But you can use the toString() method to output numbers from base 2 to base 36.
// Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.

// Numbers can be objects: Normally Javascript are primitive values created from literals
// let x = 123;
//But numbers can also be defined as objects with the keyword 'new'
// let y = new Number (123);
// console.log(typeof(y));

// N.B: When using the == operator, equal numbers are equal
// let x = 500;
// let y = new Number(500);
// console.log(x==y);  //Equals true
// N.B: When using the === operator, equal numbers are not equal, because the === operator expects equality in both type and value.
// let x = 500;
// let y = new Number(500);
// console.log(x===y); //Equals false, because x and y have different types
// Or even worse. Objects cannot be compared
let x = new Number(500);
let y = new Number(500); // is false because objects cannot be compared
console.log(x==y);
