(function(){

	"use strict";

	var app = angular.module('NotesApp', []);

	//controllers
	app.controller('NotesCtrl', ['$scope', '$http', function($scope, $http) {

		$scope.notes = [];

		$http.get('rest').
			success(function(data, status, headers, config){
				$scope.notes = data;
			}).
			error(function(data, status, headers, config) {
				$scope.notes = 'Error getting data from server';
			});

	}]);

	app.controller('NoteFormCtrl', ['$scope', '$http', function($scope, $http) {

/*
		$http.get('rest').
			success(function(data, status, headers, config){
				$scope.notes = data;
			}).
			error(function(data, status, headers, config) {
				$scope.notes = 'Error getting data from server';
			});
*/
	}]);

	//directives
	app.directive('note', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/note.html'
		};
	});



}());
