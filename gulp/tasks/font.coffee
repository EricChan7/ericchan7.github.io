module.exports = (gulp, $, config) ->
  config = config.font

  gulp.task 'font', () ->
    if config?
      gulp.src config.src
        .pipe gulp.dest(config.dest)
