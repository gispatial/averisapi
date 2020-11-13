'use strict';
module.exports = function(app) {
  var price_typeInstance = require('../controllers/price_typeController');

  // todoList Routes
  app.route('/price_type')
    .get(price_typeInstance.listAll)
    .post(price_typeInstance.createNew);
   
   app.route('/price_type/:id')
    .get(price_typeInstance.readById)
    .put(price_typeInstance.updateById)
    .delete(price_typeInstance.deleteById);
    };
