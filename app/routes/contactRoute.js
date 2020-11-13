'use strict';
module.exports = function(app) {
  var contactInstance = require('../controllers/contactController');

  // todoList Routes
  app.route('/contact')
    .get(contactInstance.listAll)
    .post(contactInstance.createNew);
   
   app.route('/contact/:id')
    .get(contactInstance.readById)
    .put(contactInstance.updateById)
    .delete(contactInstance.deleteById);
    };
