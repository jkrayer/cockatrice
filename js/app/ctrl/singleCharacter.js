//
var app = app || angular.module('CharacterApp', ['ngRoute']);

//
app.controller('SingleCharacterCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

	$scope.singleCharacter = {};

	$http.get('rest/character/' + $routeParams.id).
		success(function(data, status, headers, config) {
			$scope.singleCharacter = data[0];
		}).
		error(function(data, status, headers, config) {
			console.log('failed to get characters');
		});

}]);
