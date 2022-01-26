'use strict';

const client = require('socket.io-client');
const socket = client('http://localhost:3030');
const faker = require('faker');

socket.emit('pickup', {
  store: faker.company.companyName(),
  orderId: faker.datatype.uuid(),
  customer: faker.name.findName(),
  address: faker.address.streetAddress(),
});

socket.on('delivered', (payload) => {
  console.log('Thank You for the safe delivery!', payload)
});