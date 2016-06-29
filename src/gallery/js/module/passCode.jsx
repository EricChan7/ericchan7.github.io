
import React from 'react'

class passCode extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        className="passCode"
      >
        <input
          type="password"
          placeholder="Enter pass code..."
          onChange={this.props.passFunc}
          autoFocus={true}
        />
      </div>
    )
  }
}

passCode.propTypes = {
  passFunc: React.PropTypes.func.isRequired
}

export default passCode
