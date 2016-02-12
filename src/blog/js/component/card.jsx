import React from 'react'
import Card from 'material-ui/lib/card/card'
// import CardActions from 'material-ui/lib/card/card-actions'
// import CardHeader from 'material-ui/lib/card/card-header'
import CardMedia from 'material-ui/lib/card/card-media'
import CardTitle from 'material-ui/lib/card/card-title'
// import FlatButton from 'material-ui/lib/flat-button'
import CardText from 'material-ui/lib/card/card-text'
import moment from 'moment'

class MyCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card
        className="card"
      >
        <CardMedia
          overlay={
            <CardTitle
              title={this.props.post.title}
              subtitle={moment(this.props.post.created_at).format('Do MMMM YYYY')}
            />
          }
        >
          <img src={this.props.post.cover_image} />
        </CardMedia>
        <CardTitle
          actAsExpander
          showExpandableButton
          subtitle="Continue reading..."
        />
        <CardText
          expandable
        >
        {this.props.post.content}
        </CardText>
      </Card>
    )
  }
}

MyCard.propTypes = {
  post: React.PropTypes.objectOf(React.PropTypes.string)
}

export default MyCard
