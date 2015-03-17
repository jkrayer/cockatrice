//
var app = app || angular.module('CharacterApp', ['ngRoute']);


//
app.config(['$routeProvider', function($routeProvider) {

	$routeProvider.

		when('/character/:id', {
			templateUrl: 'templates/singlecharacter.html',
			controller: 'SingleCharacterCtrl'
		}).

		when('/character/', {
			templateUrl: 'templates/home.html',
			controller: 'ListCharacterCtrl'
		}).

		otherwise({
			redirectTo: '/',
			templateUrl: 'templates/home.html',
			controller: 'ListCharacterCtrl'
		});

}]);
