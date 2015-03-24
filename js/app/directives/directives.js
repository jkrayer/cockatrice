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


app.directive('save', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/save.html',
		replace: true
	};
});


app.directive('skills', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/skills.html',
		replace: true
	};
});
