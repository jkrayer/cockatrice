//
var app = app || angular.module('CharacterApp', ['ngRoute']);

//
app.controller('SingleCharacterCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

	$scope.singleCharacter = {};

	$scope.cid = $routeParams.id;

	$http.get('rest/character/' + $scope.cid).
		success(function(data, status, headers, config) {

			$scope.singleCharacter = Berramir(data[0]);

		}).
		error(function(data, status, headers, config) {
			console.log('failed to get characters');
		});

}]);
