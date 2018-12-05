function createSocketIo(server)
{
const io = require('socket.io')(server);



    io.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
            console.log('message: '+msg);
            io.emit('chat message', msg);
        });
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
}

module.exports = createSocketIo;