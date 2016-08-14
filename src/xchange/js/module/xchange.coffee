React = require 'react'
{ CableMixin, ChannelMixin } = require 'action-cable-react'

module.exports = React.createClass
  mixins: [CableMixin(React), ChannelMixin('ReceiversChannel')]

  handleConnected: ->
    console.log 'connected'

  render: ->
    React.DOM.div {},
      'Good!'
