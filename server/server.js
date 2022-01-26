'use strict';

const socketio = require('socket.io');
const client = require('socket.io-client');
const PORT = process.env.PORT || 3030;
const server = socketio(PORT);
const faker = require('faker');

server.on('connection', (socket) => {
  console.log('Socket is connected at id: ', socket.id);
  
  socket.on('pickup', (payload) => {
    console.log('Order is ready for pickup!', payload);
  });

  socket.on('pickup', (payload) => {
    console.log('The order has been picked up!', payload);
  
    server.emit('pickup', payload);
  });
  
  socket.on('in-transit', (payload) => {
    console.log(`Your driver ${faker.name.findName()} has delivered the order!`, payload)
  });
  
  socket.on('delivered', (payload) => {
    console.log('Package Delivered!', payload);
  });
});