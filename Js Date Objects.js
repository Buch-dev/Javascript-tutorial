// Js Date Object lets us work with dates:
// const date = new Date()
// console.log(date);

//--------------------------------------
// Creating Date Objects: Date objects are created with the new Date() constructor.
// There are 4 ways to create a new date object:
// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)

//--------------------------------------
// new Date(): creates a new date object with the current date and time:
// const date = new Date()
// console.log(date);
// Date objects are static. The computer time is ticking, but date objects are not.

//--------------------------------------
// new Date(year, month, ...): creates a new date object with a specified date and time.
// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
// const d = new Date(2018, 12, 12, 10, 33, 30, 0);
// console.log(d);
// Note: Javascript counts months from 0 to 11:
// January = 0.
// December = 11.
// Specifying a month higher than 11, will not esult in an error but add the overflow to the next year:
// const d1 = new Date(2018, 15, 24, 10, 33, 30, 0);
// console.log(d1);
// is the same as:
// const d2 = new Date(2019, 3, 24, 10, 33, 30, 0);
// console.log(d2);

// Specifying a day higher than max, will not result in an error but add the overflow to the next month:
// const d = new Date(2018, 5, 35, 10, 33, 30, 0);
// console.log(d);
// is same as:
// const d1 = new Date(2018, 6, 5, 10, 33, 30, 0);
// console.log(d1);

//--------------------------------------
// Using 6,4,3, or 2 Numbers: 6 numbers specify year, month, day, hour, minute, second:
// const d = new Date(2018, 11, 24, 10, 33, 30);
// console.log(d);
// 5 numbers specify year, month, day, hour and minute:
// const d = new Date(2018, 11, 24, 10, 33);
// console.log(d);
// 4 numbers specify year, month, day, hour:
// const d = new Date(2018, 11, 24, 10);
// console.log(d);
// 3 numbers specify year, month, day:
// const d = new Date(2018, 11, 24);
// console.log(d);
// 2 numbers specify year, month:
// const d = new Date(2018, 11);
// console.log(d);
// You cannot omit month, if you supply only one parameter it will be treated as milliseconds:
// const d = new Date(2018);
// console.log(d);

//--------------------------------------
// Previous Century: One or two digit years will be interpreted as 19xx.
// const d = new Date(99, 11, 24);
// console.log(d);

// const d = new Date(9, 11, 24);
// console.log(d);

//--------------------------------------
// new Date(dateString): new Date(dateString) creates a new object from a date string:
// const d = new Date('October 13, 2014 11:13:00');
// console.log(d);

//--------------------------------------
// Javascript Stores Dates as Milliseconds: Js stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
// Zero time is January 01, 1970 00:00:00 UTC.

//--------------------------------------
// new Date(milliseconds): creates a new date object as zero time plus milliseconds
// const d = new Date(0);
// console.log(d);

// 01 January 1970 plus 100 000 000 000 milliseconds is approximately 03 March 1973:
// const d = new Date(100000000000);
// console.log(d);

// 01 January 1970 plus 100 000 000 000 milliseconds is approximately 03 March 1973:
// const d = new Date(-100000000000);
// console.log(d);

// One day (24 hours) is 86 400 000 milliseconds.
// const d = new Date(86400000);
// console.log(d);

//--------------------------------------
// Date Methods: When a Date object is created, a number of methods allow you to operate on it
// Date methods allow you to get and set the year, month, day, hour, minute, second, and millisecond of date objects, using either local time or UTC (universal, or GMT) time.

//--------------------------------------
// Displaying Dated: Js will by default output dates in full text string format
// const d = new Date();
// document.getElementById('demo').innerHTML = d;
// Same as:
// const d = new Date();
// document.getElementById('demo').innerHTML = d.toString();

// The toUTCString() method converts a date to a UTC string (s date display standard).
// const d = new Date();
// document.getElementById('demo').innerHTML = d.toUTCString();

// The toDateString() method converts a date to a more readable format:
// const d = new Date();
// document.getElementById('demo').innerHTML = d.toDateString();

// The toISOString() method converts a Date object to a string, using the ISC standard format:
const d = new Date();
document.getElementById('demo').innerHTML = d.toISOString();

