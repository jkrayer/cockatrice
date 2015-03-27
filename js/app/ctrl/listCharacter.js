//
var app = app || angular.module('CharacterApp', ['ngRoute']);

//
app.controller('ListCharacterCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.allCharacters = [];

	//This util to be merged with berramir
	//private scope, agreed?
	function setLevel (arr) {

		var levels = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000],
			count = arr.length,
			i = 0,
			j = 1;

		for (i; i < count; i += 1) {

			for (j; j < 21; j++) {
				if (arr[i].xp < levels[j]) { break; }
			}

			arr[i].level = j;
			arr[i].levelSuffix = (arr[i].level === 1) ? 'st' : (arr[i].level === 2) ? 'nd' : (arr[i].level === 3) ? 'rd' : 'th';

			j = 1;

		}

		return arr;

	}


	$http.get('rest/character').
		success(function(data, status, headers, config) {

			$scope.allCharacters = setLevel(data);

		}).
		error(function(data, status, headers, config) {

			console.log('failed to get characters');

		});

}]);
