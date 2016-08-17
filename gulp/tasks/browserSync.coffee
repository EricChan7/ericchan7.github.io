
browserSync = require('browser-sync').create();

module.exports = (gulp, $, config) ->
  gulp.task 'browserSync', () ->
    browserSync.init
      proxy: config.browserSync.proxy

    for k, v of config.watch
      console.log "Watching #{k}... 👁"
      gulp.watch config.watch[k], [k, browserSync.reload]

    gulp.watch config.nodemon.script, ['page', browserSync.reload]
