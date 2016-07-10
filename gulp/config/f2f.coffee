src = './src/f2f'
dest = './f2f'

module.exports =
  browserify:
    entries: ["#{src}/js/app.coffee"]
    dest: "#{dest}/js"
    paths: ["#{src}/js", './src/**/js', './node_modules']
    extensions: ['.coffee', '.js']

  style:
    src: "#{src}/css/app.sass"
    dest: "#{dest}/css"
    paths: ["#{src}/css", './src/**/css', './node_modules']

  page:
    src: "#{src}/*.html"
    dest: "#{dest}"

  browserSync:
    serve: "#{dest}"

  watch:
    style: "#{src}/css/**/**"
    browserify: "#{src}/js/**/**"
    page: "#{src}/*.html"
