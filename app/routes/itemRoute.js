'use strict';
module.exports = function(app) {
  var itemInstance = require('../controllers/itemController');

  // todoList Routes
  app.route('/item')
    .get(itemInstance.listAll)
    .post(itemInstance.createNew);
   
   app.route('/item/:id')
    .get(itemInstance.readById)
    .put(itemInstance.updateById)
    .delete(itemInstance.deleteById);
    };
