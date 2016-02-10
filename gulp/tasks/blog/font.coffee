module.exports = (gulp, $, config) ->
  config = config.blog.font

  gulp.task 'font', () ->
    gulp.src config.src
      .pipe gulp.dest(config.dest)
