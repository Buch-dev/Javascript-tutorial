// // function myFunction(p1, p2) {
// //     return p1 * p2;
// // }

// let x = myFunction(4, 3)

// function myFunction(a, b) {
//     return a * b;
// }

// console.log(x);

// Ex2: Convert Fahrenheit to Celcius
// function toCelcius(fahrenheit) {
//     return (5/9) * (fahrenheit - 32);
// }

// document.getElementById('demo').innerHTML = toCelcius(76)


function toCelcius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}

document.getElementById('demo').innerHTML = toCelcius

// Functions used as Variable Values
let x = toCelcius(77);
let text = 'The temperature is ' + x + ' Celsius'

// or 
// let text = 'The temperature is ' + toCelcius(77) + ' Celsius'

// function myFunction() {
//     document.getElementById('demo').innerHTML = 'Paragraph Changed.'
// }

function myFunction() {
    alert('Hello World!')
}

myFunction();