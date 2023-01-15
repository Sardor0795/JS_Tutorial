// Event handler, Bubling, Event Delegation

// let btn = document.getElementById("btn");

// function onClick() {
//   console.log("click");
// }

// function onMouseDown() {
//   console.log("mouse down");
// }

// function onMouseUp() {
//   console.log("mouseUp");
// }

// class Events {
//   handleEvent(event) {
//     switch (event.type) {
//       case "click":
//         console.log("click");
//         break;
//       case "mouseup":
//         console.log("mouseup");
//     }
//   }
// }

// let env = new Events();

// btn.addEventListener("click", env);
// btn.addEventListener("mousedown", env);
// btn.addEventListener("mouseup", env);

// -------------------

// function child(event) {
// //   event.stopPropogation();
//   event.stopImmediatePropagation();
//   console.log("child");
// }
// function parent() {
//   console.log("parent");
// }
// function grand() {
//   console.log("grand");
// }

// --------------------

// table.onclick = (e) => {
//   console.log(e.target.innerHTML);
// };

// link.onclick = (e) => {
//   //   e.preventDefault();
//   return false;
// };
