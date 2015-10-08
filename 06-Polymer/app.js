angular.module('polymer', ['ngRoute', 'polymer.controllers'])
.config(['$routeProvider', function($routeProvider) {
	
	$routeProvider
	
	.when('/',{
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	})
	
	.when('/users',{
		templateUrl: 'views/users.html',
		controller: 'UsersController'
	})
	
	.when('/products',{
		templateUrl: 'views/products.html',
		controller: 'ProductsController'
	})
	
	.when('/videos',{
		templateUrl: 'views/videos.html',
		controller: 'VideosController'
	})
	
	.otherwise({
		redirectTo: '/'
	});
	
}]);