//
var app = app || angular.module('CharacterApp', ['ngRoute']);

//
app.controller('ListCharacterCtrl', ['$scope', '$http', 'SingleCharacterSvc', function($scope, $http, SingleCharacterSvc) {

	$scope.allCharacters = [];

	$http.get('rest/character').

		success(function(data, status, headers, config) {

			$scope.allCharacters = SingleCharacterSvc.setLevel(data);

		}).

		error(function(data, status, headers, config) {

			console.log('failed to get characters');

		});

}]);
