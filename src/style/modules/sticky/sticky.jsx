import React from 'react'

class Sticky extends React.Component {
  activateSticky () {
    if (this.refs.sticky.getBoundingClientRect().top < this.props.top) {
      this.refs.sticky.childNodes[0].style.position = 'fixed'
      this.refs.sticky.childNodes[0].style.width = `${this.width}px`
      this.refs.sticky.childNodes[0].style.top = `${this.props.top}px`
    } else if (this.refs.sticky.childNodes[0].style.position == 'fixed') {
      this.refs.sticky.childNodes[0].style.position = ''
      this.refs.sticky.childNodes[0].style.width = ''
      this.refs.sticky.childNodes[0].style.top = ''
    }
  }

  componentDidMount () {
    this.width = this.refs.sticky.offsetWidth
    this.refs.sticky.style.height = `${this.refs.sticky.offsetHeight}px`

    window.addEventListener('scroll', this.activateSticky.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.activateSticky.bind(this))
  }

  render () {
    return (
      <div
        ref="sticky"
        className="sticky"
      >
        { this.props.children }
      </div>
    )
  }
}

Sticky.propTypes = {
  children: React.PropTypes.element,
  top: React.PropTypes.number
}

Sticky.defaultProps = {
  top: 0
}

Sticky.styleguide = {
  title: 'Sticky',
  description: 'A Sticky wrapper',
  example: (
    <Sticky top={50}>
      <div style={{textAlign: 'right'}}>
        Sticky example...
      </div>
    </Sticky>
  ),
  code: `<Sticky top="50">
      <div>
        Sticky example...
      </div>
    </Sticky>`
}

export default Sticky
