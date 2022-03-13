// Scope deteremines the accessibility (visibility) of variavles
// Js has 3 types of scope:
//-- Block scope
//-- Function scope
//-- Global scope

//--------------------------------------------
// Block Scope: ES6 introduced two important new Js keywords: let and const. These two keywords provide Block Scope in Js
// Variables declared inside a {} block cannot be accessed from outside the block:
{
    let x = 2;
}
// x can NOT be used here

// Variables declared with the var keyword can NOT have block scope
// Variables declared inside a {} block can be accessed from outside the block
{
    var x = 2;
}
// x CAN be used here

//--------------------------------------------
// Local Scope: Variables declared within a Js function, become LOCAL to the function
// code here can NOT use carName
function myFunction() {
    let carName = 'Volvo';
    // code here CAN use carName
}
// code here can NOT use carName
//-- Local variables have Function Scope: They can only be accessd from within the function.
// Since local variables are only recognized inside their function, variables with the same name can be used in different functions
// Local variables are created when a function starts, and deleted when the function is completed

//--------------------------------------------
// Function Scope: Each function creates a new scope
// Variables defined inside a function are not accessible (visible) from outside the function
// Variables declared with var, let and const are quite similer when declared inside a function
// They all have Function Scope:
function myFunction() {
    var carName = 'Volvo';   // Function Scope
}

function myFunction() {
    const carName = 'Volvo';   // Function Scope
}

function myFunction() {
    let carName = 'Volvo';   // Function Scope
}

//--------------------------------------------
// Global Javascipt Variables: A variable declared outside a function, becomes GLOBAL
let carName = 'Volvo';
// code here can use carName

function myFunction() {
    // code here can also use carName
}
//-- A global variable has Global Scope: All scripts and function on a web page can access it

//--------------------------------------------
// Global Scope: Variables declared with var, let and const are quite similar when declared outside a block
// They all have Global Scope:
var x = 2;    // Global Scope

let x = 2;    // Global Scope

const x = 2;   // Global Scope

//--------------------------------------------
// Javascript Variables: In Js, objects and functions are also variables
// Scope determines the accessibility of variables, objects, and functions from different parts of the code

//--------------------------------------------
// Automatically Global: If you assign a value to a variable that has not been declared, it will automaticalyy become a GLOBAL variable
// This code exp will declare a global variable carName, even if the value is assigned inside a function
myFunction();

// code here can use carName

function myFunction() {
    carName = 'Volvo';
}

//--------------------------------------------
// Strict Mode: All modern browsers support running Js in 'Strict Mode'.
// You will lear more about how to use strict mode in a later chapter of this tutorial
//-- In 'Strict Mode', undeclared variables are not automatically global

//--------------------------------------------
// Global Variables in HTML: With JS, the global scope is the Javascript environment
// In HTML, the global scope is the window object
// Global variables defined with the var keyword belong to the window object
var carName = 'Volvo';
// code here can use window.carName

// Global variables defined with the let keyword do not belong to the window object:
let carName = 'volvo';
// code here can NOT use window.

//--------------------------------------------
// WARNING!: DO NOT CREATE GLOBAL VARIABLES UNLESS YOU INTEND TO.
// Your global variables (or functions) can overwrite window varaibles (or functions)
// Any function, including the window object, can overwrite your global variables and functions

//--------------------------------------------
// The liftime of Javascript Variables: Starts when its declared
// Function (local) variables are deleted when the function is completed.
// In a web browser, global variables are deleted when you close the browser window (or tab)

//--------------------------------------------
// Function Arguments: (parameters) work as local variables inside functions.