
class getImage {
  constructor(n=1) {
    this.url = `https://soundofate.herokuapp.com/api/girls/${n}`
  }

  get list() {
    return new Promise((resolve, reject) => {
      $.get(this.url)
        .done((data) => resolve(data))
        .fail(() => reject())
    })
  }

  showURL(base_url) {
    return `url(${base_url}s1024/1.jpg)`
  }
}

export default getImage
