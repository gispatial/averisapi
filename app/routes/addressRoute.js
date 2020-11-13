'use strict';
module.exports = function(app) {
  var addressInstance = require('../controllers/addressController');

  // todoList Routes
  app.route('/address')
    .get(addressInstance.listAll)
    .post(addressInstance.createNew);
   
   app.route('/address/:id')
    .get(addressInstance.readById)
    .put(addressInstance.updateById)
    .delete(addressInstance.deleteById);
    };
