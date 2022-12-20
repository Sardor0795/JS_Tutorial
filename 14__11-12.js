// Recursion

let count = 10;

// for (var i = 1; i <= 10; i++) {
//   count += 1;
//   console.log(count);
// }

// console.log(i);

// const recursion = (param) => {
//   if (param == 0) {
//     return count;
//   }
//   console.log(param);
//   count -= 1;
//   return recursion(param - 1);
// };

// console.log(recursion(count));

// console.log(count);

// const rec = () => {
//   //   console.log("5");
//   return rec();
// };

// rec();

// Calc all salary

let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    frontend: [{ name: "Jim", salary: 5000 }],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

// console.log(Object.values(company));

const calcSalary = (comp) => {
  if (Array.isArray(comp)) {
    return comp.reduce((s, v) => s + v.salary, 0);
  } else {
    let sum = 0;

    for (let i of Object.values(comp)) {
      sum += calcSalary(i);
    }

    return sum;
  }
};

console.log(calcSalary(company));
