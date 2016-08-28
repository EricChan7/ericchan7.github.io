import React, { Component } from 'react'

export default class Info extends Component {
  constructor (props) {
    super(props)
    this.attributes = [
      {
        name: 'Skills',
        value: [
          {
            name: 'Ruby',
            link: '#'
          },
          {
            name: 'NodeJS',
            link: '#'
          },
          {
            name: 'Python',
            link: '#'
          },
          {
            name: 'JavaScript (ES6, CoffeeScript)',
            link: '#'
          },
          {
            name: 'Swift',
            link: '#'
          },
          {
            name: 'Java',
            link: '#'
          },
          {
            name: 'C/C++',
            link: '#'
          },
          {
            name: 'CSS3 (SASS/SCSS)',
            link: '#'
          }
        ]
      },
      {
        name: 'Frameworks / Libraries',
        value: [
          {
            name: 'Ruby on Rails',
            link: '#'
          },
          {
            name: 'jQuery',
            link: '#'
          },
          {
            name: 'React',
            link: '#'
          },
          {
            name: 'AngularJS',
            link: '#'
          },
          {
            name: 'PhoneGap (Cordova)',
            link: '#'
          },
          {
            name: 'Foundation',
            link: '#'
          }
        ]
      },
      {
        name: 'Databases',
        value: [
          {
            name: 'MySQL',
            link: '#'
          },
          {
            name: 'PostgreSQL',
            link: '#'
          }
        ]
      }
    ]
    this.renderItem = this.renderItem.bind(this)
    this.renderAttribute = this.renderAttribute.bind(this)
  }

  renderItem (item, index) {
    return (
      <a key={ index } href={ item.link }>
        { item.name }
      </a>
    )
  }

  renderAttribute (attribute, index) {
    return (
      <div key={ index } className="attribute-set">
        <h3>{ attribute.name }:</h3>
        <div className="item-set">
          { attribute.value.map(this.renderItem) }
        </div>
      </div>
    )
  }

  render () {
    return (
      <section className="info row">
        <div className="large-6 medium-8 small-6 centered columns">
          <div className="title">
            <h1>CHAN Kin Yeung, Eric</h1>
            <p>
              Fullstack Developer | Software Engineer | Electronic & Information Engineer
            </p>
          </div>

          <div className="attribute">
            { this.attributes.map(this.renderAttribute) }
          </div>
        </div>
      </section>
    )
  }
}
