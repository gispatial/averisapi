'use strict';
module.exports = function(app) {
  var cityInstance = require('../controllers/cityController');

  // todoList Routes
  app.route('/city')
    .get(cityInstance.listAll)
    .post(cityInstance.createNew);
   
   app.route('/city/:id')
    .get(cityInstance.readById)
    .put(cityInstance.updateById)
    .delete(cityInstance.deleteById);
    };
