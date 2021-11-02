'use strict';

//import of events and faker module
const eventPool = require('./utils/event-pool.js');
const faker = require('faker');
const { logEvent } = require('./utils/logger.js');

//import of driver and vendor modules
require('./modules/driver.js');
require('./modules/vendor.js');

setInterval(() => {
  let payload = {
    store: faker.company.companyName(),
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress()
  }
  eventPool.emit('in-transit', payload);
  eventPool.emit('delivered', payload);
  eventPool.emit('pickup', payload);
}, 2000)

//listeners
eventPool.on('in-transit', (payload) => logEvent('in-transit', payload));
eventPool.on('delivered', (payload) => logEvent('delivered', payload));
eventPool.on('pickup', (payload) => logEvent('pickup', payload));
