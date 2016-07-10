import React from 'react'
import Button from 'button/button'

class Modal extends React.Component {
  constructor (props) {
    super(props)
  }

  buttonClick (evt) {
    evt.preventDefault()
    this.modalOpen()
  }

  modalOpen () {
    this.refs.modal.className += ' open'
  }

  modalClose () {
    this.refs.modal.className = this.refs.modal.className.replace(/ open/g, '')
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
        className="modal-group"
      >
        <Button
          text={ this.props.buttonText }
          className={ this.props.buttonClass }
          onClick={ this.buttonClick.bind(this) }
        />
        <div
          ref="modal"
          className="modal"
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
  buttonText: React.PropTypes.string,
  buttonClass: React.PropTypes.string,
  children: React.PropTypes.element,
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
      buttonText="Click ME!"
      buttonClass="outlined secondary"
      size="small"
    >
      <div>Some elements here...</div>
    </Modal>
  ),
  code: `<Modal
      buttonText="Click ME!"
      buttonClass="outlined secondary"
      size="small"
    >
      <div>Some elements here...</div>
    </Modal>`
}

export default Modal
