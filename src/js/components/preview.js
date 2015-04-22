var React = require('react');

var PreviewColor = React.createClass({
  getInitialState: function() {
    return {
      color: this.props.color || '#0072bc'
    }
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({
      color: "#" + nextProps.color
    });
  },

  render: function() {
    var previewStyle = {
      backgroundColor: this.state.color
    }
    return (
      <div className="form-group color-demo" style={previewStyle} />
    );
  }
});

module.exports = PreviewColor;
