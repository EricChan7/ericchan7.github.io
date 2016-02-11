import $ from 'jquery'
import React from 'react'
import RenderDom from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import theme from 'component/theme'
import Blog from 'page/blog'

$(document).ready(function() {
  injectTapEventPlugin()

  class Page extends React.Component {
    getChildContext() {
      return {
        muiTheme: ThemeManager.getMuiTheme(theme)
      }
    }

    render() {
      return (
        <Blog />
      )
    }
  }

  Page.childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  RenderDom.render(
    <Page />,
    document.getElementById('container')
  )
})
