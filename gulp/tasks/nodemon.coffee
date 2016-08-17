
module.exports = (gulp, $, config) ->
  gulp.task 'nodemon', ->
    $.nodemon
      script: config.nodemon.script
      watch: config.nodemon.watch
      ext: 'js'
      env:
        'NODE_ENV': 'development'
