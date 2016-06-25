import $ from 'jquery'
import React from 'react'
import { render } from 'react-dom'
import Image from 'image'
import GetImage from 'lib/getImage'

$(document).ready( () => {
  window.$ = $

  class Gallery extends React.Component {
    constructor() {
      super()

      this.getImage = new GetImage(20)
      this.fetching = false
      this.images = [{
        url_base: 'https://lh3.googleusercontent.com/-EMZYc1aMxEI/Vj3EnHOokuI/AAAAAAAGHjs/GJN2jjYaUPk/',
        width: 2048,
        height: 1365,
        album: '6214330142787629665',
        photo: '6214339237075522274',
        md5: '9383188b9cfc504a0c7a041854b9d026'
      }]

      this.state = {
        showImage: true
      }
    }

    fetchImage() {
      return new Promise((resolve, reject) => {
        if (this.fetching) {
          reject('Reject, fetching exists.')
        } else {
          this.fetching = true

          this.getImage.list.then((data) => {
            this.fetching = false
            this.images = data
            resolve()
          }, (e) => {
            this.fetching = false
            reject(`Reject. ${e}`)
          })
        }
      })
    }

    componentWillMount() {
      this.fetchImage().then(() => {
        setInterval(() => {
          this.setState({ showImage: !this.state.showImage })
          if (this.images.length <= 1) {
            this.fetchImage().then(() => console.log('Fetch Done.'), (e) => console.log(e))
          }
        }, 5000)
      }, (e) => console.log(e))
    }

    render() {
      return (
        <div>
          <Image
            state={this.state.showImage}
            image={this.state.showImage ? {} : this.images.pop()}
          />
          <Image
            state={!this.state.showImage}
            image={!this.state.showImage ? {} : this.images.pop()}
          />
        </div>
      )
    }
  }

  render(
    <Gallery />,
    document.getElementById('showGround')
  )
})
