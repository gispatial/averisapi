'use strict';
module.exports = function(app) {
  var transaction_typeInstance = require('../controllers/transaction_typeController');

  // todoList Routes
  app.route('/transaction_type')
    .get(transaction_typeInstance.listAll)
    .post(transaction_typeInstance.createNew);
   
   app.route('/transaction_type/:id')
    .get(transaction_typeInstance.readById)
    .put(transaction_typeInstance.updateById)
    .delete(transaction_typeInstance.deleteById);
    };
