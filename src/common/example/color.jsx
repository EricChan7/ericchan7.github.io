import React from 'react'

class Color extends React.Component {
  render () {
    return (
      <span>Nothing here.</span>
    )
  }
}

Color.styleguide = {
  title: 'Color',
  description: 'A set of color used in all page.',
  example: (
    <div className="example-color">
      <div className="box black">Black</div>
      <div className="box white">White</div>
      <div className="box default">Default</div>
      <div className="box primary">Primary</div>
      <div className="box secondary">Secondary</div>
      <div className="box danger">Danger</div>
      <div className="box warning">Warning</div>
    </div>
  ),
  code: `<div class="box black">Black</div>
    <div class="box white">White</div>
    <div class="box default">Default</div>
    <div class="box primary">Primary</div>
    <div class="box secondary">Secondary</div>
    <div class="box danger">Danger</div>
    <div class="box warning">Warning</div>`
}

export default Color
