import React from 'react'
import Frame from 'module/frame'
import GetImage from 'lib/getImage'
import PassCode from 'module/passCode'

class Gallery extends React.Component {
  constructor() {
    super()
    this.getImage = new GetImage(20)
    this.state = {
      showImage: true,
      pass: false
    }
  }

  checkPass() {
    if (this.state.pass) {
      return (
        <div>
          <Frame
            state={this.state.showImage}
            image={this.state.showImage ? {} : this.getImage.image}
          />
          <Frame
            state={!this.state.showImage}
            image={!this.state.showImage ? {} : this.getImage.image}
          />
        </div>
      )
    } else {
      return (
        <PassCode
          passFunc={ this.startGallery.bind(this) }
        />
      )
    }
  }

  startGallery() {
    this.setState({ pass: true })
  }

  componentWillMount() {
    if (window.api.is_logged_in) {
      this.startGallery()
    }

    setInterval(() => {
      if (this.state.pass && this.getImage.size > 0) {
        this.setState({ showImage: !this.state.showImage })
      }
    }, 5000)
  }

  render() {
    return (
      this.checkPass()
    )
  }
}

export default Gallery
