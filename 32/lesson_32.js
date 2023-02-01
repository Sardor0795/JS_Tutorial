// console.log(window.location.protocol);

let url = new URL(
  "https://www.google.com/search?q=sss&oq=sss&aqs=chrome.j0j15&sourceid=chrome&ie=UTF-8"
);

// console.log(url.href);

let search = url.searchParams;

// search.append("sss", 555);
// search.set("sss", 555);
search.delete("q");

console.log(search);
console.log(url);
