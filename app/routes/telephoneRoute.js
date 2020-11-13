'use strict';
module.exports = function(app) {
  var telephoneInstance = require('../controllers/telephoneController');

  // todoList Routes
  app.route('/telephone')
    .get(telephoneInstance.listAll)
    .post(telephoneInstance.createNew);
   
   app.route('/telephone/:id')
    .get(telephoneInstance.readById)
    .put(telephoneInstance.updateById)
    .delete(telephoneInstance.deleteById);
    };
