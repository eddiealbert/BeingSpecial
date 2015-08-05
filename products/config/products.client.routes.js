angular.module('products').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/products', {
			templateUrl: 'products/views/list-products.client.view.html'
		}).
		when('/products/create', {
			templateUrl: 'products/views/add-product.client.view.html'
		}).
		when('/products/:productId', {
			templateUrl: 'products/views/view-product.client.view.html'
		}).
		when('/products/:productId/edit', {
			templateUrl: 'products/views/edit-product.client.view.html'
		}).
		when('/library', {
			templateUrl: 'products/views/library.client.view.html'
		}).
		when('/library/play/:productId', {
			templateUrl: 'products/views/view-video.client.view.html'
		});
	}
]);