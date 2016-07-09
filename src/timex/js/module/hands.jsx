import React from 'react'
import Hand from 'module/hand'

class Hands extends React.Component {
  constructor() {
    super()

    this.state = {
      second: 0,
      minute: 0,
      hour: 0
    }

    this.am = false

    this.hands = [
      {
        name: 'hour',
        size: 3
      },
      {
        name: 'minute',
        size: 5
      },
      {
        name: 'second',
        size: 7
      }
    ]
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

    this.setState({
      second: second*360/60,
      minute: minute*360/60,
      hour: hour*360/12
    })
  }

  componentWillMount() {
    this.setInterval = setInterval(() => {
      this.tick()
    }, 1000)

    this.tick()
  }

  componentWillUnmount() {
    clearInterval(this.setInterval)
  }

  render() {
    let hands = this.hands.map((item, i) => {
      return (
        <Hand
          key={i}
          part={item.name}
          size={item.size}
          deg={this.state[item.name]}
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

export default Hands
