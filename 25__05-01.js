// DOM, BOM, WINDOW ---

// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log((document.title = "JS"));
// console.log(location.pathname);
// console.log(window.location.href);

// Relationship in DOM ---

// Parent -> children -> siblings

// Elements in DOM ---

// let parent = document.getElementsByClassName("parent")[0];

// console.log(parent);
// console.log(parent.children[4]);
// console.log(parent.childNodes);
// console.log(parent.parentElement.parentElement);
// console.log(parent.parentNode);

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);
// console.log(parent.lastElementChild.previousElementSibling);
// console.log(parent.firstElementChild.nextElementSibling);

// if not --> null

// Selectors 6 ---

// let byClass = document.getElementsByClassName("child1")[0];
// let byTag = document.getElementsByTagName("div")[0];
// let byNameAttr = document.getElementsByName("js")[0];
// // let byId = document.getElementById("id");
// let byId = id;

// let elsChild2 = document.querySelectorAll(".child2")[0];
// let elChild3 = document.querySelector(".child3");

// Style in JS ---

// parent.style.height = "500px";
// parent.style.backgroundColor = "blue";

// parent.style.cssText = `

//     height: 200px;
//     width: 500px;
//     background-color: red;

// `;

// Values in elements

// console.log(parent.innerHTML);
// console.log(parent.innerText);
// console.log(parent.textContent);
// console.log(parent.outerHTML);
// parent.hidden = true;  --> display - none
