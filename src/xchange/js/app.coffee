
window.$ = require 'jquery'
React = require 'react'
ReactDOM = require 'react-dom'
XChange = require 'module/xchange'
{ ActionCable, Cable } = require 'action-cable-react'

$(document).ready ->
  actionCable = ActionCable.createConsumer('ws://localhost:3000/cable')
  cable = new Cable
    ChatChannel: actionCable.subscriptions.create
      channel: 'ReceiversChannel'
    , ['new']

  ReactDOM.render React.createElement(XChange,
    cable: cable
  ), document.getElementById('xchange')
