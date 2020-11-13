'use strict';
module.exports = function(app) {
  var system_user_typeInstance = require('../controllers/system_user_typeController');

  // todoList Routes
  app.route('/system_user_type')
    .get(system_user_typeInstance.listAll)
    .post(system_user_typeInstance.createNew);
   
   app.route('/system_user_type/:id')
    .get(system_user_typeInstance.readById)
    .put(system_user_typeInstance.updateById)
    .delete(system_user_typeInstance.deleteById);
    };
