import React from 'react'

class PanelHeader extends React.Component {
  render () {
    return (
      <div
        className={ this.props.className + ' panel-header' }
      >
        { this.props.title }
      </div>
    )
  }
}

PanelHeader.propTypes = {
  title: React.PropTypes.string,
  className: React.PropTypes.string
}

PanelHeader.defaultProps = {
  className: ''
}

export default PanelHeader
