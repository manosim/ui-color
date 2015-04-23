'use strict';

var React = require('react');
var ReactBootstrap  = require('react-bootstrap');
var ButtonLink = require('react-router-bootstrap').ButtonLink;

var Navigation = React.createClass({
    render: function () {
        return (
          <ReactBootstrap.ButtonGroup>
            <ButtonLink className='btn-success' to='hex'>HEX</ButtonLink>
            <ButtonLink className='btn-success' to='rgb'>RGB</ButtonLink>
          </ReactBootstrap.ButtonGroup>
        );
    }
});

module.exports = Navigation;
