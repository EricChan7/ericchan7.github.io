import React, { Component } from 'react'

export default class Slogan extends Component {
  static get propTypes () {
    return {
      children: React.PropTypes.string.isRequired,
      cite: React.PropTypes.string.isRequired
    }
  }

  render () {
    return (
      <div className="slogan">
        <blockquote>
          { this.props.children }
          <cite>
            { this.props.cite }
          </cite>
        </blockquote>
      </div>
    )
  }
}
