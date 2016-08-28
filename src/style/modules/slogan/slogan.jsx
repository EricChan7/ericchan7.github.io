import React, { Component } from 'react'

export default class Slogan extends Component {
  static get propTypes () {
    return {
      children: React.PropTypes.string.isRequired
    }
  }

  render () {
    return (
      <div className="slogan">
        { this.props.children }
      </div>
    )
  }
}
