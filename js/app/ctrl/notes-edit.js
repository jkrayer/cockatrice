//
var app = app || angular.module('CharacterApp', ['ngRoute']);


//controllers
app.controller('NotesEditCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {

	"use strict";

	$scope.theNote = '';

	$scope.theNewNote = '';


	$http.get('rest/note/' + $routeParams.noteid + '/' + $routeParams.id).
		success(function(data, status, headers, config) {

			$scope.theNote = data[0];
			$scope.theNewNote = data[0].note;

		}).
		error(function(data, status, headers, config) {

			console.error('Failed to get note, this note may not be owned by this character, NotesEditCtrl');

		});

	$scope.editNote = function() {

		if ($scope.theNewNote === '') { return false; }

		$scope.theNote.note = $scope.theNewNote;

		$http.put('rest/note', $scope.theNote).

			success(function(data, status, headers, config) {

				$location.url('/character/' + $routeParams.id + '/notes');

			}).

			error(function(data, status, headers, config) {

				console.error('Failed to edit note, NotesEditCtrl');

			});

	};

}]);
