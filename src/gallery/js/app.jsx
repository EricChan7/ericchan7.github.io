import $ from 'jquery'
import React from 'react'
import { render } from 'react-dom'
import Gallery from 'module/gallery'
import Api from 'api.coffee'

$(document).ready( () => {
  window.$ = $
  window.api = new Api('https://italk-pro.herokuapp.com', 'api/v1')

  render(
    <Gallery />,
    document.getElementById('showGround')
  )
})
