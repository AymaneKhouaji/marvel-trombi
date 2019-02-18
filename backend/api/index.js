'use strict';

const express = require('express');

module.exports = () => {
  const router = express.Router();

  router.use('/marvel', require('./marvel')());

  return router;
};
