'use strict';

var React = require('react');
var RgbInput = require('../components/rgb');
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

  handleChange: function (key, value) {
    var newState = {};
    newState[key] = value;
    this.setState(newState);
  },

  render: function () {
    return (
      <div>
        <RgbInput update={this.handleChange} color={this.state.hex} />
        <SwiftColor r={this.state.r} g={this.state.g} b={this.state.b} />
        <ObjectiveCColor r={this.state.r} g={this.state.g} b={this.state.b} />
      </div>
    );
  }
});

module.exports = RgbPage;
