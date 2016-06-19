
module.exports = (gulp, $, config) ->
  gulp.task 'clean', () ->
    gulp.src "./#{process.env.TARGET}", read: false
      .pipe $.clean() if process.env.TARGET != 'home'
