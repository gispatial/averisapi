'use strict';
module.exports = function(app) {
  var city_stateInstance = require('../controllers/city_stateController');

  // todoList Routes
  app.route('/city_state')
    .get(city_stateInstance.listAll)
    .post(city_stateInstance.createNew);
   
   app.route('/city_state/:id')
    .get(city_stateInstance.readById)
    .put(city_stateInstance.updateById)
    .delete(city_stateInstance.deleteById);
    };
