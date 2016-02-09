import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

$(document).ready(function() {
  var Hello = React.createClass({
    render: function() {
      return <div>Hello {this.props.name}</div>;
    }
  });

  ReactDOM.render(
    <Hello name="World" />,
    document.getElementById('container')
  );
});
