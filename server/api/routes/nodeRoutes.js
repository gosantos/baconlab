'use strict';

module.exports = function(app) {
  var nodeController = require('../controllers/nodeController');

  app.route('/api/nodes')
    .get(nodeController.getAll)
    .post(nodeController.create);

  app.route('/api/nodes/:id')
    .get(nodeController.get)
    .put(nodeController.update)
    .delete(nodeController.remove); 
};
