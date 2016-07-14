import React from 'react'
import Mixin from 'mixin'

export default class ListItem extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.refs.listItem.addEventListener('click', () => {
      this.refs.listItem.parentNode.childNodes.forEach((node) => {
        node.classList.remove('selected')
      })
      this.refs.listItem.classList.add('selected')
    })

    Mixin.rippleEffect(this.refs.listItem)
  }

  render () {
    return (
      <li ref="listItem" className={ `${this.props.className} list-item` }>
        { this.props.children || (<span>{this.props.text}</span>) }
      </li>
    )
  }
}

ListItem.propTypes = {
  children: React.PropTypes.node,
  text: React.PropTypes.string,
  className: React.PropTypes.string
}

ListItem.defaultProps = {
  className: ''
}
