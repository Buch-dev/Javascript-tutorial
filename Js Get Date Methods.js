// Javascript Get Date Methods: can be used for getting information from a date object:
// getFullYear(): Get the year as a four digit number(yyyy)
// getMonth(): Get the month as a number (0-11)
// getDate(): Get the day as a number (1-31)
// getHours(): Get the hour (0-23)
// getMinutes(): Get the minute (0-59)
// getSeconds(): Get the second (0-59)
// getMilliseconds: Get the millisecond (0-999)
// getTime(): Get the time (millisecinds since January 1, 1970)
// getDay(): Get the weekday as a number (0-6)
// Date.now(): Get the time ECMAScript 5.

//----------------------------------------------------
// The getTime() Method: returns the number of milliseconds since January 1, 1970:
// const d = new Date();
// document.getElementById('demo').innerHTML = d.getTime();

//----------------------------------------------------
// The getFullYear() Method: returns the year of a date as a four digit number:
// const d = new Date();
// document.getElementById('demo').innerHTML = d.getFullYear();

//----------------------------------------------------
// The getMonth() Method: returns the month of a date as a number (0-11):
// const d = new Date();
// document.getElementById('demo').innerHTML = d.getMonth();

//----------------------------------------------------
// You can use an array of names, and getMonth() to return the month as a name:
// const d = new Date();
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// document.getElementById('demo').innerHTML = months[d.getMonth()];

//----------------------------------------------------
// The getDate() Method: returns the day of a date as a number (1-31):
// const d = new Date();
// document.getElementById('demo').innerHTML = d.getDate();

//----------------------------------------------------
// The getHours() Method: returns the hours of a date as a number(0-23):
// const d = new Date();
// document.getElementById('demo').innerHTML = d.getHours();

//----------------------------------------------------
// The getMinutes() Method: returns the minutes of a date as a number (0-59):
// const d = new Date();
// document.getElementById('demo').innerHTML = d.getMinutes();

//----------------------------------------------------
// The getSeconds() Method: returns the seconds of the date as a number (0-59):
// const d = new Date();
// document.getElementById('demo').innerHTML = d.getSeconds();

//----------------------------------------------------
// The getMilliseconds() Method: returns the milliseconds of a date as a number (0-999):
// const d = new Date();
// document.getElementById('demo').innerHTML = d.getMilliseconds();

//----------------------------------------------------
// The getDay() Method: returns the weekday of a date as a number(0-6):
// const d = new Date();
// document.getElementById('demo').innerHTML = d.getDay();
//-- In Javascript, the first day of the week (0) means 'Sunday', even if some countries in the world consider the first day of the week to be 'Monday'

// You can use an array of names, and getDay() to return the weekday as a name:
const d = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
document.getElementById('demo').innerHTML = days[d.getDay()];

//----------------------------------------------------
// UTC Date Methods: are used for working with UTC dates(Universal Time Zone Dates):
// getUTCDate(): Same as getDate(), but returns the UTC date
// getUTCDay(): Same as getDay(), but returns the UTC day
// getUTCFullYear(): Same as getFullYear(), but returns the UTC year
// getUTCHours(): Same as getHours(), but returns the UTC hour
// getUTCMilliseconds(): Same as getMilliseconds(), but returns the UTC milliseconds
// getUTCMinutes(): Same as getMinutes(), but returns the UTC minutes
// getUTCMonth(): Same as getMonth(), but returns the UTC month
// getUTCSeconds(): Same as getSeconds(), but returns the UTC seconds


