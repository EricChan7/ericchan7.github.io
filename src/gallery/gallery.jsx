import React from 'react'
import Frame from 'gallery/modules/frame'
import GetImage from 'gallery/lib/getImage'
import PassCode from 'gallery/modules/passCode'
import { Link } from 'react-router'
import Mixin from 'mixin'

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
    Mixin.title('Gallery')
    if (window.api.is_logged_in()) {
      this.getImage.list()
        .then(() => this.startGallery(), (e) => console.info(e))
    } else {
      this.setState({ pass: false })
    }

    setInterval(() => {
      if (this.state.pass && this.getImage.size > 0) {
        this.setState({ showImage: !this.state.showImage })
      }
    }, 5000)
  }

  render() {
    return (
      <section id="showGround">
        { this.checkPass() }
      </section>
    )
  }
}

export default Gallery
