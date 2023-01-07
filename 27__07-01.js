// DOM - 3

// click
// contextmenu
// mouseover / mouseout
// mousedown / mouseup
// mousemove

// let div = document.querySelector(".box");

// div.onclick = log;
// div.oncontextmenu = log;
// div.onmouseover = log
// div.onmouseout = log;
// div.onmousedown = log;
// div.onmouseup = log;
// div.onmousemove = log;

// function getCord(e) {
// console.log(id);
// console.log(e.target);
//   console.log(`X ${e.x} Y ${e.y}`);
// }

import { users } from "./data.js";

let data = users;

let body = document.querySelector("body");

let wrapper = document.createElement("div");
wrapper.style.cssText = `
    border: 1px solid #000;
`;

const del = (id) => {
  data = data.filter((v) => id !== v.id);
  wrapper.innerHTML = "";
  writeFunc();
};

body.prepend(wrapper);

const writeFunc = () => {
  if (!data.length) wrapper.innerHTML = "No any data";
  data.forEach((data) => {
    let div = document.createElement("div");
    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.addEventListener("click", () => del(data.id));
    div.innerHTML = `${data.id} - ${data.name}  `;
    div.append(btn);
    wrapper.append(div);
  });
};

writeFunc();
