var gulp = require('gulp'),
    sass = require('gulp-sass');

var config = {
  paths: {
    sass: './css/sass/**/*.scss',
    css: './css'
  }
};


gulp.task('default', ['sass', 'theWatcher'], function (callback) {

});


//SASS
gulp.task('sass', function () {

  gulp.src(config.paths.sass)
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest(config.paths.css));

});


//Watch Folders
gulp.task('theWatcher', function () {

  gulp.watch(config.paths.sass, ['sass'])
    .on('change', function(evt) {
      console.log(
        '[theWatcher] File ' + evt.path.replace(/.*(?=sass)/,'') + ' was ' + evt.type + ', compiling...'
      );
    });

});
