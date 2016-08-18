
import React from 'react'
import GetImage from 'gallery/lib/getImage'
import Mixin from 'mixin'

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

  componentWillMount() {
    this.setState({ image: this.props.getImage.image })
  }

  componentDidMount() {
    $(this.refs.frame).on(Mixin.whichAnimationEvent(), () => {
      if (!this.props.state) this.setState({ image: this.props.getImage.image })
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      className: `${this.className} animated ${nextProps.state ? this.selectAnimation(this.in) : this.selectAnimation(this.out)}`
    })
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
        backgroundSize: a && c || a && !b || !b && c ? '100% auto' : 'auto 100%'
      }
    }
  }

  rand(x) {
    return Math.floor(Math.random() * x)
  }

  selectAnimation(list) {
    return list[this.rand(list.length)]
  }

  render() {
    return (
      <div
        className={ this.state.className }
        style={ this.setStyle(this.state.image) }
        ref='frame'
      >
      </div>
    )
  }
}

Frame.propTypes = {
  getImage: React.PropTypes.instanceOf(GetImage).isRequired,
  state: React.PropTypes.bool.isRequired
}

export default Frame
