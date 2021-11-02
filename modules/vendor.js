'use strict';

//eventpool
const eventPool = require('../utils/event-pool');

//functions
const handleDeliver = (eventObj) => {
  console.log(`Thanks you, ${eventObj.customer}`);
}

//listeners
eventPool.on('delivered', handleDeliver);

module.exports = { handleDeliver }