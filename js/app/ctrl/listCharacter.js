//
var app = app || angular.module('CharacterApp', ['ngRoute']);

//
app.controller('ListCharacterCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.allCharacters = [];

	$http.get('rest/character').
		success(function(data, status, headers, config) {
			$scope.allCharacters = data;
		}).
		error(function(data, status, headers, config) {
			console.log('failed to get characters');
		});

}]);
