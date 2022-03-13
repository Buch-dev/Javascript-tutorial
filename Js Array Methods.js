// Converting Arrays to Strings: 'toString()' converts an array to a string of (comma seperated) array values:
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// document.getElementById('demo').innerHTML = fruits.toString();
// -------------------------------
// The Join() method also joins all array elements into a string. It behaves just like 'toString()', but in addition you can specify the seperator:
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// document.getElementById('demo').innerHTML = fruits.join(' * ');
// -------------------------------
// Popping: The pop() method removes the last element from an array:
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(fruits.pop());
// document.getElementById('demo').innerHTML = fruits;
// -------------------------------
// Pushing: The push() method adds a new element to an array (at the end);
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(fruits.push('Kiwi'));
// document.getElementById('demo').innerHTML = fruits;
// -------------------------------
// Shifting Elements: Equivalent to popping, working on the first element instead of the last. The 'shift()' method removes the first array element and 'shifts' all other elements to a lower index:
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(fruits .shift()); // Returns the value that was 'shifted out'
// -------------------------------
// The 'unshift()' method adds a new element to an array (at the beginning), and 'unshift' older elements:
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(fruits.unshift('Lemon')); // Returns the new array length
// document.getElementById('demo').innerHTML = fruits;
// -------------------------------
// Changing Elements: Array elements are accessed using their index number:
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// fruits[0] = 'Kiwi';
// console.log(fruits);

// The length property provides an easy way to append a new element to an array:
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// fruits[fruits.length] = 'Kiwi';
// console.log(fruits);
// -------------------------------
// Deleting Elements: Elements can be deleted by using the Javascript operator 'delete';
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(delete fruits[0]); // Changes the first element in fruits to undefined || returns true
// document.getElementById('demo').innerHTML = fruits;
// -- Using 'delete' may leave undefined holes in the array. Use pop() of shift() instead. --
// -------------------------------
// Splicing an Array: Used to add new items to an array:
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(fruits.splice(2, 0, 'Lemon', 'Kiwi'));
// document.getElementById('demo').innerHTML = fruits;
// -- The first parameter(2) defines the position where new elements should be added (spliced in)
// -- The second parameter (0) defines how many elements should be removed
// -- The rest of the parameters('Lemon', 'Kiwi') define the new elements to be added
// -- The splice() method returns an array with the deleted items:
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// fruits.splice(2, 2, 'Lemon', 'Kiwi');
// document.getElementById('demo').innerHTML = fruits;

// Using splice() to remove elements without leaving 'holes' in the array:
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// fruits.splice(0, 1); // Removes the first element 'Banana'
// document.getElementById('demo').innerHTML = fruits;
// -------------------------------
// Merging (Concatenating) Arrays: The concat() method creates a new array by merging (concatenating) existing arrays:
// const myGirls = ['Cecilie', 'Lone'];
// const myBoys = ['Emil', 'Tobias', 'Linus'];
// const myChildren = myGirls.concat(myBoys);
// document.getElementById('demo').innerHTML = myChildren;
// console.log(myGirls.concat(myBoys));
// -- The concat() method does not change the existing array. It always returs a new array
// -- The concat() method and take any number of array arguments:
// const arr1 = ['Cecilie', 'Lone'];
// const arr2 = ['Emil', 'Tobias', 'Linus'];
// const arr3 = ['Robin', 'Morgan'];
// const myChildren = arr1.concat(arr2, arr3);
// document.getElementById('demo').innerHTML = myChildren;
// console.log(myChildren);

// The concat() method cam also take strings as arguments:
const arr1 = ['Emil', 'Tobias', 'Linus'];
const myChildren = arr1.concat('Peter');
console.log(myChildren);
// -------------------------------
// Slicing an Array: The slice() method slices out a piece of an array into a new array.
// This example slices out a part of an array starting from array element 1 ('Orange');
// const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// const citrus = fruits.slice(1);
// console.log(citrus);
// -- The slice() method creates a new array. It does not remove any elements from the source array
// This example slices out a part of an array starting from array element 3 ('Apple')
// const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// const citrus = fruits.slice(3);
// console.log(citrus);

// -- The slice() method can take two arguments like slice(1, 3).
// -- The method then selects elements from the start argument, and up to (but not including) the end argument.
// const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);
// If the end argument is ommitted, like the first examples, the slice() method slices out the rest of the array
// const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// const citrus = fruits.slice(2);
// console.log(citrus);
// -------------------------------
// Automatic toString(): Javascript automatically converts an array to a comma seperated string when a primitive value is expected.
// This is always the case when you try to output an array
// This two exanple will produce the same result
// const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// document.getElementById('demo').innerHTML = fruits;

// const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// document.getElementById('demo').innerHTML = fruits.toString();
// All Javascript objects have a toString() method.
const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
console.log(fruits.slice(4));
document.getElementById('demo').innerHTML = fruits.slice(4);