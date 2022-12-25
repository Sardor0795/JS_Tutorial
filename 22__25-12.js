// Generator function

// function* getValue() {
//   yield 1, yield 2;
//   yield 3;
// }

// let gen = getValue();
// let gen1 = getValue();
// let gen2 = getValue();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen1.next());
// console.log(gen1.next());

// for (i of gen) {
//   console.log(i);
// }

// let arr = [...gen];
// console.log(arr);

// Use case ----

// function* getId() {
//   let id = users.length;
//   while (true) {
//     yield ++id;
//   }
// }

// let gen = getId();

// let users = [
//   { id: 1, name: "user" },
//   { id: 2, name: "user" },
//   { id: 3, name: "user" },
//   { id: 4, name: "user" },
//   { id: 5, name: "user" },
//   { id: 6, name: "user" },
// ];

// let del = (id) => {
//   return (users = users.filter((v) => v.id !== id));
// };

// let add = (user) => {
//   return (users = [...users, { id: gen.next().value, name: user }]);
// };

// console.log(users);
// add("user");
// add("user");
// del(5);
// del(6);
// add("user");
// add("user");
// console.log(users);

// Can get params

// function* getVal(p) {
//   for (i of p) {
//     // console.log(i);
//     yield i;
//   }
// }

// let g = getVal([1, 2, 6, 4]);

// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// Param in next(5) ----

// function* getVal() {
//   let c = 0;
//   while (true) {
//     let g = yield ++c;
//     if (g) c += g;
//   }
// }

// let gen = getVal();

// console.log(gen.next());
// console.log(gen.next(2));
// console.log(gen.next(2));
// console.log(gen.next(1));

// Modules

// export let users = [
//   { id: 1, name: "user1" },
//   { id: 2, name: "user2" },
//   { id: 3, name: "user3" },
//   { id: 4, name: "user4" },
//   { id: 5, name: "user5" },
//   { id: 6, name: "user6" },
// ];

// let p = 5;

// function name(params) {
//   console.log(5);
// }
// name();
