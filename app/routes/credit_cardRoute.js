'use strict';
module.exports = function(app) {
  var credit_cardInstance = require('../controllers/credit_cardController');

  // todoList Routes
  app.route('/credit_card')
    .get(credit_cardInstance.listAll)
    .post(credit_cardInstance.createNew);
   
   app.route('/credit_card/:id')
    .get(credit_cardInstance.readById)
    .put(credit_cardInstance.updateById)
    .delete(credit_cardInstance.deleteById);
    };
