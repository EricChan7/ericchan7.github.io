import React from 'react'
import Hands from 'module/hands'
import Face from 'module/face'

class Clock extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Face />
        <Hands />
      </div>
    )
  }
}

export default Clock
