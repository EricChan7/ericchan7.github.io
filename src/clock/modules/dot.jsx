import React from 'react'

class Dot extends React.Component {
  constructor() {
    super()

    this.colorPool = ['#F44336', '#EF9A9A', '#C62828', '#EC407A', '#880E4F',
                      '#CE93D8', '#F3E5F5', '#9C27B0', '#6A1B9A', '#9575CD',
                      '#512DA8', '#9FA8DA', '#3F51B5', '#1A237E', '#64B5F6',
                      '#81D4FA', '#80DEEA', '#00ACC1', '#00838F', '#26A69A',
                      '#00695C', '#43A047', '#DCE775', '#EEFF41', '#FFFF00',
                      '#FFC107', '#F57C00', '#FFA726', '#FF8A65', '#FF5722',
                      '#E64A19']
  }

  componentWillMount() {
    this.color = this.setColor()
  }

  componentWillUpdate(nextProps) {
    if (nextProps.updateDot) {
      this.color = this.setColor()
    }
  }

  setColor() {
    return this.colorPool[Math.floor(Math.random()*this.colorPool.length)]
  }

  render() {
    return (
      <div
        className={"dot"}
        style={{
          backgroundColor: this.color
        }}
      >
      </div>
    )
  }
}

Dot.propTypes = {
  updateDot: React.PropTypes.bool.isRequired
}

export default Dot
