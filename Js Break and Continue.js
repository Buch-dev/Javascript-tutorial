// The break statement 'jumps out' of a loop.
// The continue statement 'jumps over' one iteration in the loop.

//---------------------------------
// The Break Statement: can be used to jump out of a loop:
// let text = '';
// for (let i = 0; i < 10; i++) {
//     if (i === 3) {break;}
//     text += 'The number is ' + i + '<br>';
// }

// console.log(text);

// In the exp above, the break statement ends the loop ('breaks' the loop) when the loop counter (i) is 3.

//---------------------------------
// The Continue Statement: breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop
// The exp skips the value of 3:
let text = '';
for (let i = 0; i < 10; i++) {
    if (i === 3) {continue;}
    text += 'The number is ' + i + '<br>';
}
console.log(text);

//---------------------------------
// Javascript Labels: To label Js statements you precede the statements with a label name and a colon:
// label:
// statements

// The break and the continue statements are the only Js statements that can 'jump out' of a code block
// Syntax
// break labelname;
// continue labelname;

//-- The continue statment (with or without a label reference) can only be used to skip one loop iteration
//-- The break statement, without a label reference, can only be used to jump out of a loop or a switch
//-- With a label reference, the break statement can be used to jump out of any code block
const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
list: {
    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    break list;
    text += cars[2] + "<br>";
    text += cars[3] + "<br>";
}