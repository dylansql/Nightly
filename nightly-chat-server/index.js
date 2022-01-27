const express = require('express');
const app = express();

const { createServer } = require("http");
const { Server } = require("socket.io");

const PORT = 3002 || process.env.PORT

const httpServer = createServer();
const io = new Server(httpServer, { 
    cors: {
        origin: ["https://nightly-chat-server.herokuapp.com/", "https://nightlyy.netlify.app/"],
      },
    credentials: true,
    path:'https://nightly-chat-server.herokuapp.com/'
 });

 app.get('/', (req, res) => {
     res.sendFile(__dirname + '/index.html');
    });







    const messages = {
    
        "Sleepless-Nights": [],
        "Sleep-Advice": [],
        "Something-On-My-Mind": [],
        "Meditate": [],
        "Toy-Stories": [],
        "RandomStuff": []
    }
    
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