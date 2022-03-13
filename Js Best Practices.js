// Avoid global variables, avoid 'new', avoid ==, avoid eval()

// Avoid Global Variables: Minimize the use of global variables
// This include all data types, objects, and functions
// Global variables and functions can be written by other scripts.
// Use local variables instead, and learn how to use closures.

//----------------------------------------
// Always Declare Local Variables: All variables used in a function should be declared as local variables
// Local variables must be declared with the var keyword or the let keyword, otherwise they will become global variables
//-- Strict mode does not allow undeclared variables

//----------------------------------------
// Declarations on Top: It is a good coding practice to put all declarations at the top of each script or function
//-- Gives cleaner code
//-- Provide a single place to look for local variables
//-- Make it easier to avoid unwanted (implied) global variables
//-- Reduce the possibility of unwanted re-declarations
// Declare at the beginning
let firstName, LastName, price, discount, fullPrice;

// Use later
firstName = 'John';
LastName = 'Doe';

price = 19.90;
discount = 0.10;

fullPrice = price - discount;
console.log(fullPrice);

// This also goes for loop variables:
for (let i = 0; i < 5; i++) {

}

//----------------------------------------
// Initialize Variables: It is a good practice to initialize variables when you declare them.
//-- Gives cleaner code
//-- Provide a single place to initialize variables
//-- Avoid undefined values
// Declare and initiate at the beginning
let firstName = '';
let LastName = '';
let price = 0;
let discount = 0;
let fullPrice = 0;
const myArray = [];
const myObject = {};
//-- Initializing variables provides an idea of the intended use (and intended data type).

//----------------------------------------
// Declaring Objects with const: will prevent any accidental change of type:
let car = {type: 'Fiat', model: '500', color: 'white'};
car = 'Fiat';
console.log(car);  // Changes object to string

const car = {type: 'Fiat', model: '500', color: 'white'};
car = 'Fiat';
console.log(car); // Not possible

//----------------------------------------
// Declaring Arrays with const: will prevent any accidental change of type:
let cars = ['Saab', 'Volvo', 'BMW'];
cars = 3;  // Changes array to number

const cars = ['Saab', 'Volvo', 'BMW'];
cars = 3;  // Not possible

//----------------------------------------
// Dont use new Object():
//-- Use '' instead of new String()
//-- Use 0 instead of new Number()
//-- Use false instead of new Boolean()
//-- Use {} instead of new Object()
//-- Use [] instead of new Array()
//-- Use /()/ instead of new RegExp()
//-- Use function (){} instead of new Function()

let x1 = '';  // new primitive string
let x2 = 0;  // new primitive number
let x3 = false;  // new primitive boolean
let x4 = {};  // new object
let x5 = [];  // new array object
let x1 = /()/;  // new regexp object
let x1 = function(){};  // new function object

//----------------------------------------
// Beware of Automatic Type Conversions
// A variable can change its date type:
let x = 'Hello';  // typeof x is a string
x = 5;  // changes typeof x to a number

// When doing mathematical operations, Js can convert numbers to strings:
let x = 5 + 7;  // x.valueOf() is 12, typeof x is a number
let x = 5 + '7';  // x.valueOf() is 57, typeof x is a string
let x = '5' + 7;  // x.valueOf() is 57, typeof x is a string
let x = 5 - 7;  // x.valueOf() is -2, typeof x is a number
let x = 5 -'7'; // x.valueOf() is -2, typeof x is a number
let x = '5' - 7;  // x.valueOf() is -2, typeof x is a number
let x = 5 - 'x';  // x.valueOf() is NaN, typeof x is a number
//-- Substracting a string form a string, does not generate an error but returns NaN (Not a Number)
'Hello' - 'Dolly'  // returns NaN

//----------------------------------------
// Use === Comparison
//-- The == comparison operator always converts (to matching types) before comparison
//-- The === operator forces comparison of values and type
0 == '';  // true
1 == '1'; // true
1 == true; // true

0 === '';  // false
1 === '1'; // false
1 === true; // false

//----------------------------------------
// Use Parameter Defaults: If a function is called with a missing argument, the value of the missing argument is set to undefined
// Undefined values can break your code. It's a good habit to assign default values to arguments.
function myFunction(x, y) {
    if (y === undefined) {
        y = 0;
    }
}

//-- ECMAScript 2015 allows default parameters in the function definition:
function myFunction(a = 1, b = 1) {
    // function code
}

//----------------------------------------
// End your Switches with Defaults: Always end your switch statements with a default. Even if you think there is no need for it.
switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;

    default:
        day = 'Unknown';
        break;
}

//----------------------------------------
// Avoid Number, String, and Boolean as Objects: Always treat numbers, strings, or booleans as primitive values. Not as objects.
// Declaring these types as objects, slows down execution speed, and produces nasty side effects
let x = 'John';
let y = new String('John');
(x === y)  // is false because x is a string and y is an object
//-- or even worse
let x = new String('John');
let y = new String('John');
(x === y)  // is false because you cannot compare objects

//----------------------------------------
// Avoid using eval(): The eval() function is used to run text as code. In almost all cases, it should not be necessary to use it
// Becuase it allows arbitrary code to be run, it also reps a scurity problem
