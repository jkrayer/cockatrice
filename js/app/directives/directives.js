/**
 * Note Display
 */
app.directive('note', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/note.html',
		replace: true
	};
});


app.directive('score', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/score.html',
		replace: true
	};
});
