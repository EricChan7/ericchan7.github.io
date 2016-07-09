import React from 'react'
import Hand from 'module/hand'

class Clock extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Hand size={5} part={"hour"} />
    )
  }
}

export default Clock
