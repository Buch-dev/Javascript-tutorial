// Comparisons and Logical operatos are used to test for true or false

// Comparison operators are used in logical statements to determine equality or difference btw variables and values.
// x = 5;
// The table below explains the comparisn operators:
// == : equal to:
// console.log(x == 8); // false
// console.log(x == 5); // true
// console.log(x == '5'); // true

// ===: equal value and equal type
// console.log(x === 5); // true
// console.log(x === '5'); // false

// !=: not equal
// console.log(x != 8); // true
// console.log(x != 5); // false

// !==: not equal value or not equal type
// console.log(x !== 5); // true
// console.log(x !== '5'); // false
// console.log(x !== 8); // true

// >: greater than
// console.log(x > 8); // false

// <: less than
// console.log(x < 8); // true

// >=: greater than or equal to
// console.log(x >= 8); // false

// <=: less than or equal to
// console.log(x <=8); // true

//--------------------------------------
// How can it be used: Can be used in conditional statements to compare values and take action depending on the result:
// if (age < 18) text = 'Too young to buy alcohol';

//--------------------------------------
// Logical Operators: are used to determine the logic btw variables or values.
//Given that
x = 6;
// and 
y = 3;
// the table below explains the logical operators:
// &&: and
console.log(x < 10 && y > 1); // true

// ||: or
console.log(x == 5 || y == 5); // false

// ! not
console.log(!(x == y)); // true

//--------------------------------------
// Conditional (Ternary) Operator: Js alo contains conditional operators that assigns a value to a variable based on some condition
// Syntax: variablename = (condition) ? value1: value2
// let voteable = (age < 18) ? 'Too young' : 'Old enough';
// If the variable age is a value below 18, the value of the variable voteable will be 'Too young', otherwise the value of the voteable will be 'Old enough'

//--------------------------------------
// Comparing Different Types: comparing data of different types may give unexpected results.
// When comparing a string with a number, Js will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN which is always false.
console.log(2 < 12); // true
console.log(2 < '12'); // true
console.log(2 < 'John'); // false
console.log(2 > 'John'); // false
console.log(2 == 'John'); // false
console.log('2' < '12'); // false because alphabetically 1 is less than 2
console.log('2' > '12'); // true
console.log('2' == '12'); // false

// To secure a proper result, variables should be converted to the proper type before comparison:
age = Number(age);
if (isNaN(age)) {
    voteable = 'Input is not a number';
} else {
    voteable = (age < 18) ? 'Too young' : 'Old enough';
}

