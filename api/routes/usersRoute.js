'use strict';
 module.exports = function(app) {
	 var controller = require('../controllers/usersController');

	 app.route('/api/users')
		 .get(controller.list)
		 .post(controller.create);

	  app.route('/api/users/:id')
		 .get(controller.read)
		 .put(controller.update)
		 .delete(controller.delete);
};