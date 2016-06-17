src = './src/time'
dest = './time'

module.exports =
  tasks: ['browserify', 'style', 'page']

  browserify:
    script: 'coffee'
    entries: ["#{src}/js/app.coffee"]
    dest: "#{dest}/js"
    paths: ["#{src}/js", './node_modules']
    extensions: ['.coffee', '.js']

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
    js: "#{src}/js/*.coffee"
    html: "#{src}/*.html"
