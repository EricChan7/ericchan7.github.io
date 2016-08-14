
import React from 'react'
import ReactDOM from 'react-dom'
import GetImage from 'gallery/lib/getImage'

class Frame extends React.Component {
  constructor(props) {
    super(props)

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
      image: {},
      className: `${this.className} animated ${this.props.state ? this.selectAnimation(this.in) : this.selectAnimation(this.out)}`
    }
  }

  setStyle(image) {
    if (image.url_base == undefined) {
      return {
        color: 'white',
        top: '50%'
      }
    } else {
      let $window = $(window),
        a = image.width >= $window.width(),
        b = image.height >= $window.height(),
        c = ( image.width / image.height ) >= ( $window.width() / $window.height() )

      return {
        backgroundImage: GetImage.showURL(image.url_base),
        backgroundSize: a && c || a && !b || !b && c ? '100% auto' : 'auto 100%',
        color: 'rgba(0,0,0,0)',
        top: '0'
      }
    }
  }

  rand(x) {
    return Math.floor(Math.random() * x)
  }

  selectAnimation(list) {
    return list[this.rand(list.length)]
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      className: `${this.className} animated ${nextProps.state ? this.selectAnimation(this.in) : this.selectAnimation(this.out)}`
    })
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
      if (!this.props.state) this.setState({ image: this.props.image })
      $(ReactDOM.findDOMNode(this)).text(this.state.image.url_base == undefined ? 'Initializing...' : '')
    })
  }

  render() {
    return (
      <div
        className={this.state.className}
        style={this.setStyle(this.state.image)}
      >
      </div>
    )
  }
}

Frame.propTypes = {
  image: React.PropTypes.object.isRequired,
  state: React.PropTypes.bool.isRequired
}

export default Frame
