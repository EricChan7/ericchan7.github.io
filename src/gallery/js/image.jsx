
import React from 'react'
import GetImage from 'lib/getImage'

class Image extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      image: {
        url_base: 'https://lh3.googleusercontent.com/-EMZYc1aMxEI/Vj3EnHOokuI/AAAAAAAGHjs/GJN2jjYaUPk/',
        width: 2048,
        height: 1365,
        album: '6214330142787629665',
        photo: '6214339237075522274',
        md5: '9383188b9cfc504a0c7a041854b9d026'
      },
      show: props.state
    }

    this.getImage = new GetImage(20)
    this.fetching = false
  }

  fetchImage() {
    return new Promise((resolve, reject) => {
      if (this.fetching) {
        resolve()
      } else {
        this.fetching = true

        this.getImage.list.then((data) => {
          this.fetching = false
          this.setState({ images: data })
          resolve()
        }, () => {
          this.fetching = false
          reject()
        })
      }
    })
  }

  updateImage(nextPropsState) {
    this.setState({
      show: nextPropsState,
      image: nextPropsState ? this.state.image : this.state.images.pop()
    })
  }

  setStyle(url_base, isShow, widthRatio, heightRatio) {
    var a = widthRatio >= 1,
    b = heightRatio >= 1,
    c = widthRatio >= heightRatio

    return {
      backgroundImage: this.getImage.showURL(url_base),
      display: isShow ? 'block' : 'none',
      backgroundSize: a && c || a && !b || !b && c ? '100% auto' : 'auto 100%'
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.images.length <= 1) {
      this.fetchImage().then(() => this.updateImage(nextProps.state))
    } else {
      this.updateImage(nextProps.state)
    }
  }

  componentDidMount() {
    this.fetchImage().then(() => this.updateImage(this.state.show))
  }

  render() {
    return (
      <div
        className="container"
        style={this.setStyle(
          this.state.image.url_base,
          this.state.show,
          this.state.image.width / $(window).width(),
          this.state.image.height / $(window).height()
        )}
      >
      </div>
    )
  }
}

export default Image
