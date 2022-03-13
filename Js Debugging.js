// The debugger keyword: stops the execution of Js, and calls (if available) the debugging function
// If no debugging is avaiable, the debugger statement has no effect
// With the debugger turned on, this code will stop executing before it executes the third time.
let x = 15 * 5;
debugger;
document.getElementById('demo').innerHTML = x;
console.log();