src = './src/f2f'
dest = './f2f'

module.exports =
  browserify:
    entries: ["#{src}/js/app.coffee"]
    dest: "#{dest}/js"
    paths: ["#{src}/js", './node_modules']

  style:
    src: "#{src}/css/app.sass"
    dest: "#{dest}/css"
    paths: ["#{src}/css", './node_modules']

  page:
    src: "#{src}/*.html"
    dest: "#{dest}"

  browserSync:
    serve: "#{dest}"

  watch:
    css: "#{src}/css/**/**"
    js: "#{src}/js/**/**"
    html: "#{src}/*.html"
