'use strict';

var React = require('react');
var ReactBootstrap  = require('react-bootstrap');

var Switches = React.createClass({
    render: function () {
        return (
            <ReactBootstrap.ButtonGroup>
                <ReactBootstrap.Button className='btn btn-success'>HEX</ReactBootstrap.Button>
                <ReactBootstrap.Button className='btn btn-success'>RGB</ReactBootstrap.Button>
            </ReactBootstrap.ButtonGroup>
        );
    }
});

var App = React.createClass({
  render: function () {
    return (
      <div className='app'>
        <Switches />
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);