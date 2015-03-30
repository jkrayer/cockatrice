//
var app = app || angular.module('CharacterApp', ['ngRoute']);


//controllers
app.controller('NotesAddCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {

	"use strict";

	$scope.newNote = '';

	$scope.addNote = function() {

		var data = {
			character_id: $routeParams.id,
			note: $scope.newNote,
			date: Date.now()
		};

		if ($scope.newNote.trim() === '') { return false; }

		$http.post('rest/note', data).

			success(function(data, status, headers, config) {

				$location.url('/character/' + $routeParams.id + '/notes');

			}).

			error(function(data, status, headers, config) {

				console.error('Failed to submit note, NotesAddCtrl');

			});

		};

}]);
