angular.module('customPolymer', ['ngRoute', 'customPolymer.controllers'])
.config(['$routeProvider', function($routeProvider) {
	
	$routeProvider
	
	.when('/',{
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	})
	
	.when('/polymer-test',{
		templateUrl: 'views/polymer-test.html',
		controller: 'PolymerController'
	})
	
	.when('/products',{
		templateUrl: 'views/products.html',
		controller: 'ProductsController'
	})
	
	.otherwise({
		redirectTo: '/'
	});
	
}]);