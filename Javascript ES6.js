// This chapter describes the most important features of ES6

// Javascript let: The let keyword allows you to declare a variable with block scope
var x = 10;
// Here x is 10
{
    let x = 2;
    // Here x is 2
}
// Here x is 10

//---------------------------------------------
// Javascript const: The const keyword allows you to declare a constant (a Js variable with a constant value)
// Constants are similar to let variables, except that the value cannot be changed
var x = 10;
// Here x is 10
{
    const x = 2;
    // Here x is 2
}
// Here x is 10

// ...

// Javascript Promises: A promise is a Js object that links 'Producing Code' and 'Consuming Code'
// 'Producing Code' can take some time and 'Consuming Code' must wait for the result
// Promise Syntax:
const myPromise = new Promise(function (myResolve, myReject) {
    // Producing Code (May take some time)

    myResolve();  // when successful
    myReject();  // when error
});

// Consuming Code (Must wait for a fulfilled Promise)
myPromise.then(
    function (value) {
        // Code if successful
    }
    function (error) {
        // Code if some error
    }
)