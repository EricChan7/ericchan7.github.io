
import React from 'react'
import ReactDOM from 'react-dom'
import GetImage from 'lib/getImage'

class Image extends React.Component {
  constructor(props) {
    super(props)

    this.getImage = new GetImage(20)
    this.fetching = false
    this.className = 'container'
    this.in = ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp',
              'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig',
              'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flipInX', 'flipInY',
              'lightSpeedIn', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight',
              'rotateInUpLeft', 'rotateInUpRight', 'rollIn', 'zoomIn', 'zoomInDown',
              'zoomInLeft', 'zoomInRight', 'zoomInUp', 'slideInDown', 'slideInLeft',
              'slideInRight', 'slideInUp']
    this.out = ['bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp',
              'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig',
              'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'flipOutX', 'flipOutY',
              'lightSpeedOut', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight',
              'rotateOutUpLeft', 'rotateOutUpRight', 'rollOut', 'zoomOut', 'zoomOutDown',
              'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideOutDown', 'slideOutLeft',
              'slideOutRight', 'slideOutUp']

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
      className: `${this.className} animated ${this.props.state ? this.selectAnimation(this.in) : this.selectAnimation(this.out)}`
    }
  }

  fetchImage() {
    return new Promise((resolve, reject) => {
      if (this.fetching) {
        reject('Reject, fetching exists.')
      } else {
        this.fetching = true

        this.getImage.list.then((data) => {
          this.fetching = false
          this.setState({ images: data })
          resolve()
        }, (e) => {
          this.fetching = false
          reject(`Reject. ${e}`)
        })
      }
    })
  }

  updateImage(nextPropsState) {
    this.setState({
      image: nextPropsState ? this.state.image : this.state.images.pop()
    })
  }

  setStyle(url_base, widthRatio, heightRatio) {
    let a = widthRatio >= 1,
    b = heightRatio >= 1,
    c = widthRatio >= heightRatio

    return {
      backgroundImage: this.getImage.showURL(url_base),
      backgroundSize: a && c || a && !b || !b && c ? '100% auto' : 'auto 100%'
    }
  }

  rand(x) {
    return Math.floor(Math.random() * x)
  }

  selectAnimation(list) {
    return list[this.rand(list.length)]
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps

    this.setState({
      className: `${this.className} animated ${this.props.state ? this.selectAnimation(this.in) : this.selectAnimation(this.out)}`
    })
  }

  componentDidMount() {
    this.fetchImage().then(() => this.updateImage(this.props.state), (e) => console.log(e))

    $(ReactDOM.findDOMNode(this)).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
      if (this.state.images.length <= 1) {
        this.fetchImage().then(() => this.updateImage(this.props.state), (e) => console.log(e))
      } else {
        this.updateImage(this.props.state)
      }
    })
  }

  render() {
    return (
      <div
        className={this.state.className}
        style={this.setStyle(
          this.state.image.url_base,
          this.state.image.width / $(window).width(),
          this.state.image.height / $(window).height()
        )}
      >
      </div>
    )
  }
}

export default Image
