// Class

// class Users {
//   constructor(name, title) {
//     this.name = name;
//     this.title = title;
//   }
//   lastname = "Jim";
//   count = 0;
//   logName(word) {
//     let groupName = "GGG";
//     console.log(word, this.name, this.title, this.lastname, groupName);
//   }
// }

// let user1 = new Users("Web", 5);
// let user2 = new Users("NT", 3);

// // console.log(user1);

// user1.logName("Hi");
// user2.logName("Hello");
// user1.logName();
// user1.logName();
// user2.logName();

// class Users {
//   ["web" + "brain"]() {
//     console.log("Hi");
//   }
//   name = "Jim";
//   lastname = "Dale";
//   get getFull() {
//     console.log(this.name, this.lastname);
//   }
//   set getFull(v) {
//     this.name = v.name;
//     this.lastname = v.lastname;
//   }
// }

// let user1 = new Users();

// user1.webbrain();

// user1.getFull = { name: "Ann", lastname: "Jack" };
// user1.getFull;

// Inheritance -> __proto__

// class Cars {
//   speed(speed) {
//     console.log(speed);
//   }
//   parent() {
//     console.log("Im Parent");
//   }
// }

// class Cadilacs extends Cars {
//   getColor(color) {
//     console.log(color);
//   }
//   child() {
//     console.log("Im child");
//   }
//   info() {
//     this.child();
//     super.parent();
//   }
// }

// class Ferraries extends Cars {
//   getColor(color) {
//     console.log(color);
//   }
// }

// let car = new Cars();
// let cadilac = new Cadilacs();
// let ferrary = new Ferraries();

// cadilac.info();

// cadilac.speed(280);
// cadilac.getColor("black");
// console.log("-------------");
// ferrary.speed(280);
// ferrary.getColor("red");

// Override parents constructor ----

// class Cars {
//   constructor(s) {
//     this.s = s;
//   }
//   speed(name) {
//     console.log(name, this.s);
//   }
// }

// class Cadilacs extends Cars {
//   constructor(a, d, c) {
//     super(a);
//     this.c = c;
//   }
//   getColor(color) {
//     console.log(color);
//   }
// }

// let cadilac = new Cadilacs(280);

// cadilac.speed("Cadilac");

// class Cars {
//   constructor(name, g) {
//     console.log(name, g);
//   }
// }

// class Ferraries extends Cars {}

// let ferrary = new Ferraries("280", 50);
// let porsche = new Cars("250", 40);

// static value, static method

// class Cars {
//   year = 0;
//   static year = 0;
//   logYear() {
//     console.log(++this.year);
//   }
//   static logStYeat() {
//     console.log(++this.year);
//   }
// }

// let a = new Cars();
// let b = new Cars();

// Cars.logStYeat();
// Cars.logStYeat();
// Cars.logStYeat();

// a.logYear();
// a.logYear();
// a.logYear();

// a.logStYeat();
// a.logStYeat();

// b.logYear();
// b.logYear();

// b.logStYeat();
// b.logStYeat();

// public, protected ---

// class Protected {
//   _name = "Car";
//   #ggg = "dont touch it";
//   get golPr() {
//     console.log(this.#ggg);
//   }
//   set golPr(v) {
//     this.#ggg = v;
//   }
// }

// let pr = new Protected();

// // console.log(pr);
// pr.golPr;

// pr.golPr = "UPS.. I touched it";

// pr.golPr;

// Built in Class

// class Ar extends Array {}

// let ar = 'dsfsdf';

// console.log(ar instanceof Object);

// class Cars {
//   logYear() {
//     console.log(5);
//   }
// }

// let obj = {
//   logNum() {
//     console.log(0);
//   },
// };

// Object.assign(Cars.prototype, obj);

// let c = new Cars();

// c.logNum();
