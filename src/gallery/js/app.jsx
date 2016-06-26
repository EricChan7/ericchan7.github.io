import $ from 'jquery'
import React from 'react'
import { render } from 'react-dom'
import Gallery from 'gallery'

$(document).ready( () => {
  window.$ = $

  render(
    <Gallery />,
    document.getElementById('showGround')
  )
})
