import React from 'react'
import Frame from 'gallery/modules/frame'
import GetImage from 'gallery/lib/getImage'
import PassCode from 'passCode/passCode'
import Loading from 'loading/loading'
import { Link } from 'react-router'
import Mixin from 'mixin'

class Gallery extends React.Component {
  constructor() {
    super()
    this.getImage = new GetImage(5)
    this.state = {
      showImage: true
    }
  }

  checkPass() {
    if (!window.api.is_logged_in()) {
      // render login module
      return (
        <PassCode
          passFunc={ this.startGallery.bind(this) }
        />
      )
    } else if (this.getImage.images.length <= 0) {
      // initialize
      this.getImage.list()
        .then(() => this.startGallery(), (e) => console.info(e))
      return (
        <Loading />
      )
    } else {
      return (
        <div>
          <Frame
            state={ this.state.showImage }
            getImage={ this.getImage }
          />
          <Frame
            state={ !this.state.showImage }
            getImage={ this.getImage }
          />
        </div>
      )
    }
  }

  startGallery() {
    this.setState({ showImage: true })
  }

  componentWillMount() {
    Mixin.title('Gallery')

    setInterval(() => {
      if (this.getImage.images.length > 0) {
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
