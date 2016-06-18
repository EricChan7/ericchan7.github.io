src = './src/gallery'
dest = './gallery'

module.exports =
  tasks: ['browserify', 'style', 'page']

  browserify:
    script: 'react'
    entries: ["#{src}/js/app.jsx"]
    dest: "#{dest}/js"
    paths: ["#{src}/js", './node_modules']
    extensions: ['.jsx', '.js']

  style:
    src: "#{src}/css/app.sass"
    dest: "#{dest}/css"
    paths: ["#{src}/css", './node_modules']
    lib: ['./node_modules/normalize.css/normalize.css']

  page:
    src: "#{src}/*.html"
    dest: "#{dest}"

  browserSync:
    serve: "#{dest}"

  watch:
    css: "#{src}/css/*.sass"
    js: "#{src}/js/*.jsx"
    html: "#{src}/*.html"
