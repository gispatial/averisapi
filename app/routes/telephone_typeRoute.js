'use strict';
module.exports = function(app) {
  var telephone_typeInstance = require('../controllers/telephone_typeController');

  // todoList Routes
  app.route('/telephone_type')
    .get(telephone_typeInstance.listAll)
    .post(telephone_typeInstance.createNew);
   
   app.route('/telephone_type/:id')
    .get(telephone_typeInstance.readById)
    .put(telephone_typeInstance.updateById)
    .delete(telephone_typeInstance.deleteById);
    };
