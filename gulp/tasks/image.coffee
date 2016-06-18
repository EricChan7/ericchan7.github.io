module.exports = (gulp, $, config) ->
  config = config.image

  gulp.task 'image', () ->
    gulp.src config.src
      .pipe gulp.dest(config.dest)
