const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors')


const app = express();
app.use(express.json())
// app.use(cors())

const server = http.Server(app)
server.listen(PORT=8000,()=>{
    console.log(`your app is running on port:${PORT}`)
})

const io = socketIo(server);

io.on('connection', (socket)=>{
    socket.on('playlist',(msg)=>{
        io.emit('playlist',msg)
    });
    socket.on('live_video',(data)=>{
        io.emit('live_video',data)
    })
});
