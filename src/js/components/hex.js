'use strict';

var React = require('react');
var ReactBootstrap  = require('react-bootstrap');
var ColorPicker = require('react-color-picker');

var HexInput = React.createClass({
  handleChange: function (evt) {
    var hex = evt.target.value.replace('#','');
    if (hex.length === 3) {
        var tempHex = hex + hex.charAt(2) + hex.charAt(1) + hex.charAt(0);
        this.props.update(tempHex);
    } else if (hex.length === 6) {
        this.props.update(hex);
    } else {
        // Invalid HEX. Do nothing?
        hex = "";
        this.props.update(hex);
    }
  },

  onDrag: function (color) {
    this.props.update(color.replace('#',''));
  },

  render: function () {
    return (
      <div>
        <h1 className='title'>HEX to UIColor Converter</h1>
        <ReactBootstrap.Input
          ref='hex'
          type='text'
          value={this.props.color}
          addonBefore='HEX #'
          bsSize='large'
          maxLength='7'
          placeholder='eg. 0072BC'
          onChange={this.handleChange} />
          <ColorPicker value={this.props.color} onDrag={this.onDrag} />
      </div>
    );
  }
});

module.exports = HexInput;
