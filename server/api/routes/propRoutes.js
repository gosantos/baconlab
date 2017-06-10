'use strict';

module.exports = function(app) {
  var propController = require('../controllers/propController');

  app.route('/api/props')
    .get(propController.getAll)
    .post(propController.create);

  app.route('/api/props/:id')
    .get(propController.get)
    .put(propController.update)
    .delete(propController.remove);
};
