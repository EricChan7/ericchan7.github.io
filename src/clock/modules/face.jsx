import React from 'react'
import Sym from 'clock/modules/syms'

class Face extends React.Component {
  constructor() {
    super()

    this.syms = {
      0: 'XII', 1: '', 2: '',
      3: 'III', 4: '', 5: '',
      6: 'IV', 7: '', 8: '',
      9: 'IX', 10: '', 11: ''
    }

    this.state = {
      radius: 0
    }
  }

  symsElem() {
    let elems = []
    for (let key in this.syms) {
      elems.push(
        <Sym
          key={key}
          n={key}
          radius={this.state.radius}
          sym={this.syms[key]}
        />
      )
    }
    return elems
  }

  componentWillMount() {
    this.setState({radius: this.props.size/2 - 16})
  }

  render() {
    return (
      <div
        className="face"
        style={{
          width: `${this.props.size/16}rem`,
          height: `${this.props.size/16}rem`,
          borderRadius: `${this.props.size/16}rem`
        }}
      >
        <div className="syms">
          { this.symsElem() }
        </div>
        <div
          className="heart"
        >
        </div>
      </div>
    )
  }
}

Face.propTypes = {
  size: React.PropTypes.number
}

export default Face
