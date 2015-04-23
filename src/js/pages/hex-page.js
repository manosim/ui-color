'use strict';

var React = require('react');
var hexToRgb = require('../utils/hextorgb');
var HexInput = require('../components/hex');
var PreviewColor = require('../components/preview');
var SwiftColor = require('../components/swift');
var ObjectiveCColor = require('../components/objectivec.js');

var HexPage = React.createClass({
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
        <div>
            <HexInput update={this.handleHexChange} color={this.state.hex} />
            <PreviewColor color={this.state.hex} />
            <SwiftColor r={this.state.r} g={this.state.g} b={this.state.b} />
            <ObjectiveCColor r={this.state.r} g={this.state.g} b={this.state.b} />
        </div>
    );
  }
});

module.exports = HexPage;
