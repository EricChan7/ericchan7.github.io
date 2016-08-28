import React, { Component } from 'react'

export default class Parallax extends Component {
  constructor (props) {
    super(props)
    this.parallaxLayer = this.parallaxLayer.bind(this)
  }

  static get propTypes () {
    return {
      id: React.PropTypes.string.isRequired,
      style: React.PropTypes.object.isRequired,
      baseStyle: React.PropTypes.object,
      layers: React.PropTypes.array,
      children: React.PropTypes.element.isRequired
    }
  }

  static get defaultProps () {
    return {
      baseStyle: {},
      layers: []
    }
  }

  parallaxLayer (layer, index) {
    return (
      <div
        key={ index }
        className={ `parallax-layer parallax-layer--${layer.position}` }
        style={ layer.style }
      >
        { layer.element }
      </div>
    )
  }

  render() {
    return (
      <div
        id={ this.props.id }
        className="parallax-group"
        style={ this.props.style }
      >
        { this.props.layers.map(this.parallaxLayer) }
        <div
          className="parallax-layer parallax-layer--base"
          style={ this.props.baseStyle }
        >
          { this.props.children }
        </div>
      </div>
    )
  }
}
