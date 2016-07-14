import React from 'react'
import Mixin from 'mixin'

class Button extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    Mixin.rippleEffect(this.refs.ripple)
  }

  render () {
    return (
      <a
        ref="ripple"
        className={ this.props.className + ' button' }
        href={ this.props.link }
        onClick={ this.props.onClick }
      >
        { this.props.children || this.props.text }
      </a>
    )
  }
}

Button.propTypes = {
  children: React.PropTypes.node,
  text: React.PropTypes.node,
  link: React.PropTypes.string,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func
}

Button.defaultProps = {
  className: '',
  link: ''
}

Button.styleguide = {
  title: 'Button',
  description: 'A button / link with style and ripple effect.',
  example: (
    <div className="example">
      <Button text="Default" link="#" />
      <Button
        text="Rounded Primary"
        className="rounded primary"
        onClick={ () => alert('Button event!') }
      />
      <Button className="danger" >
        Danger
      </Button>
      <Button text="Outlined Warning" className="outlined warning" />
    </div>
  ),
  code: `<Button text="Default" link="#" />
    <Button
      text="Rounded Primary"
      className="rounded primary"
      onClick={ () => alert('Button event!') }
    />
    <Button className="danger" >
      Danger
    </Button>
    <Button text="Outlined Warning" className="outlined warning" />`
}

export default Button
