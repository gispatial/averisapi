'use strict';
module.exports = function(app) {
  var credit_card_typeInstance = require('../controllers/credit_card_typeController');

  // todoList Routes
  app.route('/credit_card_type')
    .get(credit_card_typeInstance.listAll)
    .post(credit_card_typeInstance.createNew);
   
   app.route('/credit_card_type/:id')
    .get(credit_card_typeInstance.readById)
    .put(credit_card_typeInstance.updateById)
    .delete(credit_card_typeInstance.deleteById);
    };
