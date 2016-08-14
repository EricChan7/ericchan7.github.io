import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import Api from 'api.coffee'

import { Router, Route, browserHistory } from 'react-router'
import Gallery from 'gallery/gallery'

$(document).ready( () => {
  window.$ = $
  window.React = React
  window.ReactDOM = ReactDOM
  window.api = new Api('https://italk-pro.herokuapp.com', 'api/v1')

  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={Gallery} />
      <Route path="/gallery" component={ Gallery } />
    </Router>
  ), document.getElementById('main-container'))
})
