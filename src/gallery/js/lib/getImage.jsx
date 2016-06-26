
class GetImage {
  constructor(n=1) {
    this.url = `http://api.kinyeung.com/api/girls/${n}`
    this.fetching = false
    this.images = [{
      url_base: 'https://lh3.googleusercontent.com/-EMZYc1aMxEI/Vj3EnHOokuI/AAAAAAAGHjs/GJN2jjYaUPk/',
      width: 2048,
      height: 1365,
      album: '6214330142787629665',
      photo: '6214339237075522274',
      md5: '9383188b9cfc504a0c7a041854b9d026'
    }]
  }

  list() {
    return new Promise((resolve, reject) => {
      if (this.fetching) {
        reject('Reject, fetching exists.')
      } else {
        this.fetching = true
        $.get(this.url)
          .done((data) => {
            this.images = data
            resolve()
          })
          .fail((e) => reject(`Connection error, ${e}`))
          .always(() => this.fetching = false)
      }
    })
  }

  get image() {
    if (this.images.length <= 1) {
      this.list().then(() => console.info('Fetch Done.'), (e) => console.error(e))
    }
    return this.images.pop() || {}
  }

  static showURL(base_url) {
    return `url(${base_url}s1024/1.jpg)`
  }
}

export default GetImage
