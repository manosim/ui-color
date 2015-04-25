'use strict';

var React = require('react');
var RgbInput = require('../components/rgb');
var PreviewColor = require('../components/preview');
var SwiftColor = require('../components/swift');
var ObjectiveCColor = require('../components/objectivec.js');

var RgbPage = React.createClass({
  getInitialState: function() {
    return {
      hex: "",
      r: "",
      g: "",
      b: ""
    };
  },

  componentToHex: function (c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
  },

  rgbToHex: function (r, g, b) {
      var hex = this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
      var newState = {};
      newState.hex = hex;
      this.setState(newState);
  },

  handleChange: function (key, value) {
    var newState = {};
    newState[key] = value;
    this.setState(newState);
    this.rgbToHex(this.state.r, this.state.g, this.state.b);
  },

  render: function () {
    return (
      <div>
        <RgbInput update={this.handleChange} />
        <PreviewColor color={this.state.hex} />
        <SwiftColor r={this.state.r} g={this.state.g} b={this.state.b} />
        <ObjectiveCColor r={this.state.r} g={this.state.g} b={this.state.b} />
      </div>
    );
  }
});

module.exports = RgbPage;
