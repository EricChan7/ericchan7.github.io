
module.exports = (gulp, $, config) ->
  gulp.task 'build', ['clean'], (cb) ->
    $.sequence config.tasks, cb

  gulp.task 'default', ['build'], (cb) ->
    $.sequence 'nodemon', 'browserSync', cb
