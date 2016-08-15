import React from 'react'
import Hand from 'clock/modules/hand'

class Hands extends React.Component {
  constructor() {
    super()

    this.state = {
      second: 0,
      minute: 0,
      hour: 0
    }
  }

  componentWillMount() {
    this.setInterval = setInterval(() => {
      this.tick()
    }, 1000)
    this.updateHand = false

    this.am = false

    this.hands = ['hour', 'minute', 'second']
  }

  componentDidMount() {
    this.tick()
  }

  componentWillUnmount() {
    clearInterval(this.setInterval)
  }

  handSize(part) {
    let res = 0, baseValue = this.props.size/2/16
    switch (part) {
    case 'hour':
      res = Math.floor(baseValue*0.45)
      break
    case 'minute':
      res = Math.floor(baseValue*0.7)
      break
    case 'second':
      res = Math.floor(baseValue*0.95)
      break
    }
    return res
  }

  tick() {
    let now = new Date(),
      second = now.getSeconds(),
      minute = now.getMinutes() + second/60,
      hour = now.getHours() + minute/60

    if (hour > 12) {
      this.am = false
      hour -= 12
    } else {
      this.am = true
    }

    if (second === 0) {
      this.updateHand = true
    } else {
      this.updateHand = false
    }

    this.setState({
      second: second*360/60,
      minute: minute*360/60,
      hour: hour*360/12
    })
  }

  render() {
    let hands = this.hands.map((item, i) => {
      return (
        <Hand
          key={i}
          part={item}
          size={this.handSize(item)}
          deg={this.state[item]}
          updateHand={this.updateHand}
        />
      )
    })

    return (
      <div>
        { hands }
      </div>
    )
  }
}

Hands.propTypes = {
  size: React.PropTypes.number
}

export default Hands
