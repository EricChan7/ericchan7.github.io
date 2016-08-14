import React from 'react'

export default class Icon extends React.Component {
  render () {
    return (
      <div className="icon">
        { this.props.children }
      </div>
    )
  }

  static propTypes () {
    return {
      children: React.PropTypes.element
    }
  }
}

Icon.styleguide = {
  title: 'Icon',
  description: 'Icon Style',
  example: (
    <Icon>
      <i className="fa fa-home"></i>
    </Icon>
  ),
  code: `<Icon>
      <i className="fa fa-home"></i>
    </Icon>`
}
