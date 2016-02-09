isProd = process.env.NODE_ENV == 'production'

module.exports = (gulp, $, config) ->
  config = config.blog.style
  gulp.task 'style', () ->
    $.rubySass config.src
      .pipe $.addSrc config.lib
      .pipe $.concat('app.css')
      .pipe $.autoprefixer()
      .pipe $.if(isProd, $.minifyCss())
      .pipe gulp.dest(config.dest)
