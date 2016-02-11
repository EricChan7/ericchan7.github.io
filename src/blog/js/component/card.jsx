import React from 'react'
import Card from 'material-ui/lib/card/card'
// import CardActions from 'material-ui/lib/card/card-actions'
// import CardHeader from 'material-ui/lib/card/card-header'
import CardMedia from 'material-ui/lib/card/card-media'
import CardTitle from 'material-ui/lib/card/card-title'
// import FlatButton from 'material-ui/lib/flat-button'
import CardText from 'material-ui/lib/card/card-text'

let MyCard = () => (
  <Card
    className="card"
  >
    <CardMedia
      overlay={
        <CardTitle
          title="Overlay title"
          subtitle="Post date"
        />
      }
    >
      <img src="http://lorempixel.com/600/337/food/" />
    </CardMedia>
    <CardTitle
      actAsExpander
      showExpandableButton
      subtitle="Continue reading..."
    />
    <CardText
      expandable
    >
    {
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
    }
    </CardText>
  </Card>
)

export default MyCard
