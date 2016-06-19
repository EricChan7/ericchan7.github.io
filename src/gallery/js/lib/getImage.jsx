
class getImage {
  constructor(n=1) {
    this.url = `http://api.kinyeung.com/api/girls/${n}`
  }

  get list() {
    return new Promise((resolve, reject) => {
      $.get(this.url)
        .done((data) => resolve(data))
        .fail((e) => reject(`Connection error, ${e}`))
    })
  }

  showURL(base_url) {
    return `url(${base_url}s1024/1.jpg)`
  }
}

export default getImage
