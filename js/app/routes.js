//
var app = app || angular.module('CharacterApp', ['ngRoute']);


//
app.config(['$routeProvider', function($routeProvider) {

	$routeProvider.

		when('/character/', {
			templateUrl: 'templates/home.html',
			controller: 'ListCharacterCtrl'
		}).

		when('/character/:id', {
			templateUrl: 'templates/singlecharacter.html',
			controller: 'SingleCharacterCtrl'
		}).

		when('/character/:id/notes', {
			templateUrl: 'templates/character/notes.html',
			controller: 'NotesListCtrl'
		}).

		when('/character/:id/addnote', {
			templateUrl: 'templates/character/notes-add.html',
			controller: 'NotesAddCtrl'
		}).

		otherwise({
			redirectTo: '/',
			templateUrl: 'templates/home/',
			controller: 'ListCharacterCtrl'
		});

}]);
