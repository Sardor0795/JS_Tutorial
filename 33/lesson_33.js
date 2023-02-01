let msgInp = document.querySelector(".msg_inp");
let msgWrapper = document.querySelector(".msg");

let socket = new WebSocket("ws://127.0.0.1:2000/33/index.html");

socket.onmessage = (e) => {
  msgWrapper.innerHTML += `<div>${e.data}</div>`;
};

msgInp.onblur = () => {
  socket.send(msgInp.value);
};
