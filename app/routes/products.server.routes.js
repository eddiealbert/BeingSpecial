var users = require('../../app/controllers/users.server.controller');
var products = require('../../app/controllers/products.server.controller');

module.exports = function(app) {
	app.route('/api/products')
		.get(products.list)
		.post(users.requiresLogin, products.create);
		
	app.route('/api/products/:productId')
		.get(products.read)
		.put(users.requiresLogin, products.update)//I can put admin authorization here
		.delete(users.requiresLogin, products.delete);
		
	app.param('productId', products.productByID);
	
};

