'use strict';
module.exports = function(app) {
  var accountInstance = require('../controllers/accountController');

  // todoList Routes
  app.route('/account')
    .get(accountInstance.listAll)
    .post(accountInstance.createNew);
   
   app.route('/account/:id')
    .get(accountInstance.readById)
    .put(accountInstance.updateById)
    .delete(accountInstance.deleteById);
    };
