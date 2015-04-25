'use strict';

var React = require('react');

var PreviewColor = React.createClass({
  getInitialState: function() {
    return {
      color: this.props.color || '#f7f7f9'
    };
  },

  handleHex: function (color) {
    this.setState({
      color: "#" + color
    });
  },

  handleRgb: function (color) {
    this.setState({
      color: color
    });
  },

  componentWillReceiveProps: function (nextProps) {
    if (nextProps.color) {
      this.handleHex(nextProps.color);
    } else if (nextProps.rgb) {
      this.handleRgb(nextProps.rgb);
    }
  },

  render: function() {
    var previewStyle = {
      backgroundColor: this.state.color
    };
    return (
      <div className="form-group color-demo" style={previewStyle} />
    );
  }
});

module.exports = PreviewColor;
