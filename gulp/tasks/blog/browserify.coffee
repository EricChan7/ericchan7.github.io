browserify = require 'browserify'
source = require 'vinyl-source-stream'
buffer = require 'vinyl-buffer'

isProd = process.env.NODE_ENV == 'production'

module.exports = (gulp, $, config) ->
  config = config.browserify

  gulp.task 'browserify', () ->
    bundler = browserify
      entries: config.entries
      extensions: ['.js', '.jsx']
      paths: config.paths
      debug: false

    bundler.transform 'babelify',
      presets: ['es2015', 'react']

    bundler
      .bundle()
      .pipe source('app.js')
      .pipe buffer()
      .pipe $.if(isProd, $.uglify())
      .pipe gulp.dest(config.dest)
