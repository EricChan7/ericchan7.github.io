import React from 'react'
import Mixin from 'mixin'

class ScrollLink extends React.Component {
  componentDidMount () {
    this.refs.scroll.addEventListener('click', (evt) => {
      evt.preventDefault()
      let node = document.getElementById(this.refs.scroll.dataset.scrollTo.replace('#', ''))
      Mixin.scrollTo(node, 500)
    })
  }

  render () {
    return (
      <div
        ref="scroll"
        data-scroll-to={ `#${this.props.link}` }
        style={{
          cursor: 'pointer'
        }}
      >
        { this.props.children }
      </div>
    )
  }
}

ScrollLink.propTypes = {
  children: React.PropTypes.node,
  link: React.PropTypes.string
}

ScrollLink.styleguide = {
  title: 'ScrollLink',
  description: 'Scroll within page',
  example: (
    <ScrollLink link="Button">
      Link Text
    </ScrollLink>
  ),
  code: `<ScrollLink link="Button">
      Link Text
    </ScrollLink>`
}

export default ScrollLink
