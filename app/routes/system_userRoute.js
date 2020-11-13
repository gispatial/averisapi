'use strict';
module.exports = function(app) {
  var system_userInstance = require('../controllers/system_userController');

  // todoList Routes
  app.route('/system_user')
    .get(system_userInstance.listAll)
    .post(system_userInstance.createNew);
   
   app.route('/system_user/:id')
    .get(system_userInstance.readById)
    .put(system_userInstance.updateById)
    .delete(system_userInstance.deleteById);
    };
