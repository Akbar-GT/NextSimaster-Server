require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 5500;

const router = require('./routes');

const app = express();
const server = http.Server(app);
const socket = socketIO(server);

socket.on('connection', (socket) => {
    console.log('connected')

    socket.on('disconnect', () => {
        socket.disconnect();
        console.log('disconnect');
    })
});

app.socket = socket;
app.use(cors());
app.use(express.json());
app.use(router);

server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});