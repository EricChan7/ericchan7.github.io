import React from 'react'
import Sym from 'module/syms'

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
    this.setState({radius: 100})
  }

  render() {
    return (
      <div
        className="face"
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

export default Face
