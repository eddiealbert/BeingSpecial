var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	fileType: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	fPath: {
		type: String,
		required: true
		//add a match to make sure we get the right file types
	}
});

mongoose.model('Product', ProductSchema);