src = './src/time'
dest = './time'

module.exports =
  tasks: ['browserify', 'style', 'page', 'image', 'font']

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

  image:
    src: "#{src}/image/*"
    dest: "#{dest}/image"

  font:
    src: "#{src}/font/*"
    dest: "#{dest}/font"

  browserSync:
    serve: "#{dest}"

  watch:
    style: "#{src}/css/*.sass"
    browserify: "#{src}/js/*.coffee"
    page: "#{src}/*.html"
