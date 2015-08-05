angular.module('products').controller('ProductsController',
['$scope', '$routeParams', '$location', 'Authentication', 'Products',
	function($scope, $routeParams, $location, Authentication, Products) {
		$scope.authentication = Authentication;
		
		$scope.create = function() {
		var product = new Products({
			name: this.name,
			description: this.description,
			fileType: this.fileType,
			price: this.price,
			fPath: this.fPath
		});
		
		product.$save(function(response) {
			$location.path('products/' + response._id);
		}, function(errorResponse) {
			$scope.error = errorResponse.data.message;
		});
		};
		
		$scope.find = function() {
			$scope.products = Products.query()
		};
		
		$scope.findOne = function() {
			$scope.product = Products.get({
				productId: $routeParams.productId
			});
		};
		
		$scope.update = function() {
			$scope.product.$update(function() {
				$location.path('products/' + $scope.product._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
		
		$scope.delete = function(product) {
			if (product) {
				product.$remove(function() {
					for (var i in $scope.products) {
						if ($scope.products[i] === product) {
							$scope.products.splice(i, 1);
						}
					}
				});
			} else {
				$scope.product.$remove(function() {
					$location.path('products');
				});
			}
		};
	}
]);