
module.exports = (gulp, $, config) ->
  gulp.task 'build', (cb) ->
    $.sequence config.tasks, cb

  gulp.task 'default', ['build'], (cb) ->
    $.sequence 'browserSync', cb
