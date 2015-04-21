var React = require('react');
var ReactBootstrap  = require('react-bootstrap');

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

module.exports = HexInput;
