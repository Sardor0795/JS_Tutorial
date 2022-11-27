// Objects 2

// Garbage collection ---

// The main concept of memory management in JavaScript is reachability.

// Simply put, “reachable” values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.

// There’s a background process in the JavaScript engine that is called garbage collector. It monitors all objects and removes those that have become unreachable.

// user has a reference to the object
// let user = {
//   name: "John",
// };

// If the value of user is overwritten, the reference is lost:
// user = null;

// Now John becomes unreachable. There’s no way to access it, no references to it. Garbage collector will junk the data and free the memory.

// "this" ---

// It’s common that an object method needs to access the information stored in the object to do its job.

// For instance, the code inside user.sayHi() may need the name of the user.

// To access the object, a method can use the this keyword.

// The value of this is the object “before dot”, the one used to call the method.

// For instance:

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     // "this" is the "current object"
//     alert(this.name);
//   },
// };

// user.sayHi(); // John

// Here during the execution of user.sayHi(), the value of this will be user.

// Technically, it’s also possible to access the object without this, by referencing it via the outer variable:

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     alert(user.name); // "user" instead of "this"
//   },
// };

// …But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object.

// That’s demonstrated below:

// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//       alert( user.name ); // leads to an error
//     }

//   };

//   let admin = user;
//   user = null; // overwrite to make things obvious

//   admin.sayHi(); // TypeError: Cannot read property 'name' of null

// If we used this.name instead of user.name inside the alert, then the code would work.

// Calling without an object: this == undefined ---- ("use strict") but without if this === global object

// Arrow functions have no “this”

// Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

// Constructor, operator "new" ---

// Constructor function

// Constructor functions technically are regular functions. There are two conventions though:

// They are named with capital letter first.
// They should be executed only with "new" operator.

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");

// alert(user.name); // Jack
// alert(user.isAdmin); // false

// Constructor functions or, briefly, constructors, are regular functions, but there’s a common agreement to name them with capital letter first.
// Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.
// We can use constructor functions to make multiple similar objects.
