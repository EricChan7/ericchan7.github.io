src = './src'
dest = './public'

module.exports =
  tasks: ['browserify', 'style', 'page', 'font']

  browserify:
    script: 'react'
    entries: ["#{src}/app.jsx"]
    dest: dest
    paths: [src, "#{src}/style/modules", './node_modules', './bower_components']
    extensions: ['.jsx', '.js']

  style:
    src: "#{src}/app.sass"
    dest: dest
    paths: [src, "#{src}/style/modules", './node_modules', './bower_components']
    lib: [
      './src/style/modules/font.css'
      './node_modules/normalize.css/normalize.css'
      './bower_components/animate.css/animate.css'
    ]

  page:
    src: "#{src}/*.html"
    dest: dest

  font:
    src: './node_modules/font-awesome/fonts/*'
    dest: "#{dest}/fonts"

  browserSync:
    serve: dest
    proxy: 'localhost:8888'

  nodemon:
    script: './server.coffee'
    watch: 'server.coffee'

  watch:
    browserify: ["#{src}/**/*.jsx", "#{src}/**/*.js", "#{src}/**/*.coffee"]
    style: ["#{src}/**/*.sass"]
    page: "#{src}/*.html"
