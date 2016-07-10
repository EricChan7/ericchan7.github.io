/* eslint-disable react/no-danger */

import React from 'react'
import Panel from 'panel/panel'
import PanelHeader from 'panel/panel-header'

class Styleguide extends React.Component {
  constructor (props) {
    super(props)
  }

  exampleHtml() {
    return {
      __html: this.props.code
    }
  }

  sanitizeHtml () {
    return {
      __html: this.props.code.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r?\n( ){4}/g, '<br/>').replace(/ /g, '&nbsp;')
    }
  }

  render () {
    return (
      <Panel>
        <PanelHeader title={this.props.title} />
        { this.props.description }
        <hr />
        { this.props.example }
        <hr />
        <code
          dangerouslySetInnerHTML={ this.sanitizeHtml() }
        />
      </Panel>
    )
  }
}

Styleguide.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  code: React.PropTypes.string,
  className: React.PropTypes.string,
  example: React.PropTypes.node
}

export default Styleguide
