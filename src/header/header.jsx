import React, { Component } from 'react'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.sentence = [
      ['寵', '辱', '不', '驚', '，', '閒', '看', '庭', '前', '花', '開', '花', '落', '；'],
      ['去', '留', '無', '意', '，', '漫', '隨', '天', '外', '雲', '卷', '雲', '舒', '。']
    ]
    this.renderWord = this.renderWord.bind(this)
  }

  componentDidMount() {
    // this.refs.word_1.classList.add('bounce')
  }

  renderChar (pIndex, char, index) {
    return (
      <span
        key={ index }
        ref={(elem) => {
          if (elem !== null) {
            setTimeout(() => {
              elem.classList.add('animated')
              elem.classList.add('fadeInRight')
            }, 100 * index + 500 * pIndex + 500)
          }
        }}
      >
        { char }
      </span>
    )
  }

  renderWord (words, index) {
    return (
      <p key={ index }>
        { words.map(this.renderChar.bind(this, index)) }
      </p>
    )
  }

  render() {
    return (
      <section className="header">
        <div className="words">
          { this.sentence.map(this.renderWord) }
        </div>
      </section>
    )
  }
}
