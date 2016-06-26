
module.exports = (gulp, $, config) ->
  gulp.task 'clean', () ->
    gulp.src "./#{process.env.APP}", read: false
      .pipe $.clean() if process.env.APP != 'home'
