const express = require('express');
const app = express();

const { createServer } = require("http");
const { Server } = require("socket.io");

const PORT = 3002 || process.env.PORT

const httpServer = createServer();
const io = new Server(httpServer, { 
    cors: {
        origin: "*",
      },
    path:'/socket.io/'
 });

let usernames = [];
 
const messages = {
    SleeplessNights: [],
    SleepAdvice: [],
    SomethingsOnMyMind: [],
    Meditate: [],
    ToyStories: [],
    Random: []
}

 app.get('/', (req, res) => {
     res.sendFile(__dirname + '/index.html');
    });
    
    io.on('connection', (socket) => {
        socket.emit('chat-message', 'Welcome to Nightly-Chat!');
        
        // broadcasts when a user connect
        socket.broadcast.emit('chat-message', `A User has joined the chat!`);
        // runs when client disconnects
        socket.on('disconnect', () => {
            socket.broadcast.emit('chat-message', 'A User has left the chat')
        })

        socket.on('chat-message', (msg, nickname) => {
            socket.broadcast.emit('chat-message', `${nickname}: ${msg}`);
            console.log("line 44", nickname)
        });


    });

    







httpServer.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

// This will emit the event to all connected sockets
io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); 



















// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//       console.log('user disconnected');
//     });
//   });

//   io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//       console.log('message: ' + msg);
//     });
//   });