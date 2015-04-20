'use strict';

var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div className='app'>
        Hello UIColor!
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);