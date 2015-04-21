'use strict';

var React = require('react');
var ReactBootstrap  = require('react-bootstrap');
var hexToRgb = require('./utils/hextorgb');

var SwiftColor = React.createClass({
  render: function() {
    return (
      <div className="code-block">
          <h3 className="language">Swift</h3>
          <span className="code">UIColor(red:{this.props.r}, green:{this.props.g}, blue:{this.props.b}, alpha:1.0)</span>
          <button type="button" className="btn btn-default hidden-xs hidden-sm"><i className="fa fa-files-o"></i></button>
      </div>
    );
  }
});

var ObjectiveCColor = React.createClass({
  render: function() {
    return (
      <div className="code-block">
          <h3 className="language">Objective-C</h3>
          <span className="code">[UIColor colorWithRed: {this.props.r} green:{this.props.g} blue:{this.props.b}, alpha:1]</span>
          <button type="button" className="btn btn-default hidden-xs hidden-sm"><i className="fa fa-files-o"></i></button>
      </div>
    );
  }
});

var HexInput = React.createClass({
  getInitialState: function () {
      return {hex: this.props.hex};
  },

  handleChange: function (evt) {
    var newHex = evt.target.value;
    this.setState({
      hex: newHex
    });
    this.props.update(newHex);
  },

  render: function () {
    return (
      <div>
        <h1>HEX to UIColor Converter</h1>
        <ReactBootstrap.Input
          ref='hex'
          type='text'
          value={this.state.hex}
          placeholder='eg. 0072BC'
          help='Enter a valid HEX without the hashtag #.'
          groupClassName='group-class'
          wrapperClassName='wrapper-class'
          labelClassName='label-class'
          onChange={this.handleChange} />
      </div>
    );
  }
});

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