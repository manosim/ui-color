'use strict';

var React = require('react');
var ReactBootstrap  = require('react-bootstrap');
var hexToRgb = require('./utils/hextorgb');

var SwiftColor = React.createClass({
  getInitialState() {
    return {
      r: "",
      g: "",
      b: "",
    };
  },

  updateRgb: function(value) {
      this.setState({
        r: hexToRgb.convert(newHex).r,
        g: hexToRgb.convert(newHex).g,
        b: hexToRgb.convert(newHex).b
      });
  },

  render() {
    return (
      <div className="code-block">
          <h3 className="language">Swift</h3>
          <span>UIColor(red:{this.state.r}, green:0.00, blue:0.00, alpha:1.0)</span>
          <button type="button" className="btn btn-default hidden-xs hidden-sm"><i className="fa fa-files-o"></i></button>
      </div>
    );
  }
});

var HexInput = React.createClass({
  getInitialState() {
    return {
      hexValue: ""
    };
  },

  handleChange(hex) {
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    console.log(this.refs.hex.getValue());
    var newHex = this.refs.hex.getValue();
    if (length >= 3 || length <= 7) {
      this.setState({
        hexValue: newHex
      });
      SwiftColor.updateRgb(newHex);
    }
  },

  render() {
    return (
      <div>
        <h1>HEX to UIColor Converter</h1>
        <ReactBootstrap.Input
          type='text'
          value={this.state.hexValue}
          placeholder='eg. 0072BC'
          help='Enter a valid HEX without the hashtag #.'
          ref='hex'
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
  render: function () {
    return (
      <ReactBootstrap.Grid className="app">
          <ReactBootstrap.Row className='converter hex-to-uicolor'>
            <ReactBootstrap.Col xs={12} mdOffset={3} md={6}>
              <Switches />
              <HexInput />
              <SwiftColor />
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