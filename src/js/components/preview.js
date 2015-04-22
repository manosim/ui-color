var React = require('react');

var PreviewColor = React.createClass({
  getInitialState: function() {
    return {color: this.props.color || 'yellow'}
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({
      color: "#" + nextProps.color
    });
    console.log(this.state.color);
  },

  render: function() {
    var previewStyle = {
      backgroundColor: this.state.color
    }
    return (
      <div className="form-group color-demo" style={previewStyle}>
        Hello!
      </div>
    );
  }
});

module.exports = PreviewColor;
