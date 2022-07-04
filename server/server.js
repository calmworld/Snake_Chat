console.log("i'm here!!!!!!");

const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

const PORT = 6060;
const NewMsgEvent = "newMsg";

io.on("connection", (socket) => {
    console.log(`Client ${socket.id} connected`);
  
    // Join a conversation
    const { roomId } = socket.handshake.query;
    socket.join(roomId);
  
    // Listen for new messages
    socket.on(NewMsgEvent, (data) => {
      io.in(roomId).emit(NewMsgEvent, data);
    });
  
    // Leave the room if the user closes the socket
    socket.on("disconnect", () => {
      console.log(`Client ${socket.id} diconnected`);
      socket.leave(roomId);
    });
});
  
server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
});