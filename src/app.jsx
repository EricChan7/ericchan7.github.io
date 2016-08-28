import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import Api from 'api.coffee'
import Mixin from 'mixin'

import { Router, Route, browserHistory } from 'react-router'
import Parallax from 'parallax/parallax'
import Gallery from 'gallery/gallery'
import Clock from 'clock/clock'
import Slogan from 'slogan/slogan'
import Info from 'info/info'
import Footer from 'footer/footer'
import Header from 'header/header'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="parallax">
        <Parallax
          id="header"
          style={{
            zIndex: 5
          }}
          baseStyle={{
            backgroundImage: 'url(http://goo.gl/pMdwQx)'
          }}
        >
          <Header />
        </Parallax>
        <Parallax
          id="clock"
          style={{
            zIndex: 3
          }}
          layers={[
            {
              position: 'back',
              style: {
                backgroundImage: 'url(http://goo.gl/6X9ytu)'
              }
            }
          ]}
        >
          <Clock />
        </Parallax>
        <Parallax
          id="info"
          style={{
            zIndex: 4
          }}
        >
          <Info></Info>
        </Parallax>
        <Parallax
          id="slogan-1"
          style={{
            zIndex: 3
          }}
          layers={[
            {
              position: 'back',
              style: {
                backgroundImage: 'url(http://goo.gl/Y2AQwo)'

              }
            }
          ]}
        >
          <Slogan cite="Miley Cyrus">Life's a climb, but the view is great.</Slogan>
        </Parallax>
        <Parallax
          id="footer"
          style={{
            zIndex: 4
          }}
        >
          <Footer></Footer>
        </Parallax>
      </div>
    )
  }
}


$(document).ready( () => {
  window.$ = $
  window.React = React
  window.ReactDOM = ReactDOM
  window.api = new Api('https://italk-pro.herokuapp.com', 'api/v1')
  window.Mixin = Mixin

  window.api.ping().then(
    () => console.info('Server connected.'),
    () => console.error('Server not found.')
  )

  ReactDOM.render((
    <Router history={ browserHistory }>
      <Route path="/" component={ App } />
      <Route path="/clock" component={ Clock }></Route>
      <Route path="/gallery" component={ Gallery } />
    </Router>
  ), document.getElementById('main-container'))
})
