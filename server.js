var koa = require('koa')
var send = require('koa-send')

var app = koa()
var port = process.env.NODE_ENV == 'production' ? process.env.PORT || 80 : 3000

app.use(function *(next){
  if (this.path == '/app.js' || this.path == '/app.css' || this.path.match(/^\/assets\//g) != null) {
    yield send(this, this.path, { root: __dirname + '/www' })
  } else if (this.path == '/icon.png') {
    yield send(this, '/icon.png')
  }
  else {
    yield next
  }
})

app.use(function *(){
  yield send(this, '/www/index.html')
})

app.listen(port)
console.log('Listening on http://0.0.0.0:' + port)
