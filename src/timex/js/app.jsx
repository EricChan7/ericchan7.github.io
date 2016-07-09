import $ from 'jquery'
import React from 'react'
import { render } from 'react-dom'
import Clock from 'module/clock'

$(document).ready( () => {
  window.$ = $

  render(
    <Clock />,
    document.getElementById('showGround')
  )
})
