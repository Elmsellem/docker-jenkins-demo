const port = 3000;


const server = require('http').createServer();
const io = require("socket.io")(server);

io.on('connection', () => {
    console.log("socket.io say hello from docker")
});

server.listen(port, () => {
    console.log("websocket server started at", port)
});