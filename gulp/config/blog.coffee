src = './src/blog'
dest = './blog'

module.exports =
  tasks: ['browserify', 'style', 'page', 'font']

  browserify:
    script: 'react'
    entries: "#{src}/js/app.jsx"
    dest: "#{dest}/js"
    paths: ["#{src}/js", './node_modules']
    extensions: ['.js', '.jsx']

  style:
    src: "#{src}/css/app.sass"
    dest: "#{dest}/css"
    paths: ["#{src}/css", './node_modules']

  page:
    src: "#{src}/*.html"
    dest: "#{dest}"

  browserSync:
    serve: "#{dest}"

  font:
    src: './node_modules/font-awesome/fonts/**.*'
    dest: "#{dest}/fonts"

  watch:
    style: "#{src}/css/**/**"
    browserify: "#{src}/js/**/**"
    page: "#{src}/*.html"
