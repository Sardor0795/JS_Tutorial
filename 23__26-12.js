// Curry function

// let getValue = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// };

// console.log(getValue(2)(2)(2));

// let getValue = a => b => c => a + b + c;

// console.log(getValue(2)(2)(2));

// const getValue = (type) => {
//   return (a) => (b) => (c) => {
//     switch (type) {
//       case "add":
//         return a + b + c;
//         break;
//       case "multipy":
//         return a * b * c;
//         break;
//       case "devide":
//         return a / b / c;
//         break;
//     }
//   };
// };

// let math = getValue("add");

// console.log(math(2)(2)(2));
// console.log(getValue("devide")(2)(2)(2));

// Proxy ---  -> use only non-primitives

// let obj = {
//   name: "Sardor",
//   _stir: "12345",
// };

// let proxy = new Proxy(obj, {
//   get(target, property) {
//     if (property.startsWith("_")) return `Access for ${property} dont allowed`;
//     return target[property];
//   },
//   set(target, property, value) {
//     if (property == "_stir") {
//       return false;
//     }
//     target[property] = value;
//   },
// });

// proxy._stir = 605;

// console.log(proxy._stir);
