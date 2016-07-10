import React from 'react'
import ReactDom from 'react-dom'
import Styleguide from 'styleguide'

import Color from 'color'
import Button from 'button/button'
import Panel from 'panel/panel'
import Modal from 'modal/modal'

class App extends React.Component {
  constructor() {
    super()

    this.lists = [
      <Color />,
      <Button />,
      <Panel />,
      <Modal />
    ]
  }

  render() {
    let result = this.lists.map((obj, i) => {
      return (
        <div
          key={ i }
          className="large-12 columns"
        >
          <Styleguide
            title={ obj.type.styleguide.title }
            description={ obj.type.styleguide.description }
            example={ obj.type.styleguide.example }
            code={ obj.type.styleguide.code }
            className={ obj.type.styleguide.className }
          >
            { obj }
          </Styleguide>
        </div>
      )
    })

    return (
      <div className="row">
        <div className="large-3 columns">
          Placeholder...
        </div>
        <div className="large-9 columns">
          { result }
        </div>
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('container')
)
