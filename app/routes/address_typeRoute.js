'use strict';
module.exports = function(app) {
  var address_typeInstance = require('../controllers/address_typeController');

  // todoList Routes
  app.route('/address_type')
    .get(address_typeInstance.listAll)
    .post(address_typeInstance.createNew);
   
   app.route('/address_type/:id')
    .get(address_typeInstance.readById)
    .put(address_typeInstance.updateById)
    .delete(address_typeInstance.deleteById);
    };
