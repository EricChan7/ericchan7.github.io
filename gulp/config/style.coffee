src = './src/style'
dest = './style'

module.exports =
  tasks: ['browserify', 'page', 'style', 'font']

  browserify:
    script: 'react'
    entries: "#{src}/example/app.jsx"
    dest: "#{dest}/js"
    paths: ["#{src}/example", "#{src}/module", './node_modules']
    extensions: ['.js', '.jsx']

  page:
    src: "#{src}/*.html"
    dest: "#{dest}"

  style:
    src: "#{src}/example/app.sass"
    dest: "#{dest}/css"
    paths: [
      "#{src}/css",
      "#{src}/module",
      './node_modules',
      './bower_components'
    ]
    lib: [
      './src/style/module/font.css'
      './node_modules/normalize.css/normalize.css'
    ]

  font:
    src: './node_modules/font-awesome/fonts/*'
    dest: "#{dest}/fonts"

  browserSync:
    serve: dest

  watch:
    style: ["#{src}/example/*.sass", "#{src}/module/**/*.sass"]
    browserify: ["#{src}/example/*.jsx", "#{src}/module/**/*.jsx", "#{src}/module/**/*.coffee"]
    page: "#{src}/*.html"
