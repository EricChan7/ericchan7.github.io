
module.exports = (gulp, $, config) ->
  gulp.task 'build', (cb) ->
    $.sequence ['browserify', 'style', 'page', 'font'], cb

  gulp.task 'default', ['build'], (cb) ->
    $.sequence 'browserSync', cb
