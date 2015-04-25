'use strict';

var React = require('react');
var RgbInput = require('../components/rgb');
var PreviewColor = require('../components/preview');
var SwiftColor = require('../components/swift');
var ObjectiveCColor = require('../components/objectivec.js');

var RgbPage = React.createClass({
  getInitialState: function() {
    return {
      r: "",
      g: "",
      b: "",
      rgb: "",
      rFLoat: "",
      gFLoat: "",
      bFLoat: ""
    };
  },

  setRgb: function () {
    // Set Rgb for Preview
    this.setState({
      rgb: 'rgb(' + this.state.r + ',' + this.state.g + ',' + this.state.b + ')'
    });

    // Set r, g, b for Swift & Objective C
    var newState = {};
    newState.rFloat = (this.state.r / 255).toFixed(2);
    newState.gFloat = (this.state.g / 255).toFixed(2);
    newState.bFloat = (this.state.b / 255).toFixed(2);
    this.setState(newState);
  },

  handleChange: function (key, value) {
    // Set r, g, b
    var newState = {};
    newState[key] = value;
    this.setState(newState);

    this.setRgb();
  },

  render: function () {
    return (
      <div>
        <RgbInput update={this.handleChange} />
        <PreviewColor rgb={this.state.rgb} />
        <SwiftColor r={this.state.rFloat} g={this.state.gFloat} b={this.state.bFloat} />
        <ObjectiveCColor r={this.state.rFloat} g={this.state.gFloat} b={this.state.bFloat} />
      </div>
    );
  }
});

module.exports = RgbPage;
