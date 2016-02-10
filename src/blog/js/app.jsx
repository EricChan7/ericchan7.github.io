
import $ from 'jquery'
import React from 'react'
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import HomeAppBar from 'page/home'

$(document).ready(function() {

  render(
    <HomeAppBar />,
    document.getElementById('container')
  )
})
