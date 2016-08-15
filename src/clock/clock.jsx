import React from 'react'
import Hands from 'clock/modules/hands'
import Face from 'clock/modules/face'

class Clock extends React.Component {
  constructor() {
    super()
  }

  componentWillMount() {
    Mixin.title('Time')
    this.size = 400
  }

  render() {
    return (
      <div id="clock">
        <Face size={this.size} />
        <Hands size={this.size} />
      </div>
    )
  }
}

export default Clock
