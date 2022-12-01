// Arrays

// Declaration
// There are two syntaxes for creating an empty array:

// let arr = new Array();
// let arr = [];

// Almost all the time, the second syntax is used. We can supply initial elements in the brackets:

// let fruits = ["Apple", "Orange", "Plum"];
// Array elements are numbered, starting with zero.

// We can get an element by its number in square brackets:

// let fruits = ["Apple", "Orange", "Plum"];

// alert( fruits[0] ); // Apple
// alert( fruits[1] ); // Orange
// alert( fruits[2] ); // Plum

// We can replace an element:

// fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]
// …Or add a new one to the array:

// fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]
// The total count of the elements in the array is its length:

// let fruits = ["Apple", "Orange", "Plum"];

// alert( fruits.length ); // 3

// at()

// let fruits = ["Apple", "Orange", "Plum"];

// // same as fruits[fruits.length-1]
// alert( fruits.at(-1) ); // Plum

// Methods pop/push, shift/unshift

// push appends an element to the end.
// shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

// push adds an element to the end.
// pop takes an element from the end.

// Loops

// let arr = ["Apple", "Orange", "Pear"];

// for (let i = 0; i < arr.length; i++) {
//   alert( arr[i] );
// }

// let fruits = ["Apple", "Orange", "Plum"];

// // iterates over array elements
// for (let fruit of fruits) {
//   alert( fruit );
// }
