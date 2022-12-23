// Try catch ----
// try {
//   console.log(n);
// } catch {
//   console.log("Not working");
// }

// Callbacks ----

// let database = {
//   jim: {
//     name: "Jimmy",
//     login: "jim",
//     password: "jim",
//   },
//   ann: {
//     name: "Ann",
//     login: "anna",
//     password: "ann",
//   },
// };

// console.log("Start...");

// let login = (lg, pw) => {
//   setTimeout(() => {
//     if (database.jim.login == lg && database.jim.password == pw) {
//       return `Welcome ${database.jim.name}`;
//     } else {
//       return `Login yoki parol xato`;
//     }
//   }, 1000);
// };

// let res = login("jimmy", "jim");
// console.log(res);

// console.log("Finish...");

// console.log("Start...");

// let login = (lg, pw, callback) => {
//   setTimeout(() => {
//     if (database.jim.login == lg && database.jim.password == pw) {
//       return callback(`Welcome ${database.jim.name}`);
//     } else {
//       return callback(`Login yoki parol xato`);
//     }
//   }, 1000);
// };

// login("jimmy", "jim", (res) => {
//   console.log(res);
//   console.log("Finish...");
// });

// console.log("Start...");

// let login = (lg, pw, callback) => {
//   setTimeout(() => {
//     if (database.jim.login == lg && database.jim.password == pw) {
//       return callback(`Welcome ${database.jim.name}`);
//     } else {
//       return callback(`Login yoki parol xato`);
//     }
//   }, 1000);
// };

// const callback = (res) => {
//   console.log(res);
//   console.log("Finish...");
// };

// login("jimmy", "jim5", callback);

// Promise ----

// console.log("Start...");

// let user = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (database.jim.login == "jim" && database.jim.password == "jim5") {
//       return resolve(`Welcome ${database.jim.name}`);
//     } else {
//       return reject(`Login yoki parol xato`);
//     }
//   }, 1000);
// });

// user
//   .then((res) => console.log(res))
//   .catch((res) => console.log(res))
//   .finally(() => {
//     console.log("Finish...");
//   });

// Promise all

// let user = Promise.all([
//   new Promise((resolve, reject) => {
//     if (database.jim.login == "jim" && database.jim.password == "jim") {
//       return resolve(`Welcome ${database.jim.name}`);
//     } else {
//       return reject(`Login yoki parol xato`);
//     }
//   }),
//   new Promise((resolve, reject) => {
//     if (database.ann.login == "anna" && database.ann.password == "ann") {
//       return resolve(`Welcome ${database.ann.name}`);
//     } else {
//       return reject(`Login yoki parol xato`);
//     }
//   }),
// ]);

// user
//   .then((res) => console.log(res))
//   .catch((er) => console.log(er))
//   .finally(() => {
//     console.log("Succes");
//   });

// Async await

// console.log("Start...");

// let user = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (database.jim.login == "jim" && database.jim.password == "jim") {
//       return resolve(`Welcome ${database.jim.name}`);
//     } else {
//       return reject(`Login yoki parol xato`);
//     }
//   }, 1000);
// });

// const get = async () => {
//   let res = await user;
//   console.log(res);
//   console.log("Finished...");
// };

// get();
