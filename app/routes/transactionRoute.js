'use strict';
module.exports = function(app) {
  var transactionInstance = require('../controllers/transactionController');

  // todoList Routes
  app.route('/transaction')
    .get(transactionInstance.listAll)
    .post(transactionInstance.createNew);
   
   app.route('/transaction/:id')
    .get(transactionInstance.readById)
    .put(transactionInstance.updateById)
    .delete(transactionInstance.deleteById);
    };
