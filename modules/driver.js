'use strict';

//eventpool
const eventPool = require('../utils/event-pool');

//functions
const handleTransit = (eventObj) => {
  console.log(`DRIVER: in transit ${eventObj.orderID}`);
}

const handleDeliver = (eventObj) => {
  console.log(`DRIVER: delivered ${eventObj.orderID}`);
}

const handlePickup = (eventObj) => {
  console.log(`DRIVER: picked up ${eventObj.orderID}`);
}

//listeners
eventPool.on('in-transit', handleTransit);
eventPool.on('delivered', handleDeliver);
eventPool.on('pickup', handlePickup);

module.exports = {
  handleTransit,
  handleDeliver,
  handlePickup
}
