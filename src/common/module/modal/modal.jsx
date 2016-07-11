import React from 'react'

class Modal extends React.Component {
  constructor (props) {
    super(props)
  }

  buttonClick (evt) {
    evt.preventDefault()
    this.modalOpen()
  }

  addClass (node, className) {
    node.className += ` ${className}`
  }

  removeClass (node, className) {
    node.className = node.className.replace(` ${className}`, '')
  }

  modalOpen () {
    this.addClass(this.refs.modal, 'open')
    this.addClass(document.body, 'modal-opened')
  }

  modalClose () {
    this.removeClass(this.refs.modal, 'open')
    this.removeClass(document.body, 'modal-opened')
  }

  componentDidMount () {
    this.refs.modal.addEventListener('click', () => {
      this.modalClose()
    })

    this.refs.modalClose.addEventListener('click', () => {
      this.modalClose()
    })

    this.refs.modalContent.addEventListener('click', (evt) => {
      evt.stopPropagation()
    })
  }

  render () {
    return (
      <div
        className="modal"
      >
        <div
          className="modal-button"
          onClick={ this.buttonClick.bind(this) }
        >
          { this.props.link }
        </div>
        <div
          ref="modal"
          className="modal-overlay"
        >
          <div
            ref="modalContent"
            className={ this.props.size + ' modal-content'}
          >
            { this.props.children }
            <a
              ref="modalClose"
              className="modal-close"
              onClick={ this.modalClose }
            >
              &times;
            </a>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  link: React.PropTypes.node,
  children: React.PropTypes.element.isRequired,
  size: React.PropTypes.string
}

Modal.defaultProps = {
  size: 'large'
}

Modal.styleguide = {
  title: 'Modal',
  description: 'Modal',
  example: (
    <Modal
      link="Link for modal"
      size="small"
    >
      <div>Some elements here...</div>
    </Modal>
  ),
  code: `<Modal
      link="Link for modal"
      size="small"
    >
      <div>Some elements here...</div>
    </Modal>`
}

export default Modal
