angular.module('navigation', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'views/home.html'
	})
	.when('/users',{
		templateUrl: 'views/users.html'
	})
	.when('/products',{
		templateUrl: 'views/products.html'
	})
	.when('/caca',{
		templateUrl: 'views/caca.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);