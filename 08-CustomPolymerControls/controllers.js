angular.module('customPolymer.controllers', [])

.controller('HomeController', ['$scope', function($scope) {
	$scope.title = 'Home';
	$scope.promotions = [
		{
			name : 'Coca Cola',
			price  : '$2'
		},
		{
			name : 'Pepsi',
			price  : '$3'
		},
		{
			name : 'Red Bull',
			price  : '$4'
		}
	];
	$scope.newPromotion = {name : '', price  : ''};

	$scope.addPromotion = function () {
		$scope.promotions.push($scope.newPromotion);
		$scope.newPromotion = {name : '', price  : ''};
	};
}])

.controller('ProductsController', ['$scope', function($scope) {
	$scope.title = 'Products';
}])

.controller('PolymerController', ['$scope', function($scope) {
	$scope.title = 'Polymer Test';
}]);

/*
git
bower
node
*/