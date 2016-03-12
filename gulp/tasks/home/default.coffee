
module.exports = (gulp, $, config) ->
  gulp.task 'build', (cb) ->
    $.sequence ['style', 'page'], cb

  gulp.task 'default', ['build'], (cb) ->
    $.sequence 'browserSync', cb
