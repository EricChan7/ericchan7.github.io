
browserSync = require('browser-sync').create();

module.exports = (gulp, $, config) ->
  gulp.task 'browserSync', () ->
    browserSync.init
      server: config.browserSync.serve
      port: 8080

    gulp.watch config.watch.css, ['style', browserSync.reload]
    gulp.watch config.watch.html, ['page', browserSync.reload]
