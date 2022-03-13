// Number methods help you work with numbers
//----------------------------------
// The toString() Method:returns a number as a string
// let x = 123;
// console.log(x.toString());  //returns 123 from variable x
// console.log((123).toString()); //returns 123 from literal 123
// console.log((100 + 23).toString()); //returns 123 form expression 100 + 23
//----------------------------------
// The toExponential() Method: returns a string, with a number rounded and written using exponential notation
// let x = 9.656;
// console.log(x.toExponential(2));
// console.log(x.toExponential(4));
// console.log(x.toExponential(6));
// The parameter is optional. If you don't specify it, Javascript will not round the number
//----------------------------------
// The toFixed() Method: returns a string, with the number written with a specified number of decimals
// let x = 9.656;
// console.log(x.toFixed(0));
// console.log(x.toFixed(2));
// console.log(x.toFixed(4));
// console.log(x.toFixed(6));
// toFixed(2) is perfect for working with money
//----------------------------------
// The toPrecision() Method: returns a string, with a number written with a specified length
// let x = 9.656;
// console.log(x.toPrecision());
// console.log(x.toPrecision(2));
// console.log(x.toPrecision(4));
// console.log(x.toPrecision(6));
//----------------------------------
// The valueOf() Method: returns a number as a number
// let x = 123;
// console.log(x.val ueOf());  //returns 123 from variable x
// console.log((123).valueOf()); //returns 123 from literal 123
// console.log((100 + 23).valueOf()); //returns 123 form expression 100 + 23
// All Javascript data types have a valueOf() and a toString() method
//----------------------------------
// Converting Variables to Numbers: These are the relevant methods, when working with numbers:
// Number(): Returns a number, converted from its argument
// parseFloat(): Parses its argument and returns a floating point number
// parseInt(): Parses its argument and returns an integer

// The Number() Method:can be used to convert Javascript variables to numbers:
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number('10'));
// console.log(Number('   10'));
// console.log(Number('10   '));
// console.log(Number(' 10   '));
// console.log(Number('10.33'));
// console.log(Number('10,33'));
// console.log(Number('10 33'));
// console.log(Number('John'));
// If a number cannnot be converted, NaN is returned.

// The Number() Method used on Dates:can also convert a date to a number
// console.log(Number(new Date('2017-09-30')));

// The parseInt() Method: parses a string and returns a whole number. Spaces are allowed. Only the first number is returned
// console.log(parseInt('-10'));
// console.log(parseInt('-10.33'));
// console.log(parseInt('10'));
// console.log(parseInt('10.33'));
// console.log(parseInt('10 20 30'));
// console.log(parseInt('10 years'));
// console.log(parseInt('years 10'));

// The parseFloat() Method: parses a string and returns a number. Spaces are allowed. Only the first number is returned
console.log(parseFloat('-10'));
console.log(parseFloat('-10.33'));
console.log(parseFloat('10'));
console.log(parseFloat('10.33'));
console.log(parseFloat('10 20 30'));
console.log(parseFloat('10 years'));
console.log(parseFloat('years 10'));
