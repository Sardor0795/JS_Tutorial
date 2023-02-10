let request = indexedDB.open("Web Brain", 22);

var db = null;
var i = 0;
var store = null;

request.onerror = () => {
  db = request.result;
  console.log("error");
};

request.onsuccess = (event) => {
  db = request.result;
  drawData();
  let tr = db.transaction("Frontend", "readonly");
  let data = tr.objectStore("Frontend");
  let usrs = data.getAll();
  usrs.onsuccess = () => {
    i = usrs.result.length + 1;
  };
};

request.onupgradeneeded = (event) => {
  console.log("upgraded");
  db = request.result;
  if (!db.objectStoreNames.contains("Frontend")) {
    store = db.createObjectStore("Frontend", { keyPath: "id" });
    store.createIndex("indexName", "name", { unique: false });
    store.createIndex("indexAge", "age", { unique: false });
  }
};

create.onclick = () => {
  i++;
  let user = {
    id: i,
    name: fname.value,
    surname: surname.value,
    age: Number(age.value),
  };

  let transaction = db.transaction("Frontend", "readwrite");
  let users = transaction.objectStore("Frontend");

  let addEvent = users.add(user);
  addEvent.onsuccess = () => {
    console.log("User created");
    drawData();
    fname.value = "";
    surname.value = "";
    age.value = "";
    console.log(i);
  };
};

let dellUser = (id) => {
  let transaction = db.transaction("Frontend", "readwrite");
  let users = transaction.objectStore("Frontend");
  let dell = users.delete(id);
  dell.onsuccess = () => {
    console.log("User deleted");
    drawData();
  };
};

function drawData() {
  list.innerHTML = "";
  let tr = db.transaction("Frontend", "readonly");
  let user = tr.objectStore("Frontend");
  let users = user.getAll();
  let range = IDBKeyRange.lowerBound(10, false);
  let stRange = IDBKeyRange.bound(1, 10);
  let ltRange = IDBKeyRange.bound("a", "l");
  let only = IDBKeyRange.only(8);
  let ix = user.index("indexName").getAll(ltRange);
  let inAge = user.index("indexAge").getAll(only);
  inAge.onsuccess = () => {
    console.log(inAge.result, "Age");
  };
  ix.onsuccess = () => {
    console.log(ix.result, "Index Name");
  };
  users.onsuccess = () => {
    console.log(users.result, "All");
    users.result.forEach((e, i) => {
      let div = document.createElement("div");
      div.innerHTML = `${i + 1} ${e.name} <button onclick="dellUser(${
        e.id
      })">del</button> <button onclick="updateUser(${e.id})">update</button>`;
      list.append(div);
    });
  };
}

function updateUser(id) {
  let tr = db.transaction("Frontend", "readwrite");
  let data = tr.objectStore("Frontend");
  let upd = data.put({
    id: id,
    name: fname.value,
    surname: surname.value,
    age: age.value,
  });
  upd.onsuccess = () => {
    drawData();
    fname.value = "";
    surname.value = "";
    age.value = "";
  };
}
