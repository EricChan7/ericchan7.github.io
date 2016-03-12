p2pserver = require('socket.io-p2p-server').Server
io = require('socket.io')(server)
io.use(p2pserver)
