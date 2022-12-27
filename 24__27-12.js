// ownKeys ---

// let obj = {
//   name: "Sardor",
//   _pw: 12345,
// };

// keys, values, entries

// let proxy = new Proxy(obj, {
//   ownKeys(target) {
//     return Object.keys(target).filter((v) => !v.startsWith("_"));
//   },
// });

// console.log(proxy);

// for (i in proxy) {
//   console.log(proxy[i]);
// }

// has ---

// let range = {
//   from: 1,
//   to: 10,
// };

// let proxy = new Proxy(range, {
//   has(target, prop) {
//     return target.from <= prop && target.to >= prop;
//   },
// });

// range.to = 500;

// console.log(500 in proxy);

// Reflect --- set,get

// let obj = {
//   name: "Sardor",
//   _pw: 12345,
// };

// Reflect.set(obj, "key", 1235);

// console.log(Reflect.get(obj, 'name'));

// let obj = {
//   name: "Sardor",
//   lastname: "Tursunboyev",
//   getFull() {
//     return `${this.name} ${this.lastname}`;
//   },
// };

// let get = obj.getFull;

// console.log(get.call(obj));

// global.name = 55;

// console.log(global.name);
