var React = require('react');
var ReactBootstrap  = require('react-bootstrap');

var HexInput = React.createClass({
  handleChange: function (evt) {
    var hex = evt.target.value.replace('#','');
    if (hex.length == 3) {
        var tempHex = hex + hex.charAt(2) + hex.charAt(1) + hex.charAt(0);
        this.props.update(tempHex);
    } else if (hex.length == 6) {
        this.props.update(hex);
    } else {
        // Invalid HEX. Do nothing?
    }
  },

  render: function () {
    return (
      <div>
        <h1>HEX to UIColor Converter</h1>
        <ReactBootstrap.Input
          ref='hex'
          type='text'
          value={this.props.hex}
          addonBefore='HEX #'
          bsSize='large'
          maxLength='7'
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

module.exports = HexInput;
