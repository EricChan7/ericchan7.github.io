import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import MyCard from 'component/card'

class Blog extends React.Component {
  render() {
    let posts = []
    let data = {
      a: 1,
      b: 2
    }

    for (let d in data) {
      posts.push(<MyCard />)
    }

    return (
      <div
        id="blog"
      >
        <AppBar
          title="光與影之間"
          iconClassNameRight="fa fa-github"
          style={
            {
              position: 'fixed'
            }
          }
          zDepth="3"
        />
        <div
          className="cards"
        >
          {posts}
        </div>
      </div>
    )
  }
}

export default Blog
