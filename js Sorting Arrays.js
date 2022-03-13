// SORTING AN ARRAY The sort() methods sorts an array alphabetically:
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// fruits.sort();
// document.getElementById('demo').innerHTML = fruits;
//--------------------------------------------

// REVERSING AN ARRAY: The reverse() methods reverses the elements in an array, it can be used to sort an array in descending order:
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.sort();
fruits.reverse();
document.getElementById('demo').innerHTML = fruits;
//--------------------------------------------
// NUMERIC SORT: By default, the sort() function sorts values as strings
// This works well for strings ('Apple' comes before 'Banana').
// However, if numbers are sorted as strings, '25' is bigger than '100', because '2' is bigger than '1'. Thus produces incorrect result when sorting numbers.
// You can fix this by comparing a compare function:
// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort((a ,b) => b - a));

//--------------------------------------------
// THE COMPARE FUNCTION: The purpose of the compare function is to define an alternative sort order
// The CompareFn should return a negative, zero, or positive value, depending on the arguments:
// sort((a, b) => a - b)
// When the sort() function compares two values, it sends the values to the compareFn, and sorts the values according to the returned (negative, zero, positive) value.
// If the result is negative, 'a' is sorted before 'b'.
// If the result is positive, 'b' is sorted before 'a'.
// If the result is 0, no changes are done with the sort order of the two values.
// Example: The compareFn compares all the values in the array, two values at a time (a, b).
// When comparing 40 and 100, the sort() method calls the compare function(40, 100)
// The function calculates 40 - 100 (a - b), and since the result is negative (-60), the sort function will sort 40 as a value lower than 100.

//--------------------------------------------
// SORTING AN ARRAY IN RANDOM ORDER: 
// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort((a, b) => 0.5 - Math.random()));

//--------------------------------------------
// THE FISHER YATES METHOD: The above example, 'array.sort()', is not accurate, it will favor some numbers over the others.
// The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!
// In Javascript, the method can be translated to this:
const points = [40, 100, 1, 5, 25, 10];
for (let i = points.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * 1)
    let k = points[i];
    points[i] = points[j]
    points[j] = k
    
}
console.log(points);

//--------------------------------------------
// Finding the Highest (or Lowest) Array Value: There is no built-in functions for finding the max or min value in an array.
// However, after you have sorted an array, you can use the index to obtain the highest and lowest values.
// Sorting Ascending:
// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => a - b);
// -- 'points[0]' contains the lowest value and 'point[points.lenght - 1]' contains the highest value

// Sorting Descending:
// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => b - a);
// -- 'points[0]' contains the highest value and 'point[points.lenght - 1]' contains the lowest value

// N.B: Sorting a whole array is a very inefficient method if you only want to find the highest (or) lowest value.

//--------------------------------------------
// Using Math.max() on an Array: You can use 'Math.max.apply' to find the highest number in an array:
function myArrayMax(_arr) {
    return Math.max.apply(null, [1, 2, 3])
}

function myArrayMac(_arr) {
    return Math.max(1, 2, 3);
}

console.log(myArrayMac());

console.log(myArrayMax());

// -- 'Math.max.apply(null, [1, 2, 3])' is equivalent to 'Math.max(1, 2, 3)'.

//--------------------------------------------
// Using Math.min() on an Array: You can use 'Math.min.apply' to find the lowest number in an array:
function myArrayMin(_arr) {
    return Math.min.apply(null, [1, 2, 3])
}

function myArrayMic(_arr) {
    return Math.min(1, 2, 3);
}

console.log(myArrayMic());

console.log(myArrayMin());

// -- 'Math.min.apply(null, [1, 2, 3])' is equivalent to 'Math.min(1, 2, 3)'.

//--------------------------------------------
// My Min / Max Javascript Methods: Fastest solution to use a 'home made' method.
// This function loops through an array comparing each value with the greatest value found:
function myArrayMax(arr) {
    let len = length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

// This function loops through an array comparing each value with the lowest value found:
function myArrayMin(arr) {
    let len = length;
    let min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            max = arr[len];
        }
    }
    return min;
}

//--------------------------------------------
// Sorting Object Arrays: Js Arrays often contain objects:
const cars = [
    {type: 'Volvo', year: 2016},
    {type: 'Saab', year: 2001},
    {type: 'BMW', year: 2010}
];
// Even if objects have properties of different data types, the 'sort()' method can be used to sort the array.
// The solution is to write a compareFn to compare the property values:

// console.log(cars.sort((a, b) => a.year - b.year));

// Comparing string properties is a little more complex:
cars.sort((a, b) => {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;} 
    if (x > y) {return 1;} 
    return 0
});
console.log(cars);
