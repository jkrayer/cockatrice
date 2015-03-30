//
var app = app || angular.module('CharacterApp', ['ngRoute']);

//
app.controller('SingleCharacterCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

	"use strict";

	$scope.singleCharacter = {};

	if (!$routeParams.id) { return false; }

	$http.get('rest/character/' + $routeParams.id).
		success(function(data, status, headers, config) {

			$scope.singleCharacter = data[0];

		}).

		error(function(data, status, headers, config) {

			console.error('error getting single charater, SingleCharacterCtrl');

		});

}]);
