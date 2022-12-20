// new Map, new Set WeakMap, WeakSet

// let map = new Map([
//   [5, 3],
//   [7, 6],
// ]);

// let obj = {
//   name: "Jim",
//   age: 25,
// };

// let get = () => {};

// map.set("key", "value").set(5, 5).set(undefined, NaN).set(obj, get);

// console.log(map);

// console.log(map.get(undefined));
// console.log(map.get(obj));
// console.log(map.has(9));
// map.delete(5);
// map.clear();
// console.log(map.size);

// console.log(map.values());
// console.log(map.keys());

// console.log(map.entries());
// for (i of map) {
//     console.log(i);
// }

// let n = map.entries();

// n.next()
// n.next()
// n.next()
// n.next()

// console.log(n.next());

// map.forEach((v) => {
//   console.log(v);
// });

// map - dont work

// let g = Object.fromEntries(map);

// console.log(g);

// new Set --------

let set = new Set();

// set, get X

let obj = {
  5: 5,
};

let arr = [5, 6, 9];

set.add(5).add(8).add(obj).add(arr);

// console.log(set.has(5));
// set.delete(5);
// console.log(set.values());
// console.log(set.keys());
// set.clear();

// console.log(set);

// set = null; dont removed in heap

// let map = WeakMap;
// let set = WeakSet
