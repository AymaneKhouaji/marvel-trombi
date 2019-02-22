'use strict';

var config = process.env.NODE_CONFIG;
if (!config || config === undefined || config === 'undefined' || config === null || config === 'null') {
  config = __dirname + '/../../../config';
}

module.exports = require('konphyg')(config);