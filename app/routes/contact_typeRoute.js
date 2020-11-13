'use strict';
module.exports = function(app) {
  var contact_typeInstance = require('../controllers/contact_typeController');

  // todoList Routes
  app.route('/contact_type')
    .get(contact_typeInstance.listAll)
    .post(contact_typeInstance.createNew);
   
   app.route('/contact_type/:id')
    .get(contact_typeInstance.readById)
    .put(contact_typeInstance.updateById)
    .delete(contact_typeInstance.deleteById);
    };
