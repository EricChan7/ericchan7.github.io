src = './src'
dest = './www'

module.exports =
  tasks: ['browserify', 'style', 'page']

  browserify:
    script: 'react'
    entries: ["#{src}/app.jsx"]
    dest: dest
    paths: [src, "#{src}/style/modules", './node_modules', './bower_components']
    extensions: ['.jsx', '.js']

  style:
    src: "#{src}/app.sass"
    dest: dest
    paths: [src, "#{src}/style/modules", './node_modules', './bower_components']
    lib: [
      './src/style/modules/font.css'
      './node_modules/normalize.css/normalize.css'
      './bower_components/animate.css/animate.css'
    ]

  page:
    src: "#{src}/*.html"
    dest: dest

  browserSync:
    serve: dest

  watch:
    browserify: ["#{src}/**/*.jsx", "#{src}/**/*.js"]
    style: ["#{src}/**/*.sass"]
    page: "#{src}/*.html"
