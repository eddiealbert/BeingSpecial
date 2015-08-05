var mongoose = require('mongoose')
var Product = mongoose.model('Product');

var getErrorMessage = function(err) {
	if (err.errors) {
		for (var errName in err.errors) {
			if (err.errors[errName].message) {
				return err.errors[errName].message;
			} else {
				return 'Unkown server error';
			}
		}
	}
};

exports.create = function(req, res) {
	var product = new Product(req.body);
	
	product.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(product);
		}
	}); 
};

exports.list = function(req, res) {
	Product.find().sort('-created').exec(function(err, products) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(products);
		}
	});
};

exports.read = function(req, res) {
	res.json(req.product);
};

exports.update = function(req, res) {
	var product = req.product;
	
	product.name = req.body.name;
	product.description = req.body.description;
	product.fileType = req.body.fileType;
	product.price = req.body.price;
	product.fPath = req.body.fPath;
	
	product.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(product);
		}
	});
};

exports.delete = function(req, res) {
	var product = req.product;
	
	product.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(product);
		}
	});
};

exports.productByID = function(req, res, next, id) {
	Product.findById(id).exec(function(err, product) {
		if (err) return next(err);
		if(!product) return next(new Error('Failed to load product' + id));
		
		req.product = product;
		next();
	});
};

/*exports.hasAuthorization = function(req, res, next) {
	Will take care of user vs admin privileges
}*/