//  IIFE

// window, globalThis, global

// globalThis.animal = "Camel";

// (function () {
//   var car = "BMW";
//   console.log(globalThis.animal);
// })();

// console.log(car);

// Function object ----

// let func = (...res) => {
//   name: "Jim";
//   age: 25;
//   console.log(...res);
// };

// func("a", "b", 5);

// let myFunc = new Function('console.log(5)');

// myFunc()

// NFE ---

// const myFunc = function func(num) {
//   if (num == 0) return false;
//   console.log(5);
//   return func(num - 1);
// };

// myFunc(5);

// SetTimeOut ---

// console.log(1);

// function name(params) {
//   for (let i = 0; i < 10000; i++) {}
//   console.log(2);
// }
// name();

// setTimeout(
//   (param) => {
//     console.log(3, param);
//     setTimeout(() => {
//       console.log(4);
//     }, 1500);
//   },
//   3000,
//   "Sardor"
// );

// setTimeout(() => {
//   console.log(5);
// }, 1000);

// console.log(6);

// let setInt = setInterval(() => {
//   console.log("Hey");
// }, 500);

// setTimeout(() => {
//   clearInterval(setInt);
// }, 5000);
