// Date

let time = new Date();

let day = time.getDay(); // hafta kunlari
let date = time.getDate(); // oy kunlari
let month = time.getMonth(); // oy 0-11
let year = time.getFullYear(); // yil

let hour = time.getHours(); // soat
let minute = time.getMinutes(); // minut
let second = time.getSeconds(); // secund
let milsec = time.getMilliseconds(); // 1-1000 = 1 sec

let publicTime = time.getTime(); // time calculated from 1970
let publicTime2 = Date.now(); // time calculated from 1970

// console.log(`${hour - 12} : ${minute} : ${second}`);

let week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// console.log(`${week[day - 1].slice(0, 3)}, ${hour - 12} : ${minute}, ${year}`);

// JSON

let user = {
  name: "Jim",
  age: 25,
};

let json = JSON.stringify(user, ["age"], 2);

console.log(json);

let obj = JSON.parse(json);

console.log(obj);
