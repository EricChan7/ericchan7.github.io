import React from 'react'
import Image from 'image'
import GetImage from 'lib/getImage'

class Gallery extends React.Component {
  constructor() {
    super()
    this.getImage = new GetImage(20)
    this.state = {
      showImage: true
    }
  }

  componentWillMount() {
    setInterval(() => {
      this.setState({ showImage: !this.state.showImage })
    }, 5000)
  }

  render() {
    return (
      <div>
        <Image
          state={this.state.showImage}
          image={this.state.showImage ? {} : this.getImage.image}
        />
        <Image
          state={!this.state.showImage}
          image={!this.state.showImage ? {} : this.getImage.image}
        />
      </div>
    )
  }
}

export default Gallery
