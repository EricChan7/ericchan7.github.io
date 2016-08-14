
import React from 'react'

class passCode extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.refs.form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      let email = this.refs.form.elements.email.value,
        password = this.refs.form.elements.password.value
      window.api.login(email, password)
        .then(() => {
          this.props.passFunc()
        }, () => alert('Incorrect username/password.'))
    })
  }

  render() {
    return (
      <div
        className="passCode"
      >
        <div className="row">
          <form ref="form">
            <div className="large-12 column">
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoFocus={true}
              />
            </div>
            <div className="large-12 column">
              <input
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <input
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    )
  }
}

passCode.propTypes = {
  passFunc: React.PropTypes.func.isRequired
}

export default passCode
