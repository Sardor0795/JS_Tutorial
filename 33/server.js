const WebSocet = require("ws");

let ws = new WebSocet.Server({ port: 3000 });

ws.on("connection", (w, req) => {
  console.log("Connected...");

  w.on("close", (w) => {
    console.log("Disconnected");
  });

  w.onmessage = (e) => {
    ws.clients.forEach((client) => {
      client.send(e.data);
    });
  };
});
