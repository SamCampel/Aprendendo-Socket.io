//socketio
var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

io.on("connection", (socket) => {

    socket.on("disconnect", () => {
        console.log("Usuário desconectado." + socket.id);
    });

    socket.on("mensagem", (data) => {
        console.log(data);
    })

    socket.on("palavra", (data) => {
        console.log(data);
        socket.emit("resultado", { resultado: data.palavra + " - resposta" });
    })
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
})



http.listen(3000, () => {
  console.log("listening on *:3000");
})