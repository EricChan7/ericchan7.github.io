import React from 'react'
import ReactDOM from 'react-dom'

class Button extends React.Component {
  constructor () {
    super()
  }

  whichTransitionEvent(){
    let t,
      el = document.createElement('fakeelement')

    var transitions = {
      'transition'      : 'transitionend',
      'OTransition'     : 'oTransitionEnd',
      'MozTransition'   : 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    }

    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t]
      }
    }
  }

  componentDidMount () {
    this.refs.button.addEventListener('click', () => {
      this.refs.button.className += ' ripple'
    })

    this.refs.button.addEventListener(this.whichTransitionEvent(), () => {
      this.refs.button.className = this.refs.button.className.replace(/( ripple)/g, '')
    })
  }

  componentWillUnmount () {
    // console.log('unmounted')
  }

  render () {
    return (
      <button ref="button">
        { this.props.children || this.props.text }
      </button>
    )
  }
}

Button.styleguide = {
  title: 'Button',
  description: 'I am a Button!',
  example: (
    <Button text="Default" />
  ),
  code: `<Button text="Default" />
  `,
  className: 'some class name'
}

Button.propTypes = {
  children: React.PropTypes.node,
  text: React.PropTypes.node
}

export default Button
