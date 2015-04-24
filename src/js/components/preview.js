var React = require('react');

var PreviewColor = React.createClass({
  getInitialState: function() {
    return {
      color: this.props.color || '#f7f7f9'
    };
  },

  componentWillReceiveProps: function (nextProps) {
    var newColor;
    if (nextProps.color) {
       newColor = nextProps.color;
    } else {
       newColor = 'f7f7f9';
    }
    this.setState({
      color: "#" + newColor
    });
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
