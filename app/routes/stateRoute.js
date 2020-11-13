'use strict';
module.exports = function(app) {
  var stateInstance = require('../controllers/stateController');

  // todoList Routes
  app.route('/state')
    .get(stateInstance.listAll)
    .post(stateInstance.createNew);
   
   app.route('/state/:id')
    .get(stateInstance.readById)
    .put(stateInstance.updateById)
    .delete(stateInstance.deleteById);
    };
