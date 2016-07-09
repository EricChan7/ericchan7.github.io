import React from 'react'
import Dot from 'module/dot'

class Hand extends React.Component {
  constructor(props) {
    super(props)
  }

  dots(size) {
    let elems = []
    for (var i = size - 1; i >= 0; i--) {
      elems.push(<Dot key={i} />)
    }
    return elems
  }

  render() {
    return (
      <div
        className={`${this.props.part} dots`}
        style={{
          transform: `rotateZ(${this.props.deg}deg) translate(-50%, -100%)`
        }}
      >
        { this.dots(this.props.size) }
      </div>
    )
  }
}

Hand.propTypes = {
  size: React.PropTypes.number.isRequired,
  part: React.PropTypes.string.isRequired,
  deg: React.PropTypes.number.isRequired
}

export default Hand
