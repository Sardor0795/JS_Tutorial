// Flag

// Freeze. Seal

// value, writable, enumerable, configurable

// let user = {
//   name: "Jim",
//   lastname: "Dale",
//   age: 25,
// };

// console.log(Object.getOwnPropertyDescriptor(user, "lastname"));

// Object.defineProperty(user, "age", { writable: false });

// console.log(Object.getOwnPropertyDescriptor(user, "age"));

// user.age = 27;

// Object.defineProperty(user, "name", { configurable: false });

// delete user.name;

// console.log(user);

// for (i in user) {
//   console.log(i);
// }

// Getter, Setter

// let user = {
//   name: "Jim",
//   lastname: "Dale",
//   age: 25,
//   get getFul() {
//     console.log(this.name, this.lastname);
//   },
//   //   set getFul(v) {
//   //     this.name = v.split(" ")[0];
//   //     this.lastname = v.split(" ")[1];
//   //   },
//   set getFul(v) {
//     this.name = v.name;
//     this.lastname = v.lastname;
//   },
// };

// // user.getFul = "Ann Jane";
// user.getFul = { name: "Ann", lastname: "Jane" };

// user.getFul;

// __proto__, Prototype ---

// let user = {
//   name: "Jim",
//   lastname: "Dale",
//   age: 25,
// };
// let user2 = {
//   name: "Ann",
//   lastname: "Jane",
//   age: 25,
//   job: "Teacher",
// };

// Object.assign(user, user2);

// user.__proto__ = user2;
// user.__proto__.family = 7;
// user.__proto__.func = () => {};

// console.log(user);
// console.log(user.job);
// console.log(user.family);
// console.log(user.func);

let user = {
  name: "Jim",
  lastname: "Dale",
  age: 25,
};
let user2 = {
  name: "Ann",
  lastname: "Bill",
  age: 25,
};

Object.prototype.getFullName = function () {
  console.log(this.name, this.lastname);
};

// user.getFullName();
// user2.getFullName();

let arr = [1, 2, 3, 4, 5, 6];

Array.prototype.dellIndex = function (n) {
  return this.filter((v) => v !== n);
};

console.log(arr);
console.log(arr.dellIndex(5));
