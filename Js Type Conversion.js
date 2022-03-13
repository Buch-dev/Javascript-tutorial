// COnverting Strings to Numbers
// COnverting Numbers to Strings
// COnverting Dates to Numbers
// COnverting Numbers to Dates
// COnverting Booleans to Numbers
// COnverting Numbers to Booleans

//-----------------------------------------
// Javascript Type Conversion: Js variables can be converted to a new variable and another data type:
//-- By the use of a Js function
//-- Automatically by Js itself

//-----------------------------------------
// Converting Strings to Numbers: The global method Number() can convert strings to numbers
// Stings containing numbers (like '3.14') convert to numbers (like 3.14).
// Empty strings converts to 0
// Anything else converts to NaN 
console.log(Number('3.14')); // returns 3.14
console.log(Number(' ')); // returns 0
console.log(Number('')); // returns 0
console.log(Number('99 88')); // returns NaN

//-----------------------------------------
// Number Methods: Go to Js Number Methods for more info on this

//-----------------------------------------
// The Unary + Operator: can be used to convert a variable to a number:
// let y = '5';
// console.log(y); // y is a string
// let x = + y;
// console.log(x); // x is a number
//-- If the variable cannot be converted, it will still become a number, but with the value NaN

let y = 'John';
console.log(y); // y is a string
let x = + y;
console.log(x); // x is a number (NaN)

//-----------------------------------------
// Converting Numbers to Strings: the global method String() can convert numbers to strings
console.log(String(x)); // returns a string from a number variable x
console.log(String(123)); // returns a string from a number literal 123
console.log(String(100 + 23)); // returns a string from a number from an expression

// The Number method toString() does the same
console.log(x.toString());
console.log((123).toString());
console.log((100 + 23).toString());

//-----------------------------------------
// More Methods: Go to Js Number Methods for more info on this

//-----------------------------------------
// Converting Dates to Numbers: The global method Number() can be used to convert dates to numbers
d = new Date();
console.log(Number(d));

// The date method getTime() does the same
d = new Date();
console.log(d.getTime());

//-----------------------------------------
// Converting Dates to Strings: String() does converts dates to strings
console.log(String(Date()));
// The Date method toString() does the same.
console.log(Date().toString());

// Go to Date Methods for more info on conversion of dates to strings

//----------------------------------------
// Converting Booleans to Numbers: Number() can also convert booleans to numbers
console.log(Number(false)); // returns 0
console.log(Number(true)); // returns 1

//----------------------------------------
// Converting Booleans to Strings: String() can also convert booleans to strings
console.log(String(false)); // returns false
console.log(String(true)); // returns true

// The Boolean method toString() does the same
console.log(false.toString()); // returns false
console.log(true.toString()); // returns true


//----------------------------------------
// Automatic Type Conversion: When Js tries to operate on a 'wrong' data type, it will try to convert the value to a 'right' type
// This result is not always what you expect:
console.log(5 + null); // returns 5, because null is converted to 0
console.log('5' + null); // returns '5null', because null is converted to null
console.log('5' + 2); // returns '52', because 2 is converted to '2'
console.log('5' - 2); // returns 3, because '5' is converted to 5
console.log('5' * '2'); // returns 10, because '5' and '2' are converted to 5 and 2

//----------------------------------------
// Automatic String Conversion: Js automatically calls the variable's toString() function when you try to 'output' an object or a variable
let myVar = {name: 'Fjohn'}; // toString converts to '[object object]'
myVar = [1,2,3,4] // toString converts to '1,2,3,4'
myVar = new Date();
// document.getElementById('demo').innerHTML = myVar;

// Numbers and booleans are also converted, but this is not very visible:
myVar = 123; // toString converts to '123'
myVar = true; // toString converts to 'true'
myVar = false; // toString converts to 'false'
document.getElementById('demo').innerHTML = myVar;

//----------------------------------------
// Javascript Type Conversion Table: shows the result of converting different Js values to Number, String, and Boolean:
// Go to W3Schools for more info, Happy Coding! 