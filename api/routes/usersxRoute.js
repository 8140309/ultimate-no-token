'use strict';
 module.exports = function(app) {
	 var controller = require('../controllers/usersxController');

	 app.route('/api/usersx')
		 .get(controller.list)
		 .post(controller.create);

	  app.route('/api/usersx/:id')
		 .get(controller.read)
		 .put(controller.update)
		 .delete(controller.delete);
};