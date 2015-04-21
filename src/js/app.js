'use strict';

var React = require('react');
var ReactBootstrap  = require('react-bootstrap');
var hexToRgb = require('./utils/hextorgb');
var SwiftColor = require('./components/swift.js');
var ObjectiveCColor = require('./components/objectivec.js');
var HexInput = require('./components/hex.js');

var Switches = React.createClass({
    getInitialState: function () {
        return {type: "hex"};
    },

    componentDidMount: function (){

    },

    handleClick: function () {
        var newType;

        if (this.state.type == "hex") {
            newType = "rgb";
        } else {
            newType = "hex";
        }

        this.setState({type: newType});
    },

    render: function () {
        var hexClassName = this.state.type === 'hex' ? 'btn btn-success active' : 'btn btn-success ';
        var rgbClassName = this.state.type === 'rgb' ? 'btn btn-success active' : 'btn btn-success ';
        return (
            <ReactBootstrap.ButtonGroup>
                <ReactBootstrap.Button onClick={this.handleClick} className={hexClassName}>HEX</ReactBootstrap.Button>
                <ReactBootstrap.Button onClick={this.handleClick} className={rgbClassName}>RGB</ReactBootstrap.Button>
            </ReactBootstrap.ButtonGroup>
        );
    }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      hex: "",
      r: "",
      g: "",
      b: ""
    };
  },

  handleHexChange: function(newHex) {
    console.log("Converting: " + newHex);
    var rgb = hexToRgb.convert(newHex);
    this.setState({
      hex: newHex,
      r: rgb.r,
      g: rgb.g,
      b: rgb.b
    });
  },

  render: function () {
    return (
      <ReactBootstrap.Grid className="app">
          <ReactBootstrap.Row className='converter hex-to-uicolor'>
            <ReactBootstrap.Col xs={12} mdOffset={3} md={6}>
              <Switches />
              <HexInput update={this.handleHexChange} color={this.state.hex} />
              <SwiftColor r={this.state.r} g={this.state.g} b={this.state.b} />
              <ObjectiveCColor r={this.state.r} g={this.state.g} b={this.state.b} />
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
      </ReactBootstrap.Grid>
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);