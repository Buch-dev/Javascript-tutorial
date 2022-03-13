// Set Date Methods: let you see date values(years, months, days, hours, minutes, seconds, milliseconds) for a Date Object. They are used for setting a part of date:
// setDate(): Set the day as a number(1-31)
// setFullYear(): set the year(optionally month and day)
// setHours(): set the hour (0-23)
// setMilliseconds(): set the milliseconds (0-999)
// setMinutes(): set the minutes (0-59)
// setMonth(): set the month (0-11)
// setSeconds(): set the seconds (0-59)
// setTime(): set the time (milliseconds since January 1, 1970)

//----------------------------------------------------
// The setFullYear() Method: sets the year of a date object. In this example to 2020:
// const d = new Date();
// document.getElementById('demo').innerHTML = d.setFullYear(2020);

// The setFullYear() method can optionally set month and day:
// const d = new Date();
// d.setFullYear(2020, 09, 27);
// document.getElementById('demo').innerHTML = d;
// console.log(d);

//----------------------------------------------------
// The setMonth() Method: sets the month of a date object (0-11):
// const d = new Date();
// d.setMonth(11)
// document.getElementById('demo').innerHTML = d;

// console.log(d);

//----------------------------------------------------
// The setDate() Method: sets the day of a date object(1-31):
// const d = new Date();
// d.setDate(11)
// document.getElementById('demo').innerHTML = d;
// console.log(d);

// The setDate() method can also be used to add days to a date:
// const d = new Date();
// d.setDate(d.getDate() + 50);
// document.getElementById('demo').innerHTML = d;
// console.log(d);
// If adding days shifts the month of the year, the changes are handled automatically by the Date object.

//----------------------------------------------------
// The setHours() Method: sets the hours of a date object (0-23):
// const d = new Date();
// d.setHours(22);
// document.getElementById('demo').innerHTML = d;
// console.log(d);

//----------------------------------------------------
// The setMinutes() Method: sets the minutes of a date object (0-59):
// const d = new Date();
// d.setMinutes(22);
// document.getElementById('demo').innerHTML = d;
// console.log(d);

//----------------------------------------------------
// The setSeconds() Method: sets the seconds of a date object (0-59):
// const d = new Date();
// d.setSeconds(22);
// document.getElementById('demo').innerHTML = d;
// console.log(d);

//----------------------------------------------------
// Compare Dates: Dates can be easily compared.
// The following exp compares today's date with January 14, 2100:
let text = '';
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = 'Today is before January 14, 2100.';
} else {
    text = 'Today is after January 14, 2100.'
}
document.getElementById('demo').innerHTML = text;
console.log(text);
