const express = require('express');
const path = require('path');
const app = express();
const api = require('./api')();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/../frontend/public/index.html'))
})

app.listen(3000, function () {
  app.use('/api', api);
})
