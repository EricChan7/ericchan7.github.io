
browserSync = require('browser-sync').create();

module.exports = (gulp, $, config) ->
  gulp.task 'browserSync', () ->
    browserSync.init
      server: config.browserSync.serve
      port: 8080

    for k, v of config.watch
      console.log "Watching #{k}... 👁"
      gulp.watch config.watch[k], [k, browserSync.reload]
