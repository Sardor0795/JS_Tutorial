// Array advanced

// filter ---

// let arr = [10, 50, 30, 80, 90, 40, 60];

// let res = arr.filter((value, index, array) => {
//   console.log(value, index, array);
//   return value <= 50;
// });

// console.log(res);

// Sort ---

// let arrNum = [10, 50, 15, 23, 9, 66, 30, 80, 90, 40, 60];
// let arrStr = ["f", "r", "a", "b", "u"];

// arrNum.sort((a, b) => b - a);
// arrStr.sort((a, b) => b.localeCompare(a));

// console.log(arrNum);
// console.log(arrStr);

// Find ---

// let arrNum = [10, 50, 15, 23, 9, 66, 30, 80, 90, 40, 60];
// let arrStr = ["f", "r", "a", "b", "u"];

// let res = arrStr.find((v) => v == 'u');

// console.log(res);

// FindIndex ---

// let arrNum = [10, 50, 15, 23, 9, 66, 30, 80, 90, 40, 60];
// let arrStr = ["f", "r", "a", "b", "u"];

// let res = arrStr.findIndex((v) => v == 'b');

// console.log(res);

// ForEach ---

// let arrNum = [10, 50, 15, 23, 9, 66, 30, 80, 90, 40, 60];

// arrNum.forEach((v) => {
//   console.log(v);
// });

// Map ---

// let arrNum = [10, 50, 15, 23, 9, 66, 30, 80, 90, 40, 60];

// let res = arrNum.map((v) => {
//   return v;
// });

// console.log(res);

// Every ---

// let arrNum = [10, 10, 10, 10];

// let res = arrNum.every((v) => v == 10);

// console.log(res);

// Some ---

// let arrNum = [90, 60, 10, 30];

// let res = arrNum.some((v) => v == 10);

// console.log(res);

// Fill ---

// let arrNum = [90, 60, 10, 30, 50, 80, 70];

// arrNum.fill(10, 1, 5);

// console.log(arrNum);

// Flat ---

// let arr = [10, 20, 50, [50, 60, [40]], [10, [20, 50]], 50];

// let res = arr.flat(Infinity);

// console.log(res);

// Reduce ---

// let arrNum = [90, 60, 10, 30, 50, 80, 70];

// let res = arrNum.reduce((s, c) => s + c, 0);

// console.log(res);

// new Set ---

// let arr = [10, 50, 10, 60, 10, 80, 80, 80, 40, 40, 10];

// let res = new Set(arr);

// console.log(res);

// Copy With in ---

// let arr = [10, 50, 10, 60, 10, 80, 80, 80, 80, 40, 40, 10];

// arr.copyWithin(0, 5, 9);

// console.log(arr);

// Sort, copyWithin, Fill
