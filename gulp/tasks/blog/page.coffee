module.exports = (gulp, $, config) ->
  config = config.blog.page

  gulp.task 'page', () ->
    gulp.src config.src
      .pipe gulp.dest(config.dest)
