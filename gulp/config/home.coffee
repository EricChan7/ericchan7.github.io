src = './src'
dest = '.'

module.exports =
  tasks: ['browserify', 'style', 'page']

  browserify:
    script: 'coffee'
    entries: ["#{src}/app.coffee"]
    dest: "#{dest}"
    paths: ["#{src}/js", './src/**/js', './node_modules']
    extensions: ['.coffee', '.js']

  style:
    src: "#{src}/app.sass"
    dest: "#{dest}"
    paths: ["#{src}/css", './src/**/css', './node_modules']
    lib: ['./node_modules/normalize.css/normalize.css']

  page:
    src: "#{src}/*.html"
    dest: "#{dest}"

  browserSync:
    serve: "#{dest}"

  watch:
    style: "#{src}/*.sass"
    browserify: "#{src}/*.coffee"
    page: "#{src}/*.html"
