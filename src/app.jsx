import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import Api from 'api.coffee'
import Mixin from 'mixin'

import { Router, Route, browserHistory } from 'react-router'
import Gallery from 'gallery/gallery'
import Clock from 'clock/clock'

$(document).ready( () => {
  window.$ = $
  window.React = React
  window.ReactDOM = ReactDOM
  window.api = new Api('https://italk-pro.herokuapp.com', 'api/v1')
  window.Mixin = Mixin

  window.api.ping().then(() => console.info('Server connected.'), () => console.error('Server not found.'))

  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={Clock} />
      <Route path="/gallery" component={ Gallery } />
    </Router>
  ), document.getElementById('main-container'))
})
