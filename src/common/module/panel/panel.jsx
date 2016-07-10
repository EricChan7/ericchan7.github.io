import React from 'react'
import PanelHeader from 'panel/panel-header'
import PanelFooter from 'panel/panel-footer'

class Panel extends React.Component {
  constructor(props) {
    super(props)
  }

  renderHeader () {
    if (this.props.title !== undefined) {
      return (
        <PanelHeader
          title={ this.props.title }
          className={ this.props.titleClass }
        />
      )
    }
  }

  renderFooter () {
    if (this.props.footer !== undefined) {
      return (
        <PanelFooter
          className={ this.props.footerClass }
        >
          { this.props.footer }
        </PanelFooter>
      )
    }
  }

  render () {
    return (
      <div
        className={ (this.props.className || '') + ' panel' }
      >
        { this.renderHeader() }
        { this.props.children }
        { this.renderFooter() }
      </div>
    )
  }
}

Panel.propTypes = {
  title: React.PropTypes.string,
  titleClass: React.PropTypes.string,
  footer: React.PropTypes.node,
  footerClass: React.PropTypes.string,
  children: React.PropTypes.node,
  className: React.PropTypes.string
}

Panel.styleguide = {
  title: 'Panel',
  description: 'Style for panel.',
  example: (
    <Panel
      className="shadow-1"
      title="Panel Title"
      titleClass="secondary"
      footer="Panel Footer"
      footerClass="right"
    >
      Panel Content
    </Panel>
  ),
  code: `<Panel
      className="shadow-1"
      title="Panel Title"
      titleClass="secondary"
      footer="Panel Footer"
      footerClass="right"
    >
      Panel Content
    </Panel>`
}

export default Panel
export { Panel, PanelHeader, PanelFooter }
