// A regular expession is a sequence of characters that forms a search pattern
// The serach pattern can be used for text search and text replace operations.
// Syntax: /pattern/modifiers;
console.log(/w3schools/i);
// Example explained:
// /w3shools/i is a regular expression.
// w3schools is a pattern (to be used in a search)
// i is a modifier (modifies the search to be case-insensitive)

//-------------------------------------------
// Using String Methods: In Js, regular exp are often used with the two string methods: search() and replace()
//-- The search() method uses an expression to search for a match, and returns the position of the match
//-- The replace() method returns a modified string where the pattern is replaced

//-------------------------------------------
// Using String search() with a string: searches a string for a specified value and returns the position of the match:
// Use a string to do a search for 'W3schools' in a string:
// let text = 'Visit W3Schools!';
// let n = text.search('W3Schools');
// console.log(n);

//-------------------------------------------
// Using String search() with a Regular Expression
// Use a regular exp to do a case-insensituve search for 'W3Schools' in a string:
// let text = 'Visit W3Schools';
// let n = text.search(/w3schools/i);
// console.log(n);

//-------------------------------------------
// Using String replace() with a string: replaces a specified value with another value in a string:
// let text = 'Visit Microsoft!';
// let result = text.replace('Microsoft', 'W3Schools');
// console.log(result);

//-------------------------------------------
// Using String replace() with a regular expression:
// Use a case insensitive regular expression to replace Microsoft with W3schools in a string:
let text = 'Visit Microsoft!';
let result = text.replace(/microsoft/i, 'W3Schools');
console.log(result);
// Regular exp can make your search much more powerful (case insensitive for example)

//-------------------------------------------
// Regular Expression Modifiers: used to perform case-insensitive more global searches:
// i: perform case-insensitive matching
// g: perform a global match(find all matches rather than stopping after the first match)
// m: perform multiline matching

//-------------------------------------------
// Regular Expression Patterns: Brackets are used to find a range of characters:
// [abc]: find any of the characters btw the brackets
// [0-9]: find any of the digits btw the brackets
// (x|y): find any of the alternatives seperated with |
//-- Metacharacters are characters with a special meaning:
// \d: find a digit
// \s: find a whitespace character
// \b: find a match at the beginning of the word like this: \bWORD, or at the end of a word like this: WORD\b
// \uxxxx: find the unicode character specified by the hexadecimal number xxxx
//-- Quantifiers define quantities:
// n+: matches any string that contains at least one n
// n*: matches any string that contains zero or more occurrences of n
// n?: matches any string that contains zero or one occurences of n

//-------------------------------------------
// Using the RegExp Object: In Js, the RegExp object is a regular expression object with predefined properties and methods

// Using test(): method is a RegExp expression method
// It searches a string for a pattern, and returns true or false, depending on the result
// The following example searches a string for the character 'e'.
// const pattern = /e/;
// console.log(pattern.test('The best things in life are free!')); // Since there is an 'e' in the string, the output of the code above will be: true
//-- You dont have to put the regular expression in a variable first. The two lines above can be shortened to one:
console.log(/e/.test('The best things in life are free!'));

//-------------------------------------------
// Using exec(): method is a RegExp expression method
// It searches a string for a specified pattern and returns the found text as an object
// If no match is found, it returns an empty (null) object
// The following example searches a string for the character 'e'.
console.log(/e/.exec('The best things in life are free!'));