var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');


gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'))
    .pipe(notify("File saved"));
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});