
module.exports = (gulp, $, config) ->
  gulp.task 'default', (cb) ->
    $.sequence ['browserify', 'style', 'page', 'font'], 'browserSync', cb
