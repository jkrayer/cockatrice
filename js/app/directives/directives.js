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
