'use strict';
module.exports = function(app) {
  var item_subcategoryInstance = require('../controllers/item_subcategoryController');

  // todoList Routes
  app.route('/item_subcategory')
    .get(item_subcategoryInstance.listAll)
    .post(item_subcategoryInstance.createNew);
   
   app.route('/item_subcategory/:id')
    .get(item_subcategoryInstance.readById)
    .put(item_subcategoryInstance.updateById)
    .delete(item_subcategoryInstance.deleteById);
    };
