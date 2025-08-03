const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app= express();
const server = http.createServer(app);

app.get('/', (req, res)=>{
    res.send('<h1>Hello world</h1>');
});
//ESCUCHANDO SERVIDOR
app.use(express.static('public'))
server.listen(3002, ()=>{
    console.log('server on port 3001');
});

