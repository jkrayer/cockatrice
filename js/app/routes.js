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

		//get all notes for one character
		when('/character/:id/notes', {
			templateUrl: 'templates/character/notes.html',
			controller: 'NotesListCtrl'
		}).

		when('/character/:id/addnote', {
			templateUrl: 'templates/character/notes-add.html',
			controller: 'NotesAddCtrl'
		}).

		when('/character/:id/addnote/:noteid', {
			templateUrl: 'templates/character/notes-edit.html',
			controller: 'NotesEditCtrl'
		}).

		otherwise({
			redirectTo: '/',
			templateUrl: 'templates/home/',
			controller: 'ListCharacterCtrl'
		});

}]);
