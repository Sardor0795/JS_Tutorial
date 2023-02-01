let msgInp = document.querySelector(".msg_inp");
let msgWrapper = document.querySelector(".msg");

let socket = new WebSocket("ws://127.0.0.1:3000/33/index.html");

socket.onmessage = (e) => {
  let div = document.createElement("div");
  div.innerText = e?.data;
  msgWrapper.append(div);
};

msgInp.onblur = () => {
  socket.send(msgInp.value);
  msgInp.value = "";
  console.log('Message sent');
};
