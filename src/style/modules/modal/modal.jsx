import React from 'react'

class Modal extends React.Component {
  constructor (props) {
    super(props)
  }

  buttonClick (evt) {
    evt.preventDefault()
    this.modalOpen()
  }

  modalOpen () {
    this.refs.modal.classList.add('open')
    document.body.classList.add('modal-opened')
  }

  modalClose () {
    this.refs.modal.classList.remove('open')
    document.body.classList.remove('modal-opened')
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
