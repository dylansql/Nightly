const express = require('express');
const app = express();
const { createServer } = require("https");
const { Server } = require("socket.io");
const cors = require("cors")
// const { readFileSync } = require("fs");
const httpServer = createServer();

const PORT = process.env.PORT || 3002

const io = new Server(httpServer, { 
    cors: {
        origin: "https://nightlyy.netlify.app",
        allowedHeaders: ["nightly"],
        credentials: true,
      }
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
    socket.emit('chat-message', 'BOT: Welcome to Nightly-Chat!');
    
    // broadcasts when a user connect
    socket.broadcast.emit('chat-message', `BOT: A User has joined the chat!`);
    // runs when client disconnects
    socket.on('disconnect', () => {
        socket.broadcast.emit('chat-message', 'BOT: A User has left the chat')
    })
    socket.on('chat-message', ({ msg: msg, nickname: nickname, roomTag: tag}) => {
        socket.join(tag)
        io.to(tag).emit('chat-message', `${nickname}: ${msg}`);
        
    });
});


httpServer.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

// This will emit the event to all connected sockets
io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); 



