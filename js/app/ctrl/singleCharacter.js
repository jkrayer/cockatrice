//
var app = app || angular.module('CharacterApp', ['ngRoute']);

//
app.controller('SingleCharacterCtrl', ['$rootScope', '$http', '$routeParams', 'SingleCharacterSvc', function($rootScope, $http, $routeParams, SingleCharacterSvc) {

	"use strict";

	$rootScope.singleCharacter = {};

	if (!$routeParams.id) { return false; }

	$http.get('rest/character/' + $routeParams.id).
		success(function(data, status, headers, config) {

			$rootScope.singleCharacter = SingleCharacterSvc.setLevel(data)[0];

		}).

		error(function(data, status, headers, config) {

			console.error('error getting single charater, SingleCharacterCtrl');

		});

}]);
