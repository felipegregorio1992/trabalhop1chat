// socketConfig.js
const socketIo = require('socket.io');

function configureSocket(server) {
  const io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('Um usuário se conectou');

    // Recebe mensagens do cliente e envia para todos os clientes conectados
    socket.on('chat message', (message) => {
      io.emit('chat message', message);
    });

    // Evento para desconexão
    socket.on('disconnect', () => {
      console.log('Um usuário se desconectou');
    });
  });
}

module.exports = configureSocket;
