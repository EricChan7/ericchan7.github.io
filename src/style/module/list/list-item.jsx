import React from 'react'
import Button from 'button/button'

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
  }

  render () {
    return (
      <li ref="listItem" className={ `${this.props.className} list-item` }>
        { this.props.children || this.props.text }
      </li>
    )
  }
}

ListItem.propTypes = {
  children: React.PropTypes.node,
  text: React.PropTypes.string,
  onClick: React.PropTypes.func,
  link: React.PropTypes.string,
  className: React.PropTypes.string,
  buttonClass: React.PropTypes.string
}

ListItem.defaultProps = {
  className: ''
}
