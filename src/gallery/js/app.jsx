import $ from 'jquery'
import React from 'react'
import { render } from 'react-dom'
import Image from 'image'

$(document).ready( () => {
  window.$ = $

  class Gallery extends React.Component {
    constructor() {
      super()

      this.state = {
        image: true
      }
    }

    componentWillMount() {
      setInterval(() => this.setState({ image: !this.state.image }), 5000)
    }

    render() {
      return (
        <div>
          <Image
            state={this.state.image}
          />
          <Image
            state={!this.state.image}
          />
        </div>
      )
    }
  }

  render(
    <Gallery />,
    document.getElementById('showGround')
  )
})
