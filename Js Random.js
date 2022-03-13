// Math.random(): returns a random number between 0 (inclusive), and 1 (exclusive):
// console.log(Math.random()); // returns a random number
// Math.random() always return a number lower than 1

//------------------------------------
// Javascript Random Integers: Math.random() used with Math.floor() can be used to return random integer i.e numbers without decimals
// console.log(Math.floor(Math.random() * 10));

// Returns a random integer from 0 to 10:
// console.log(Math.floor(Math.random() * 11));

// Returns a random integer from 0 to 100:
// console.log(Math.floor(Math.random() * 101));

// Returns a random integer from 1 to 10:
// console.log(Math.floor(Math.random() * 10) + 1);

// Returns a random integer from 1 to 100:
// console.log(Math.floor(Math.random() * 100) + 1);

//------------------------------------
// A Proper Random Function: This Js function always returns a random number between min (included) and max (excluded):
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRndInteger(1, 3));
// This Js function always returns a random number between min and max (included):