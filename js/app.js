(function() {

	"use strict";

	var app = angular.module('NotesApp', []);

	//controllers
	app.controller('NotesCtrl', ['$scope', '$http', function($scope, $http) {

		$scope.notes = [];

		$http.get('rest').
			success(function(data, status, headers, config) {
				$scope.notes = data;
			}).
			error(function(data, status, headers, config) {
				$scope.notes = 'Error getting data from server';
			});

	}]);

	app.controller('NoteFormCtrl', ['$scope', '$http', function($scope, $http) {

		$scope.newValue = "hello";

		$scope.submitNote = function ($event) {

			var data = {character_id: 1, note:$event.originalTarget[0].value};

			$http.post('rest/', data).
				success(function(data, status, headers, config) {
					//console.log(data, status, headers, config);
					$scope.notes.push(data[0]);
					//console.log('p', data, status, headers, config);
					// this callback will be called asynchronously
					// when the response is available
				}).
				error(function(data, status, headers, config) {
					//console.log('e', data, status, headers, config);
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
		}

	}]);


	//directives
	app.directive('note', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/note.html'
		};
	});

}());






/*
	app.controller('NoteFormCtrl', ['$scope', '$http', function($scope, $http) {

		$scope.newValue = "hello";

		$scope.submitNote = function ($event) {

			var data = {character_id: 1, note:'hello word!'};

		$http.post('rest/', data);
*/
/*
// Simple POST request example (passing data) :
$http.post('rest/', {character_id: 1, note:'hello word!'}).
	success(function(data, status, headers, config) {
		console.log('p', data, status, headers, config);
// this callback will be called asynchronously
// when the response is available
	}).
	error(function(data, status, headers, config) {
		console.log('e', data, status, headers, config);
// called asynchronously if an error occurs
// or server returns response with an error status.
});
*/

/*
			var args = {};
			args.character_id = 1;
			args.note = $event.originalTarget[0].value;
			$http.post('rest', args);
*/

/*
			$http.post('rest').
				success(function () {
					//add value
					//{
					//	cid: 1
					//	note: argments.note
					//}
					//clear form
				}).
				error(function () {
					$scope.newNote = 'Error saving data to server';
				});

		};
*/


/*
		$http.get('rest').
			success(function(data, status, headers, config){
				$scope.notes = data;
			}).
			error(function(data, status, headers, config) {
				$scope.notes = 'Error getting data from server';
			});

	}]);
*/
