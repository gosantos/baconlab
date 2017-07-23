const express = require('express'),
  cors = require('cors'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Node = require('./api/models/nodeModel'),
  Prop = require('./api/models/propModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bacon-lab:27017');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

const nodeRoutes = require('./api/routes/nodeRoutes');
const propRoutes = require('./api/routes/propRoutes');

nodeRoutes(app);
propRoutes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('RESTful API server started on: ' + port);

module.exports = app;
