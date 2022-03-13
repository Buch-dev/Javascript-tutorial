// 'use strict'; Defines that Js code should be executed in 'strict mode'.
// You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables
//'use strict' is just a string, so IE 9 will not throw an error even if it does not understand it

//----------------------------------------------
// Declaring Strict Mode: Strict mode is declared by adding 'use strict'; to the beginning of a script or a function
// Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode)
// 'use strict';
// x = 3.14;  // This will cause an error because x is not declared
// console.log(x);

// 'use strict';
// myFunction();

// function myFunction() {
//     y = 3.14   // This will cause an error because x is not declared
// }

// Declared inside a function, it has local scope (only the code inside the function is in strict mode)
// x = 3.14;  // This will not cause an error.
// myFunction();

// function myFunction() {
//     'use strict';
//     y = 3.14 // This will cause an error
//     console.log(y);
// }

//----------------------------------------------
// The 'use strict'; Syntax: The syntax, for declaring strict mode was designed to be compatible with older versions of Js
// Compiling a numeric literal (4 + 5;) or a string literal ('John Doe';) in a Js program has no side effects. It simply compiles to a non existing variable and dies
// So 'use strict'; only matters to a new compilers that 'understand' the meaning of it

//----------------------------------------------
// Not Allowed in Strict Mode:
// Using a variable, without declaring it, is not allowed:
// 'use strict';
// x = 3.14;  // This will cause an error

//--Objects are variables too
// Using an object without declaring it, is not allowed:
// 'use strict';
// x = {p1: 10, p2: 20};  // This will cause an error

// Deleting a variable (or object) is not allowed:
// 'use strict';
// let x = 3.14
// delete x;  // This will cause an error
// console.log(x);

// Deleting a function is not allowed:
// 'use strict';
// function x(p1, p2) {};
// console.log(delete x);  // This will cause an error

// Duplicating a parameter name is not allowed:
// 'use strict';
// function x(p1, p1) {};  // This will cause an error

// Octal numeric literals are not allowed:
// 'use strict';
// let x = 010;   // This will cause an error
// console.log(x);

// Octal escape characters are not allowed:
// 'use strict';
// let x = '\010';  // This will cause an error
// console.log(x);

// Writing to a read-only property is not allowed:
// 'use strict';
// const obj = {};
// Object.defineProperty(obj, 'x', {value: 0, writable:false});

// obj.x = 3.14;   // This will cause an error
// console.log(obj);

// Writing to a get-only property is not allowed:
// 'use strict';
// const obj = {get x() {return 0}};

// obj.x = 3.14;  // This will cause an error

// Deleting an undeletable property is not allowed:
// 'use strict';
// delete Object.prototype;  // This will cause an error

// The word 'eval' cannot be used as a variable:
// 'use strict';
// let eval = 3.14;  // This will cause an error 

// The word 'arguments' cannot be usd as a variable:
// 'use strict';
// let arguments = 3.14;

// The 'with' statement is not allowed:
// 'use strict';
// with (Math) {x = cos(2)};  // This will cause an error

// For security reasons, eval() is not allowed to create variables in the scope from which it is called:
// 'use strict';
// eval ('let x = 2');
// alert(x);  // This will cause an error

// The 'this' keyword in functions behaves differently in the strict mode
// The 'this' keyword refers to the object that called the function
// If the object is not specified, functions in strict mode will return undefined and functions in normal mode will eturn the global object (window):
// 'use strict';
// function myFunction() {
    // alert(this);  // will alert undefined
// }
// myFunction();

//----------------------------------------------
// Future Proof!: Keywords reserved for future Js versions can NOT be use as variable names in strict mode.
// These are:
//-- implements
//-- interface
//-- let
//-- package
//-- private
//-- protected
//-- public
//-- static
//-- yield

'use strict';
let public = 1500;  // this will cause an error