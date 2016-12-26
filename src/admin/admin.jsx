import React, { Component } from 'react'
import PassCode from 'passCode/passCode'
import async from 'async'

export default class Admin extends Component {
  constructor (props) {
    super(props)
    this.checkPass = this.checkPass.bind(this)
    this.getGalleriesList = this.getGalleriesList.bind(this)
    this.state = {
      galleriesList: [],
      galleries: [],
      images: [],
      updated: ''
    }
  }

  componentDidMount() {
    if (window.api.is_logged_in()) {
      this.getGalleriesList()
    }
  }

  _onGetGallery (id) {
    window.api.showGalleries(id).then(
      (data) => {
        console.log(data)
        this.setState({
          images: data.body.picasa.map((image) => {
            return (
              <li key={ image.photo }>
                <img
                  src={ `${image.url_base}s200/${image.photo}.jpg` }
                  alt={ `${image.album}:${image.photo}` }
                />
              </li>
            )
          })
        })
      }, (err) => console.log(err)
    )
  }

  _onUpdateGallery (name) {
    window.api.updateGalleries(name).then(
      (data) => {
        this.setState({
          updated: data.body.notice
        })
      },
      (err) => {
        this.setState({
          updated: err
        })
      }
    )
  }

  getGalleriesList () {
    window.api.getGalleries().then(
      (data) => {
        this.setState({
          galleries: data.body.galleries,
          galleriesList: data.body.galleries.map((gallery) => {
            return (
              <li key={ gallery.id }>
                <a onClick={ this._onGetGallery.bind(this, gallery.id) } >
                  { gallery.name }
                </a>
                <a onClick={ this._onUpdateGallery.bind(this, gallery.name) }>
                  UP
                </a>
              </li>
            )
          })
        })
      }, (err) => console.log(err))
  }

  updateAll () {
    async.eachLimit(this.state.galleries, 1, (item, callback) => {
      window.api.updateGalleries(item.name).then(
        (data) => {
          this.setState({
            updated: data.body.notice
          })
          callback()
        },
        (err) => {
          this.setState({
            updated: err
          })
          callback(item.name)
        }
      )
    }, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('All Updated.')
      }
    })
  }

  checkPass () {
    if (!window.api.is_logged_in()) {
      // render login module
      return (
        <PassCode
          passFunc={ this.getGalleriesList }
        />
      )
    } else {
      return (
        <ul>
          { this.state.galleriesList }
        </ul>
      )
    }
  }

  render() {
    return (
      <section id="admin">
        <a onClick={ this.updateAll.bind(this) }>
          Update All
        </a>
        { this.checkPass() }
        <p>
          { this.state.updated }
        </p>
        <ul>
          { this.state.images }
        </ul>
      </section>
    )
  }
}
