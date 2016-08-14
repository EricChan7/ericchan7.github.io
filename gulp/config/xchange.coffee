src = './src/xchange'
dest = './xchange'
style_path = './src/style/module'

module.exports =
  tasks: ['browserify', 'page']

  browserify:
    entries: ["#{src}/js/app.coffee"]
    dest: "#{dest}/js"
    paths: [
      "#{src}/js", style_path,
      './node_modules', './bower_components'
    ]
    extensions: ['.coffee', '.js']

  style:
    src: "#{src}/css/app.sass"
    dest: "#{dest}/css"
    paths: [
      "#{src}/css", style_path,
      './node_modules', './bower_components'
    ]
    lib: [
      './node_modules/normalize.css/normalize.css',
      './bower_components/animate.css/animate.css'
    ]

  page:
    src: "#{src}/*.html"
    dest: "#{dest}"

  browserSync:
    serve: "#{dest}"

  watch:
    style: ["#{src}/css/*.sass", "#{style_path}/**/*.sass"]
    browserify: [
      "#{src}/js/**/*.coffee",
      "#{style_path}/**/*.jsx",
      "#{style_path}/**/*.coffee"
    ]
    page: "#{src}/*.html"
