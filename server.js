var koa = require('koa')
var send = require('koa-send')

var app = koa()

// app.use(function *(){
//   yield send(this, '/public/index.html')
// })

app.use(function *(next){
  if (this.path == '/app.js' || this.path == '/app.css' || this.path.match(/^\/assets\//g) != null) {
    yield send(this, this.path, { root: __dirname + '/public' })
  } else if (this.path == '/icon.png') {
    yield send(this, '/icon.png')
  }
  else {
    yield next
  }
})

app.use(function *(){
  yield send(this, '/public/index.html')
})

app.listen(3000)
console.log('Listening on http://0.0.0.0:3000')
