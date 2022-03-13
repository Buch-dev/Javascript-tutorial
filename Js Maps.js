// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys
// Essential Map Methods
// new Map(): Creates a new Map
// set(): Sets the value for a key in a Map
// get(): Gets the value for a key in a Map
// delete(): Removes a Map element specified by the key
// has(): Returns true if a key exists in a Map
// forEach(): Calls a function for each key/value pair in a Map
// entries(): Returns an iterator with the [key, value] pairs in a Map
// Property: Description
// size: Returns the number of elements in a Map

// How to Create a Map: You can create a Js Map by:
//-- Passing an Array to 'new Map()'
//-- Create a Map and use 'Map.set()'

//-----------------------------------
// The new Map() Method:
// Create a Map
// const fruits = new Map([
    // ['apples', 500],
    // ['bananas', 300],
    // ['oranges', 200]
// ]);

// console.log(fruits);

//-----------------------------------
// The set() Method
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set('apples', 500);
fruits.set('bananas', 300);
fruits.set('oranges', 200);

// console.log(fruits);

// The set() method can also be used to change existing Map values:
fruits.set('apples', 600)
console.log(fruits);

//-----------------------------------
// The get() Method: gets the value of a key in a Map:
console.log(fruits.get('apples')); // Returns 600

//-----------------------------------
// The size property: returns the number of elements in a Map:
console.log(fruits.size);

//-----------------------------------
// The delete() Method: removes a Map element
console.log(fruits.delete('apples'));
console.log(fruits);

//-----------------------------------
// The has() Method: returns true if a key exists in a Map:
console.log(fruits.has('apples'));
console.log(fruits.has('bananas'));

//-----------------------------------
// Javascipt Objects vs Maps: Visit W3Schools online for differences

//-----------------------------------
// The forEach() Method: calls a function for each key/pair in a Map:
// List all entries
// let text = '';
// fruits.forEach(value, key => {
//     text += key + ' = ' + value;
// });

// console.log(text);

//-----------------------------------
// The entries() Method: returns an iterator object with the [key, values] in a Map
let text = '';
for (const x of fruits.entries()) {
    text += x;
    console.log(text);
}
