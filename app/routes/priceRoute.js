'use strict';
module.exports = function(app) {
  var priceInstance = require('../controllers/priceController');

  // todoList Routes
  app.route('/price')
    .get(priceInstance.listAll)
    .post(priceInstance.createNew);
   
   app.route('/price/:id')
    .get(priceInstance.readById)
    .put(priceInstance.updateById)
    .delete(priceInstance.deleteById);
    };
