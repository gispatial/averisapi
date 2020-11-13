'use strict';
module.exports = function(app) {
  var transaction_itemInstance = require('../controllers/transaction_itemController');

  // todoList Routes
  app.route('/transaction_item')
    .get(transaction_itemInstance.listAll)
    .post(transaction_itemInstance.createNew);
   
   app.route('/transaction_item/:id')
    .get(transaction_itemInstance.readById)
    .put(transaction_itemInstance.updateById)
    .delete(transaction_itemInstance.deleteById);
    };
