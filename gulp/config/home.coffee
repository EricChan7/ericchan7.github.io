src = './src'
dest = '.'

module.exports =
  style:
    src: "#{src}/app.sass"
    dest: "#{dest}"
    paths: ["#{src}", './node_modules']
    lib: ['./node_modules/normalize.css/normalize.css']

  page:
    src: "#{src}/*.html"
    dest: "#{dest}"

  browserSync:
    serve: "#{dest}"

  watch:
    css: "#{src}/*.sass"
    js: "#{src}/js/**/**"
    html: "#{src}/*.html"
