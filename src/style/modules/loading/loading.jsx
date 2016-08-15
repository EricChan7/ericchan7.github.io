import React from 'react'

export default class Loading extends React.Component {
  render () {
    return (
      <div className="loading" >
        <div className="spinner" >
          <div className="ball">
          </div>
        </div>
      </div>
    )
  }
}
