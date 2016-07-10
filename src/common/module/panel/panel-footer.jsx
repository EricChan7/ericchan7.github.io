import React from 'react'

class PanelFooter extends React.Component {
  render () {
    return (
      <div
        className={ (this.props.className || '') + ' panel-footer' }
      >
        { this.props.children }
      </div>
    )
  }
}

PanelFooter.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string
}

export default PanelFooter
