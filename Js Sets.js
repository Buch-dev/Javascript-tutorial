// A Js Set is a collection of unique values
// Each value can only occur once in a Set.

// Essential Set Methods
// new Set(): Creates a new Set
// add(): Adds a new element to the Set
// delete(): Removes an element from a Set
// has(): Returns true if a value exists in the Set
// forEach(): Invokes a callback for each element in the Set
// values(): Returns an iterator with all the values in a Set
// Property: Description
// size: Returns the number of elements in a Set

//----------------------------------------
// How to Create a Set: You can create a Js Set by:
//-- Passing an Array to 'new Set()'
//-- Create a new Set and use 'add()' to add values
//-- Create a new Set and use 'add()' to add variables

//----------------------------------------
// The new Set() Method: Pass an Array to the 'new Set()' constructor
// Create a Set
// const letters = new Set(['a', 'b', 'c']);
// console.log(letters);

// Create a new Set and use 'add()' to add values
// Create a Set
// const letters = new Set();

// Add Values to the Set
// letters.add('a');
// letters.add('b');
// letters.add('c');

// console.log(letters);

// Create a new Set and use 'add()' to add variables
// Create a Set
// const letters = new Set();

// Create Variables
// const a = 'a';
// const b = 'b';
// const c = 'c';

// Add variables to the Set
// letters.add(a);
// letters.add(b);
// letters.add(c);

// console.log(letters);

//----------------------------------------
// The add() Method:
// letters.add('d');
// letters.add('e');


//-- If you add equal elements, only the first wiil be saved:
// letters.add('a');
// letters.add('b');
// letters.add('c');
// letters.add('c');
// letters.add('c');
// letters.add('c');
// letters.add('c');

// console.log(letters);

//----------------------------------------
// The forEach() Method: invokes (calls) a function for each Set element:
// Create a Set
const letters = new Set(['a', 'b', 'c']);

// List all Elements
// let text = '';
// letters.forEach(value => {
//     text += value;
// });

// console.log(text);

//----------------------------------------
// The values() Method: returns a new ietrator object containing all the values in the Set:
console.log(letters.values()); // Returns [object Set Iterator]
// You can use the iterator object to access the elements:
// List all Elements
let text = '';
for (const x of letters.values()) {
    text += x;
}

console.log(text);












