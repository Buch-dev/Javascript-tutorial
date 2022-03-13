// Always use thesame coding conventions for all your Js projects

// Javascript Coding Conventions: are style guidelines for programming
// Coding conventions secure quality

//----------------------------------------------------
// Variable Names: At W3Schools we use camelCase for identifier names (variables and functions)
// All names start with a letter
// At the buttom of this page, you will find a wider discussion about naming rules.
firstName = 'John';
lastName = 'Doe';

price = 19.90;
tax = 0.20;

fullPrice = price + (price * tax);

//----------------------------------------------------
// Spaces Around Operators: Always put spaces around operators (=+-/), and after commas:
let x = y + z;
const myArray = ['Volvo', 'Saab', 'Fiat'];

//----------------------------------------------------
// Code Indentation: Always use 2 spaces for indentation of code blocks:
// Functions:
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
//-- Do not use tabs (tabulators) for indentation. Different editors interpret tabs differently

//----------------------------------------------------
// Statement Rules: General rules for simple statemnts:
//-- Always end a simple statement with a semicolon.
const cars = ['Volvo', 'Saab', 'Fiat'];

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue'
};

// General rules for complex (compound) statements:
//-- Put the opening bracket at the end of the first line
//-- Use one space before the opening bracket
//-- Put the closing bracket on a new line, without leading spaces
//-- Do not end a complex statement with a semicolon
// Functions:
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

// Loops:
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

// Conditionals:
if (time < 20) {
    greeting = 'Good day';
} else {
    greeting = 'Good evening';
}

//----------------------------------------------------
// Object Rules: General rules for object definitions:
//-- Place the opening bracket on the same line as the object name
//-- Use colon plus one space between each property and its value
//-- Use quotes around string values, not around numeric values
//-- Do not add a comma after the last property-value pair
//-- Place the closing bracket on a new line, without leading spaces
//-- Always end an object definition with a semicolon
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue'
};

// Shorts objects can be writen compressed, on one line, using spaces only between properties, like this:
const person = { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' };

//----------------------------------------------------
// Line Length < 80: For readability, avoid lines longer than 80 characters
// If a Js statement does not fit on one line, the best place to break it, is after an operator or a comma
document.getElementById('demo').innerHTML = 
'Hello Dolly.';