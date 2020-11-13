'use strict';
module.exports = function(app) {
  var item_categoryInstance = require('../controllers/item_categoryController');

  // todoList Routes
  app.route('/item_category')
    .get(item_categoryInstance.listAll)
    .post(item_categoryInstance.createNew);
   
   app.route('/item_category/:id')
    .get(item_categoryInstance.readById)
    .put(item_categoryInstance.updateById)
    .delete(item_categoryInstance.deleteById);
    };
