const WebSocet = require("ws");

let ws = new WebSocet.Server({ port: 2000 });

ws.on("connection", (w, req) => {
  w.onmessage = (e) => {
    ws.clients.forEach((client) => {
      client.send(e.data);
      console.log(e.data);
    });
  };
});

/*

  console.log("Connected...");

  w.on("close", (w) => {
    console.log("Disconnected");
  });

*/
