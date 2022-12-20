// DDOS attac, Caching

// function getData() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
//     data.json()
//   );
// }

// function getCached(func) {
//   let cache = new Map();

//   return function (x) {
//     if (cache.has(x)) {
//       console.log(cache.get(x));
//       return cache.get(x);
//     }

//     return cache.set(x, func(x));
//   };
// }

// getData = getCached(getData);

// With obj ----------

let user = {
  name: "users",
  getData() {
    return fetch(`https://jsonplaceholder.typicode.com/${this.name}`).then(
      (data) => data.json()
    );
  },
};

function getCached(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      console.log(cache.get(x));
      return cache.get(x);
    }

    return cache.set(x, func.call(this));
  };
}

user.getData = getCached(user.getData);
