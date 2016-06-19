src = './src/gallery'
dest = './gallery'

module.exports =
  tasks: ['browserify', 'style', 'page']

  browserify:
    script: 'react'
    entries: ["#{src}/js/app.jsx"]
    dest: "#{dest}/js"
    paths: ["#{src}/js", './node_modules', './bower_components']
    extensions: ['.jsx', '.js']

  style:
    src: "#{src}/css/app.sass"
    dest: "#{dest}/css"
    paths: ["#{src}/css", './node_modules', './bower_components']
    lib: ['./node_modules/normalize.css/normalize.css',
          './bower_components/animate.css/animate.css']

  page:
    src: "#{src}/*.html"
    dest: "#{dest}"

  browserSync:
    serve: "#{dest}"

  watch:
    style: "#{src}/css/*.sass"
    browserify: "#{src}/js/**/*.jsx"
    page: "#{src}/*.html"
