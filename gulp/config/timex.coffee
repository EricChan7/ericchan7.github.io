src = './src/timex'
dest = './timex'

module.exports =
  tasks: ['browserify', 'style', 'page', 'image']

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
    lib: ['./node_modules/normalize.css/normalize.css']

  page:
    src: "#{src}/*.html"
    dest: "#{dest}"

  image:
    src: "#{src}/image/*"
    dest: "#{dest}/image"

  browserSync:
    serve: "#{dest}"

  watch:
    style: "#{src}/css/*.sass"
    browserify: "#{src}/js/**/*.jsx"
    page: "#{src}/*.html"
