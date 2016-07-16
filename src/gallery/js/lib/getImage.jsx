
class GetImage {
  constructor(n=1) {
    this.fetching = false
    this.size = n
    this.images = []
  }

  list() {
    return new Promise((resolve, reject) => {
      if (this.fetching) {
        reject('Rejected, fetching exists.')
      } else {
        this.fetching = true
        window.api.randomGalleries(this.size)
          .then((res) => {
            this.images = res.body
            this.fetching = false
            resolve()
          }, () => {
            this.fetching = false
            reject('Error, fetch fail.')
          })
      }
    })
  }

  get image() {
    if (this.images.length <= 1) {
      this.list().then(() => console.info('Fetch Done.'), (e) => console.info(e))
    }
    return this.images.pop() || {}
  }

  get imageSize() {
    return this.images.size
  }

  static showURL(base_url) {
    return `url(${base_url}s1024/1.jpg)`
  }
}

export default GetImage
