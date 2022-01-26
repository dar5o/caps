'use strict';

const client = require('socket.io-client');
const socket = client('http://localhost:3030');
const faker = require('faker');

socket.on('pickup', (payload) => {
    
      console.log(`Your package has been picked up and is now out for delivery.`, payload)
    
      socket.emit('in-transit', {
        event: 'in-transit',
        time: faker.date.soon(),
        payload: {
          store: faker.company.companyName(),
          orderId: faker.datatype.uuid(),
          customer: faker.name.findName(),
          address: faker.address.streetAddress(),
        }
      });
    });
