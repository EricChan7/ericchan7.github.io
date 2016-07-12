import React from 'react'
import ListItem from 'list/list-item'

export default class List extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <ul
        className={ this.props.className + ' list'}
      >
        { this.props.children }
      </ul>
    )
  }
}

List.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string
}

List.defaultProps = {
  className: ''
}

List.styleguide = {
  title: 'List',
  description: 'A list.',
  example: (
    <List className="danger">
      <ListItem text="list item 1" onClick={ (evt) => { evt.preventDefault() } } />
      <ListItem text="list item 2" className="selected" />
      <ListItem text="list item 3" />
    </List>
  ),
  code: `<List className="danger">
      <ListItem text="list item 1" onClick={ (evt) => { evt.preventDefault() } } />
      <ListItem text="list item 2" className="selected" />
      <ListItem text="list item 3" />
    </List>`
}
