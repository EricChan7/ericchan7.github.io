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
      lib: []

    page:
      src: './blog/*.html'
      dest: "#{destPath}/blog"

    browserSync:
      serve: "#{destPath}/blog"

    watch:
      css: './src/css/**/**'
      js: ['./src/js/**/**']
      html: ['./src/*.html']
