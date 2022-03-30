import express from 'express';
import path from 'path';
import { Socket } from 'socket.io';

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (request, response) => {
    response.render('index.html');
})
let messages: any[] = []
io.on('connection', (socket:Socket) => {
    console.log(`Socket connected ${socket.id}`)

    socket.emit('previusMessages', messages);

    socket.on('sendMessage', (data) =>{
        messages.push(data);
        socket.broadcast.emit('receivedMessage', data)
    })
})

server.listen(3000);

