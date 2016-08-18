koa = require('koa')
send = require('koa-send')
gzip = require('koa-gzip')

app = koa()
port = process.env.PORT || 8888

app.use gzip()

app.use (next) ->
  if this.path == '/app.js' ||
      this.path == '/app.css' ||
      this.path.match(/^\/assets\//g) != null
    yield send this, this.path,
      root: __dirname + '/public',
      setHeaders: (res) ->
        res.setHeader('Cache-Control', 'public, max-age=7200')
  else if this.path == '/icon.png'
    yield send(this, '/icon.png')
  else
    yield next


app.use ->
  yield send(this, '/public/index.html')

app.listen port
console.log "Listening on http://0.0.0.0:#{port}"
