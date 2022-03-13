// Hoisting is Js default behaviour of moving declarations to the top

//-------------------------------
// Javascript Declarations are Hoisted: In Js, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.
// Exp 1 gives same result as Exp2:
// x = 5; // Assign 5 to x
// elem = document.getElementById('demo');  // Find an element
// elem.innerHTML = x; // Display x in the element

// var x;  // Declare x

//-- Exp2:
// var x; // Declare x
// x = 5; // Assign 5 to x

// elem = document.getElementById('demo'); // Find an element
// elem.innerHTML = x;  // Display x in the element
// To understand this, you have to undestand the term 'hoisting'
// Hoisting is Js default bevaiour of moving all declarations to the top of the current scope (to the top of the current script or the current function)

//-------------------------------
// The let and const keywords: Variables defined with let and const are hoisted to the top of the block, but not initialized
// Meaning: The block of code is aware of the variable, but cannot be used until it has been declared
// Using a let variable before its declared will result in ReferenceError
// The variable is in a 'temporal dead zone' from the start of the block until it is declared:
// carName = 'Volvo';
// let carName;
// console.log(carName);

// Using const variable before it is declared, is a syntax error, so the code will simply not run.
// carName = 'Volvo';
// const carName;
// console.log(carName);

//-------------------------------
// Javascript Initializations are Not Hoisted: Js only hoists declarations, not initializations
// Exp1 does not give thesame result as Exp2
// var x = 5;  // Initialize x
// var y = 7;  // Initialize y

// elem = document.getElementById('demo');  // Find an element
// elem.innerHTML = x + '' + y;  // Display x and y

// Exp2:
// var x = 5;  // Initialize x

// elem = document.getElementById('demo');  // Find an elemnt
// elem.innerHTML = x + '' + y;  // Display x and y

// var y = 7;  // Initialize y
//-- Does it makes sense that y is undefined in the last example?
// This is because only the declaration (var y), not the initialization (=7) is hoisted to the top
// Because of hoisting, y has been declared before it is used, but because initializaions are not hoisted, the value of y is undefined

// Exp2 is thesame as writing:
var x = 5;  // Initialize x
var y;  // Declare y

elem = document.getElementById('demo');  // Find an element
elem.innerHTML = x + '' + y;  // Display x and y

y = 7;  // Assign 7 to y

//-------------------------------
// Declare Your Variables At The Top!: Hoisting is (to many developers) an unknown or overlooked behaviour of Js
// If a developer doesnt undestand hoisting, programs may contain bugs (errors)
// To avoid bugs, always declare all variables at the beginning of evry scope
// Since this how Js interprets the code, it is always a good rule

//-- Javascript in strict mode does not allow variables to be used if they are not declared
// Study 'use strict' in its chapter.