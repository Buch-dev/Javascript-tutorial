// Javascript methods for searching strings:
// String.index()
// Sring.lastIndexOf()
// String.startsWith()
// String.endsWith()

// String.indexOf():returns the index of (the position of) the first occurrence of a specified text in a string
// let str = 'Please locate where "locate" occurs!';
// console.log(str.indexOf("locate"));

// String.lastIndexOf():returns the index of the last occurrence of a specified text in a string
// let str = 'Please locate where "locate" occurs!';
// console.log(str.lastIndexOf("locate"));

// Both indexOf(), and lastIndexOf() returns -1 if the text is not foulet str = 'Please locate where "locate" occurs!';
// let str = 'Please locate where "locate" occurs!';
// console.log(str.lastIndexOf("John"));

// Both methods accept a second parameter as the starting position for the search:
// let str = 'Please locate where locate occurs!';
// console.log(str.indexOf("locate", 15));

// String.search(): searches a string for the specified value and returns the position of the match
// let str = 'Please locate where "locate" occurs!';
// console.log(str.search("locate"));

// String.match(): searches a string for a match against a regular expression, and returns the matches, an an Array object
// let text = 'The rain in SPAIN stays mainly in the plain';
// console.log(text.match(/ain/g));
// Ex2: Perform a global case insensitive search for 'ain'
// let text = 'The rain in SPAIN stays mainly in the plain';
// console.log(text.match(/ain/gi));

// String.includes(): returns true if a string conains a specified value
// let text = 'Hello world, welcome to the universe.';
// console.log(text.includes('world'));

// let text = 'Hello world, welcome to the universe.';
// console.log(text.includes('world', 12));

// String.startsWith(): returns true if a string starts with a specified value, otherwise false
// let text = 'Hello world, welcome to the universe.';
// console.log(text.startsWith('Hello'));

// let text = 'Hello world, welcome to the universe.';
// console.log(text.startsWith('world'));

// let text = 'Hello world, welcome to the universe.';
// console.log(text.startsWith('world', 5));

// let text = 'Hello world, welcome to the universe.';
// console.log(text.startsWith('world', 6));
// The startsWith() method is case sensitive

// String.endsWith(): returns true if a string ends with a specified value, otherwise false
//Ex1: check if a string ends with 'Doe'
// var text = 'John Doe';
// console.log(text.endsWith('Doe'));
// Ex2: check if the 11 first characters of a string ends with 'world'
let text = 'Hello world, welcome to the universe.';
console.log(text.endsWith('world', 11));
// The endsWith() method is case sensitive