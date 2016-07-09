import React from 'react'

class Syms extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <span
        style={{
          left: `${(this.props.radius + 8) + this.props.radius * Math.sin(this.props.n*Math.PI/6)}px`,
          top: `${(this.props.radius + 8) - this.props.radius * Math.cos(this.props.n*Math.PI/6)}px`
        }}
      >
        {this.props.sym}
      </span>
    )
  }
}

Syms.propTypes = {
  n: React.PropTypes.any.isRequired,
  radius: React.PropTypes.number.isRequired,
  sym: React.PropTypes.string.isRequired
}

export default Syms
