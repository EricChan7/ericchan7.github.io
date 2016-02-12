
import $ from 'jquery'
import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import MyCard from 'component/card'

class Blog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    $.get('http://localhost:8000/blog', (data) => {
      let posts = []

      $.each(JSON.parse(data), (k, v) => {
        posts.push(
          <MyCard
            post={v.fields}
          />
        )
      })

      this.setState((previousState) => {
        return {posts: previousState.posts.concat(posts)}
      })

      // console.log(this.state.posts)
    })
  }

  render() {
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
          zDepth={3}
        />
        <div
          className="cards"
        >
          {this.state.posts}
        </div>
      </div>
    )
  }
}

export default Blog
