var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('gulp-browserify');
var del = require('del');
 
var paths = {
  scripts: ['song/js/*.js'],
  images: 'song/img/*'
};
 
// Not all tasks need to use streams 
// A gulpfile is just another node program and you can use all packages available on npm 
gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src` 
  del(['build'], cb);
});
 
gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts) 
  // with sourcemaps all the way down 
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('sof.min.js'))
      .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
    .pipe(gulp.dest('song/build/js'));
});
 
// Rerun the task when a file changes 
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
});
 
// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['watch', 'scripts']);