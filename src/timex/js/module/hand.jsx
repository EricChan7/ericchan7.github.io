import React from 'react'
import Dot from 'module/dot'

class Hand extends React.Component {
  constructor(props) {
    super(props)
  }

  dots(size) {
    let elem = []
    for (var i = size; i >= 0; i--) {
      elem.push(<Dot key={i} />)
    }
    return elem
  }

  render() {
    return (
      <div className={this.props.part + ' dots'}>
        { this.dots(this.props.size) }
      </div>
    )
  }
}

Hand.propTypes = {
  size: React.PropTypes.number.isRequired,
  part: React.PropTypes.string.isRequired
}

export default Hand
