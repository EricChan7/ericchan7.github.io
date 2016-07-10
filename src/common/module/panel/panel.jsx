import React from 'react'

class Panel extends React.Component {
  render () {
    return (
      <div
        className="panel"
      >
        { this.props.children }
      </div>
    )
  }
}

Panel.propTypes = {
  children: React.PropTypes.node
}

export default Panel
