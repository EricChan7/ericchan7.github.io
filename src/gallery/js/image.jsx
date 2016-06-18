import $ from 'jquery'
import React from 'react'

class Image extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      image: {
        url_base: 'https://lh3.googleusercontent.com/-YNI1nOIcXlA/VkIJ3As5AeI/AAAAAAAIcpU/1juBUBmcCkE/',
        width: 341,
        height: 512
      },
      show: props.state
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.state) {
      if (this.state.images.length <= 1) {
        $.get('https://soundofate.herokuapp.com/api/girls/20', (data) => {
          this.setState((previousState) => {
            return {
              images: data
            }
          })
        })
      }


      this.setState(() => {
        return {
          show: nextProps.state
        }
      })
    } else {
      if (this.state.images.length > 0) {
        this.setState(() => {
          return {
            image: this.state.images.pop(),
            show: nextProps.state
          }
        })
      }
    }
  }

  componentWillMount() {
  }

  render() {
    var divStyle = {
      backgroundImage: 'url(' + this.state.image.url_base + 's1024/1.jpg)',
      display: this.state.show ? 'block' : 'none'
    }
    var widthRatio = this.state.image.width / $(window).width()
    var heightRatio = this.state.image.height / $(window).height()

    if (widthRatio >=1 && heightRatio >= 1 || widthRatio < 1 && heightRatio < 1) {
      if (widthRatio > heightRatio) {
        divStyle.backgroundSize = '100% auto'
      } else {
        divStyle.backgroundSize = 'auto 100%'
      }
    } else if (widthRatio >= 1 && heightRatio < 1) {
      divStyle.backgroundSize = '100% auto'
    } else if (widthRatio < 1 && heightRatio >= 1) {
      divStyle.backgroundSize = 'auto 100%'
    }

    return (
      <div
        className="container"
        style={divStyle}
      >
      </div>
    )
  }
}

export default Image
