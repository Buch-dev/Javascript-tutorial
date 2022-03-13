// Arrow functions allow us to write shorter function syntax:
// Before:
// hello = function() {
    // return 'Hello World!';
// }

// console.log(hello);

// With Arrow Function:
// hello = () => {
    // return 'Hello World!';
// }

//-- it gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the 'return' keyword:
// Arrow Functions Return Value by Default:
// hello = () => 'Hello World!';
// NOTE: This works if the function has only one statement
// If you have parameters, you pass them inside the parentheses:

// Arrow Function With Parameters:
// hello = (val) => `Hello${val}`;
// Infact, if you have only one parameter, you can skip the parenthesis as well:

// Arrow Function Without Parentheses:
// hello = val => `Hello${val}`;

// What About 'this'?
// With arrow functions there are no binding of 'this'
// In regular functions the 'this' keyword reps the object that called the function, which could be the window, the document, a button or whatever
// With arrow functions the 'this' keyword always reps the object that defined arrow function
// Lets take a look at two exps to understand the difference
// Both exps call a method twice, first when the page loads, and once again when the user clicks a button
// The first exp uses a regular function, and the second exp uses an arrow function
// The result shows that the first exp returns two different objects (window and button), and the second example returns the window object twice, because the window object is the 'owner' of the function.

// With a regular function 'this' reps the object that calls the function:
// Reular Function:
hello = function() {
    document.getElementById('demo').innerHTML += this;
}
    // Thw window object calls the function:
    window.addEventListener('load', hello);

    // A button object calls the function:
    document.getElementById('btn').addEventListener('click', hello);

// With an arrow function 'this' reps the owner of the function:
// Arrow Function:
// hello = () => {
    // document.getElementById('demo').innerHTML += this;
// }

// The window object calls the function:
// window.addEventListener('load', hello);

// A button object calls the function:
// document.getElementById('btn').addEventListener('click', hello);