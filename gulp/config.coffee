destPath = './dest'

module.exports =
  blog:
    browserify:
      entries: ['./blog/js/app.jsx']
      dest: "#{destPath}/blog/js"
      paths: ['./blog/js', './node_modules']

    style:
      src: './blog/css/app.sass'
      dest: "#{destPath}/blog/css"
      paths: ['./node_modules', './blog/css']

    page:
      src: './blog/*.html'
      dest: "#{destPath}/blog"

    browserSync:
      serve: "#{destPath}/blog"

    watch:
      css: './blog/css/**/**'
      js: ['./blog/js/**/**']
      html: ['./blog/*.html']

    font:
      src: './node_modules/font-awesome/fonts/**.*'
      dest: "#{destPath}/blog/fonts"
