'use strict';
module.exports = function(app) {
  var account_typeInstance = require('../controllers/account_typeController');

  // todoList Routes
  app.route('/account_type')
    .get(account_typeInstance.listAll)
    .post(account_typeInstance.createNew);
   
   app.route('/account_type/:id')
    .get(account_typeInstance.readById)
    .put(account_typeInstance.updateById)
    .delete(account_typeInstance.deleteById);
    };
