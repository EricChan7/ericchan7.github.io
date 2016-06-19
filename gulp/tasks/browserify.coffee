browserify = require 'browserify'
source = require 'vinyl-source-stream'
buffer = require 'vinyl-buffer'
coffeeify = require 'coffeeify'

isProd = process.env.NODE_ENV == 'production'

module.exports = (gulp, $, config) ->
  config = config.browserify

  gulp.task 'browserify', () ->
    bundler = browserify
      entries: config.entries
      extensions: config.extensions
      paths: config.paths
      debug: false

    if config.script == 'coffee'
      bundler.transform coffeeify,
        bare: false
        header: true

    if config.script == 'react'
      bundler.transform 'babelify',
        presets: ['es2015', 'react']

    bundler
      .bundle()
      .pipe source('app.js')
      .pipe buffer()
      .pipe $.if(isProd, $.uglify())
      .pipe gulp.dest(config.dest)
