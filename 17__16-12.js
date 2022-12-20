// call, apply, bind -> dont work arrow func (=>)

// let user = {
//   name: "Jim",
//   lastname: "Dale",
//   getFull() {
//     console.log(this.name, this.lastname);
//   },
// };
// let user2 = {
//   name: "Ann",
//   lastname: "Dale",
//   getFull() {
//     console.log(this.name, this.lastname);
//   },
// };

// user.getFull();
// user2.getFull();

let users = [
  {
    name: "Jim",
    lastname: "Dale",
  },
  {
    name: "Ann",
    lastname: "Dale",
  },
];

let user = {
  name: "Jim",
  lastname: "Dale",
};

function getFull(a, b, l) {
  // console.log(this);
  console.log(this.name, this.lastname, a, b, l);
}

for (let i of users) {
  getFull.call(i, "5", 6, 8);
  //   getFull.apply(i, [5, 9, 8]);
  //   let g = getFull.bind(i, 8, 9, 4);
  //   g();
}

// getFull(user);
