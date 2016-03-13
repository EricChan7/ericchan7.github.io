src = './src'
dest = '.'

module.exports =
  browserify:
    entries: ["#{src}/app.coffee"]
    dest: "#{dest}"
    paths: ["#{src}/js", './node_modules']

  style:
    src: "#{src}/app.sass"
    dest: "#{dest}"
    paths: ["#{src}/css", './node_modules']
    lib: ['./node_modules/normalize.css/normalize.css']

  page:
    src: "#{src}/*.html"
    dest: "#{dest}"

  browserSync:
    serve: "#{dest}"

  watch:
    css: "#{src}/*.sass"
    js: "#{src}/*.coffee"
    html: "#{src}/*.html"
