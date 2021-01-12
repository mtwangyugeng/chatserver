const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

// app.get('/', (req, res) => {
//     res.send('<h1>Hello world</h1>');
//   });
  

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
      });
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
  });

http.listen(4001, () => {
console.log('listening on *:4001');
});