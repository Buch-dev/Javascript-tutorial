// JSON is a format for storing and transporting data
// JSON is often used when data is sent from a server to a web page

// What is JSON?
//-- JSON stands for Javascript Object Notation
//-- JSON is a lightweight data interchange format
//-- JSON is language independent
//-- JSON is self-descibing and easy to understand

// The JSON syntax is deived from Js object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language

//---------------------------------------------
// JSON Example: This JSON syntax defines an employees object: an array of 3 employee records (objects):
// {
//     "employees":[
//         {"firstName": "John", "lastName": "Doe"},
//         {"firstName": "Anna", "lastName": "Smith"},
//         {"firstName": "Peter", "lastName": "Jones"}
//     ]
// }

//---------------------------------------------
// The JSON Format Evaluates to Javascript Objects: The JSON format is syntactically identical to the code for creating Js Objects.
// Because of this similarity, a Js program can easily convert JSON data into native Js Objects.

//---------------------------------------------
// JSON Syntax Rules
//-- Data is in name/value pairs
//-- Data is seperated by commas
//-- Curly braces hold objects
//-- Square brackets hold arrays

//---------------------------------------------
// JSON Data - A Name and a Value: JSON data is written as name/value pairs, just like JS object properties.
// A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:
// "firstName": "John"
// JSON names requires double quotes. Js names do not.

//---------------------------------------------
// JSON Objects: JSON objects are written inside curly braces
// Just like in Js, objects can contain multiple name/value pairs:
// {"firstName": "John", "lastName": "Doe"}

//---------------------------------------------
// JSON Arrays: are written inside square brackets.
// Just like in Js, an array can contain objects:
// "employees":[
    // {"firstName": "John", "lastName": "Doe"},
    // {"firstName": "Anna", "lastName": "Smith"},
    // {"firstName": "Peter", "lastName": "Jones"}
// ]
// In the example above, the object "employees" is an array. It contains three objects.
// Each object is a record of a person (with a first name and a last name).

//---------------------------------------------
// Converting a JSON Text to a Js Object: A common use of JSON is to read data from a web server, and display the data in a web page.
// For simplicity, this can be demonstrated using a string as input
// First, create a Js string containing JSON syntax:
let text = `{ "employees": [ 
    { "firstName: "John", "lastName": "Doe" }, 
    { "firstName: "Anna", "lastName": "Smith" }, 
    { "firstName: "Peter", "lastName": "Jones" } ]}`;

 // Then use the Js built-in function JSON.parse() to convert the string into a Js object:
const obj = JSON.parse(text);

// Finally, use the new Js object in your page:
document.getElementById('demo').innerHTML = 
obj.employees[1].firstName + " " +
obj.employees[1].lastName;