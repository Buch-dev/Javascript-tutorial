let txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
txt.length
// SLICE
// let str = 'Apple, Banana, Kiwi';
// console.log(str.slice(7, 13));
// let str = 'Apple, Banana, Kiwi';
// console.log(str.slice(-12, -6));

// SUBSTRING
// let str = 'Apple, Banana, Kiwi';
// console.log(str.substring(7, 13));

// SUBSTR
// let str = 'Apple, Banana, Kiwi';
// console.log(str.substr(-6));

// REPLACE
// let text = 'Please visit Microsoft';
// let newText = text.replace('Microsoft', 'W3Schools');

// console.log(newText);
// CASE SENSITIVE
// let text = "Please visit Microsoft!";
// let newText = text.replace("MICROSOFT", "W3Schools");

// console.log(newText);

// THE CONCAT() MTD: JOINS TWO OR MORE STRING
// let text1 = 'Hello';
// let text2 = 'World';
// let text3 = text1.concat(' ', text2);
// console.log(text3);

//These two lines below does thesame
// text = 'Hello' + ' ' + 'World';
// console.log(text);
// text = 'Hello'.concat(' ', 'World');
// console.log(text);

//String.trim():removes whitespace from both sides of a string
// let text = '          Hello World!            ';
// console.log(text.trim());

// Javascript String Padding:supports padding at the beginning and ending of a string
// let text = '5'
// console.log(text.padStart(4, 0));

// let text = '5'
// console.log(text.padEnd(4, 0));

// Extracting String Characters
// The chatAt() Method:returns the character at a specified index
// let text = 'HELLO WORLD';
// console.log(text.charAt(0));

// The charCodeAt() Method:returns the unicode of the character at a specified index in a string
// the method returns UTF-16 code (an integer btw 0 and 65535)
// let text = 'HELLO WORLD';
// console.log(text.charCodeAt(0));


// Property Access: ECMAScript 5 (2009) allows property access[] on strings:
let text = 'HELLO WORLD';
// console.log(text[0]);

// Converting a String to an Array: a string can be converted to an array with the split() method
console.log(text.split(' '));