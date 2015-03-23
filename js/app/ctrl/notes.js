//
var app = app || angular.module('CharacterApp', ['ngRoute']);


//controllers
app.controller('NotesCtrl', ['$scope', '$http', function($scope, $http) {

	"use strict";

	$scope.notes = [];

	$http.get('rest/note/'+$scope.cid).
		success(function(data, status, headers, config) {
			$scope.notes = data;
		}).
		error(function(data, status, headers, config) {
			$scope.notes = 'Error getting data from server';
		});

}]);


//
app.controller('NoteFormCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.submitNote = function ($event) {

		var data = {
			character_id: $scope.cid,
			date: Date.now(),
			note: $event.originalTarget[0].value
		};

		$http.post('rest/note', data).
			success(function(data, status, headers, config) {
				//console.log(data, status, headers, config);
				$scope.notes.unshift(data[0]);
				//technically should check if the new lenght of greater than
				//the former link before doing this
				$event.originalTarget[0].value = '';
				//console.log('p', data, status, headers, config);
				// this callback will be called asynchronously
				// when the response is available
			}).
			error(function(data, status, headers, config) {
				//console.log('e', data, status, headers, config);
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
	};

}]);
