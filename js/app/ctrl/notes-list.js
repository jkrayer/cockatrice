//
var app = app || angular.module('CharacterApp', ['ngRoute']);


//controllers
app.controller('NotesListCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

	"use strict";

	$scope.notes = [];

	$http.get('rest/note/' + $routeParams.id).

		success(function(data, status, headers, config) {

			$scope.notes = data;

		}).

		error(function(data, status, headers, config) {

			$scope.notes = 'Error getting note data from server';

		});

}]);
