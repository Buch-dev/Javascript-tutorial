// Javascript Date Formats
// There are generally 3 types of Js date input formats:
// ISO Date: '2015-03-25' (The International Standard)
// Short Date: '03/25/2015'
// Long Date: 'Mar 25 2015' or '25 Mar 2015'

//-- The ISO format follows a strict standard in Javascript.
//-- The other formats are not well defined and might be browser specific

//------------------------------------------------
// Javascript Date Output: Independent of input format, Js will (by default) output dates in full text string format:
const defaultDate = new Date();
console.log(defaultDate);

//------------------------------------------------
// Javascript ISO Dates: The ISO 8601 syntax (YYYY-MM-DD) is also the preferred Js date format:
// const d = new Date('2015-03-25');
// console.log(d);

//------------------------------------------------
// ISO Dates (Year and Month): can be written without specifying the day (YYYY-MM)
// const d = new Date('2015-03');
// console.log(d);

//------------------------------------------------
// ISO Dates (Only Year): can be written without month and day (YYYY)
// const d = new Date('2015');
// console.log(d);

//------------------------------------------------
// ISO Dates (Date-Time): can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
// const d = new Date('2015-03-25T12:00:00Z');
// console.log(d);
// Date and time is seperated with capital T.
// UTC time is defined with a capital letter Z.
// If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:
// const d = new Date('205-03-25T12:00:00-06:30');
// console.log(d);
//-- UTC(Universal Time Coordinated) is the same as GMT(Greenwich Mean Time)
// Omitting T or Z in a date-time string can give different results in different browsers.

//------------------------------------------------
// Javascript Short Dates: are written with an 'MM/DD/YYYY' syntax like this:
// const d = new Date('03/25/2015');
// console.log(d);
// WARNING!: In some browsers, months or days with no leading zeroes may produce an error:
// const d = new Date('2015-3-25');
// console.log(d);
// Some browsers will try to guess the format. Some will return NaN or undefined
// const d = new Date('2015/03/25');
// console.log(d);

//------------------------------------------------
// Javascript Long Dates: are most often written with a 'MMM DD YYYY' syntax like this:
// const d = new Date('Mar 25 2015');
// console.log(d);
// Month and day can be in any order:
// const d = new Date('25 Mar 2015');
// And, month can be written in full (January), or abbreviated (Jan):
// const d = new Date('January 25 2015');
// console.log(d);
// Commas are Ignored, names are case insensitive:
// const d = new Date('JANUARY, 25, 2015');
// console.log(d);

//------------------------------------------------
// Date Input - Parsing Dates: If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
// It returns the number or millisecind btw the date and January 1, 1970:
// let msec = Date.parse('March 21, 2012');
// document.getElementById('demo').innerHTML = msec;
// You can use the number of milliseconds to convert it to a date objects:
let msec = Date.parse('March 21, 2012');
const d = new Date(msec);
document.getElementById('demo').innerHTML = d;