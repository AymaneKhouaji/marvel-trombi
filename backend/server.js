const express = require('express');
const path = require('path');
const app = express();
const api = require('./api')();
var cors = require('cors');

app.use(cors());

app.listen(3001, function () {
  app.use('/api', api);
})
