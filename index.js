'use strict';
const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

/* next line makes sure that everything is served out of the public folder */
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req,res) => {
    res.send("Hello World!")
});

io.on("connection", socket => {
    socket.on("_ping",() => {
        console.log("Got ping");
        socket.emit("_pong");
    },
        socket.on("_ping",() => {
                console.log("Got ping");
                socket.emit("_pong");
            }
        )
});



server.listen(3000,err => {
    if (err){
        throw err
    }
    console.log('Server started on Port 3000')
});
