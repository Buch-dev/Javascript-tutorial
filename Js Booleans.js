// A JS Boolean reps one or two values: true or false.

// The Boolean() Function: is used to find out if an expression (or a varible) is true:
// console.log(10 > 9);
// Or even easier
// let number = 10 > 9;
// console.log(number);

//--------------------------------------------
// Comparisons and Conditions
// The Booleans value of an expression is the basis for all Js comparisons and conditions

//--------------------------------------------
// Everything with a 'Value' is True
// let value = 100;
// console.log(Boolean(value));

//--------------------------------------------
// Everything without a 'Value' is False
// The Boolean value of 0 (zero) is false:
// let x = 0;
// console.log(Boolean(x));

// The Boolean value of -0 (zero) is false:
// let x = -0;
// console.log(Boolean(x));

// The Boolean value of '' (empty string) is false:
// let x = '';
// console.log(Boolean(x));

// The Boolean value of undefined is false:
// let x;
// console.log(Boolean(x));

// The Boolean value of null is false:
// let x = null;
// console.log(Boolean(x));

// The Boolean value of false (you guessed it) is false:
// let x = false;
// console.log(Boolean(x));

// The Boolean value of NaN is false:
// let x = 10 / 'Hallo';
// console.log(Boolean(x));

//--------------------------------------------------
// Booleans can be objects: Normally Js booleans are primitive values created from literals:
// let x = false;
// But Booleans can also be defined as objects with the keyword 'new':
// let y = new Boolean(false);
// console.log(typeof(y)); // returns object
//-- Do not create Boolean objects. It slows down execution speed. The new keyword complicates the code. This can produce some unexpected results:

//-- When using the == operator, equal booleans are equal:
// let x = false;
// let y = new Boolean(false);
// console.log(x == y); // Returns true because x and y have equal values

//-- When using the === operator, equal booleans are not equal, because the === operator expects equality in both type and value
// let x = false;
// let y = new Boolean(false);
// console.log(x === y); // Returns false because x and y have different types

//-- Or even worse, objects cannot be compared:
let x = new Boolean(false);
let y = new Boolean(false);
console.log(x == y); // Returns false because objects cannot be compared
