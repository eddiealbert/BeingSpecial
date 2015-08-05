exports.render = function(req, res) {
	res.render('index', {
		title: 'Advocate of Choice',
		user: JSON.stringify(req.user)
	});
};