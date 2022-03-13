// The 'try' statement lets you test a block of error
// The 'catch' statement lets you handle the error
// The 'throw' statement lets you create custom errors
// The 'finally' statemment let you execute code, after 'try' and 'catch', regardless of the result

// In this exp, we misspelled 'alert' as 'adddlert' to deliberately produce an error:
try {
    adddlert('Welcome guest!')
} catch (err) {
    document.getElementById('demo').innerHTML = err.message;
} 

// Javascript catches adddlert as an error, and executes the catch code to handle it

//--------------------------------------------
// Javascript try and catch
// The try statement allows you to define a block of code to be tested for errors while it is being executed
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block
// The Js statements try and catch come in pairs:
// try {
//     Block of code to try    
// } catch (error) {
//     Block of code to handle errors
// }

//--------------------------------------------
// Javascript Throw Errors: When an error occurs, Js will normally stop and generate an error message.
// The technical term for this is: Js will throw an exception (throw an error)
//-- Js will actually create an Error object with two properties: name and message

//--------------------------------------------
// The throw statement: allows you to create a custom error
// Technically you can throw an exception (throw an error)
// The exception can be a Js String, a Number, a Boolean or an Object:
throw 500;
// If you use throw togethet with try and catch, you can control program flow and generate custom error messages

//--------------------------------------------
// Input Validation Example: The exp examines input. If thw value is wrong, an exception (err) is thrown
// The exception (err) is caught by the catch statement and a custom error msg is displayed
// function myFunction() {
//     const message = document.getElementById('p01');
//     message.innerHTML = '';
//     let x = document.getElementById('demo').value;
//     try {
//         if (x == '') throw 'empty';
//         if (isNaN(x)) throw 'not a number';
//         x = Number(x);
//         if (x < 5) throw 'too low';
//         if (x > 5) throw 'too high';
//     } catch (err) {
//         message.innerHTML = 'Input is ' + err;
//     }
// }

//--------------------------------------------
// HTML Validation: The code above is just an example.
// Modern browsers will oftne use a combination of Js and built-in HTML validation, using prededined vaidation rules defined in HTML attributes
// <input id='demo' type='number' min='5' max='10' step='1'>
// You can read more abt validation in a later chapter

//--------------------------------------------
// The finally statement: lets you execute code after try and catch, regardless od the result:
// try {
//     Block of code to try
// } catch (err) {
//     Block of code to handle erroes
// }
// finally {
//     Block of code to be executed regardless od the try / catch result
// }
function myFunction() {
    const message = document.getElementById('p01');
    message.innerHTML = '';
    let x = document.getElementById('demo').value;
    try {
        if (x == '') throw 'empty';
        if (isNaN(x)) throw 'not a number';
        x = Number(x);
        if (x < 5) throw 'too low';
        if (x > 5) throw 'too high';
    } catch (err) {
        message.innerHTML = 'Input is ' + err;
    }
    finally {
        document.getElementById('demo').value = '';
    }
}

//--------------------------------------------
// The Error Object: Visit W3Schools for the remains of this chapter