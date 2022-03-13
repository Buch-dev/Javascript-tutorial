// The Js Math object allows you to perform mathematical tasks on numbers/
// console.log(Math.PI);

//------------------------------------------
// The Math Object: Unlike other objects, the Math object has no constructor
// The Math object is static
// All methods and properties can be used without creating a Math object first.

//------------------------------------------
// Math Properties(Constants): The syntax for any Math property is: 'Math.property'.
// Javascript provides 8 mathematical constants that can be accessed as Math properties:
// Math.E: returns Euler's number
// Math.PI: returns PI
// Math.SQRT2: returns the square root of 2
// Math.SQRT1_2: returns the square root of 1/2
// Math.LN2: returns the natural log of 2
// Math.LN10: returns the natural log of 10
// Math.LOG2E: returns base 2 log of E
// Math.LOG10E: returns base 10 log of E

//------------------------------------------
// Math Methods: The syntax for any methods is: Math.method(number)

//------------------------------------------
// Number to Integer: There are 4 common methods to round a number to an integer:
// Math.round(x): Returns x rounded to its nearest integer
// Math.ceil(x): Returns x rounded up to its nearest integer
// Math.floor(x): Returns x rounded down to its nearest integer
// Math.trunc(x): Returns the integer part of x (new in ES6)

//------------------------------------------
// Math.round(x): returns the nearest integer:
// console.log(Math.round(4.9));
// console.log(Math.round(4.7));
// console.log(Math.round(4.4));
// console.log(Math.round(4.2));
// console.log(Math.round(-4.2));
// console.log(Math.round(-4.7));

//------------------------------------------
// Math.ceil(x): returns the value of x rounded up to its nearest integer:
// console.log(Math.ceil(4.9));
// console.log(Math.ceil(4.7));
// console.log(Math.ceil(4.4));
// console.log(Math.ceil(4.2));
// console.log(Math.ceil(-4.2));
// console.log(Math.ceil(-4.7));

//------------------------------------------
// Math.floor(x): returns the value of x rounded down to its nearest integer:
// console.log(Math.floor(4.9));
// console.log(Math.floor(4.7));
// console.log(Math.floor(4.4));
// console.log(Math.floor(4.2));
// console.log(Math.floor(-4.2));
// console.log(Math.floor(-4.7));

//------------------------------------------
// Math.trunc(x): returns the integer part of x
// console.log(Math.trunc(4.9));
// console.log(Math.trunc(4.7));
// console.log(Math.trunc(4.4));
// console.log(Math.trunc(4.2));
// console.log(Math.trunc(-4.2));
// console.log(Math.trunc(-4.7));

//------------------------------------------
// Math.sign(x): returns if x is negative, null or positive:
// console.log(Math.sign(-4));
// console.log(Math.sign(0));
// console.log(Math.sign(4));

//-- Math.trunc() and Math.sign() were added to Javascript 2015 - ES6.

//------------------------------------------
// Math.pow(): Math.pow(x, y) returns the value of x to the power of y:
// console.log(Math.pow(8, 2));

//------------------------------------------
// Math.sqrt(x): returns the square root of x:
// console.log(Math.sqrt(64));

//------------------------------------------
// Math.abs(x): returns the absolute (positive) value of x:
// console.log(Math.abs(-4.7));

//------------------------------------------
// Math.sin(x): returns the sine (a value between -1 and 1) of the angle x (given in radians).
// If you want to use degrees instead of radians, you have to convert degrees to radians:
// Angle in radians = Angle in degrees x PI / 180.
console.log(Math.sin(90 * Math.PI / 180)); // returns 1 (the sine of 90 degrees)

//------------------------------------------
// Math.cos(x): returns the cosine (a value between -1 and 1) of the angle x (given in radians).
// If you want to use degrees instead of radians, you have to convert degrees to radians:
// Angle in radians = Angle in degrees x PI / 180.
console.log(Math.cos(0 * Math.PI / 180)); // returns 1 (the cos of 90 degrees)

//------------------------------------------
// Math.min() and Math.max(): can be used to find the lowest and highest value in a list of arguments:
console.log(Math.min(0, 150, 30, -8, -200)); // returns -200

console.log(Math.max(0, 150, 30, -8, -200)); // returns 150

//------------------------------------------
// Math.random(): returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(Math.random()); // returns a random number

//------------------------------------------
// The Math.log(x): returns the natural log of x:
console.log(Math.log(1)); // returns 0

// The natural log returns the time needed to reach a certain level of growth.
// Math.E and Math.log() are twins.
// How many times must we multiply Math.E to get 10?
console.log(Math.log(10)); // returns 2.3025...

//------------------------------------------
// The Math.log2(x) Method returns the base 2 log of x.
// How many times must we multiply 2 to get 8?
console.log(Math.log2(8)); // returns 3

//------------------------------------------
// The Math.log10(x) Method: returns the base 10 log of x.
// How many times must we multiply 10 to get 1000?
console.log(Math.log10(1000)); // returns 3

//------------------------------------------
// Math Object Methods:
// abs(x): Returns the absolute value of x
// acos(x): Returns the arccosine of x, in radians
// acosh(x): Returns the hyperbolic arccosine of x
// asin(x): Returns the arcsine of x, in radians
// asinh(x): Returns the hyperbolic arcsine of x
// atan(x): Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan(y, x): Returns the arctangent of the quotient of its arguments
// atanh(x): Returns the hyperbolic arctangent of x
// cbrt(x): Returns the cubic root of x
// ceil(x): Returns x, rounded upwards to the nearest integer
// cos(x): Returns the cosine of x (x is in radians)
// cosh(x): Returns the hyperbolic cosine of x
// exp(x): Returns the value of E^x
// floor(x): Returns x, rounded downwards to the nearest integer
// log(x): Returns the natural log (base E) of x
// max(x, y, z, ..., n): Returns the number with the highest value
// min(x, y, z, ..., n): Returns the number with the lowest value
// pow(x, y): Returns the value of x to the power of y
// random(): Returns a random number between 0 and 1
// round(x): Rounds x to the nearest integer
// sign(x): Returns if x is negative, null or positive (-1, 0, 1)
// sin(x): Returns the sine of x (x is in radians)
// sinh(x): Returns the hyperbolic sine of x
// sqrt(x): Returns the square root of x
// tan(x): Returns the tangent of an angle
// tanh(x): Returns the hyperbolic tangent of a number
// trunc(x): Returns the integer part of a number (x) 