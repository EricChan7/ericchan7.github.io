isProd = process.env.NODE_ENV == 'production'

module.exports = (gulp, $, config) ->
  config = config.style

  gulp.task 'style', () ->
    $.rubySass config.src,
        loadPath: config.paths
      .on 'error', $.rubySass.logError
      .pipe $.autoprefixer()
      .pipe $.addSrc config.lib
      .pipe $.concat('app.css')
      .pipe $.if(isProd, $.cssnano())
      .pipe gulp.dest(config.dest)
