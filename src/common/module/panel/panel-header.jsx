import React from 'react'

class PanelHeader extends React.Component {
  render () {
    return (
      <div
        className="panel-header"
      >
        { this.props.title }
      </div>
    )
  }
}

PanelHeader.propTypes = {
  title: React.PropTypes.string
}

export default PanelHeader
