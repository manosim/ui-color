var React = require('react');
var ReactZeroClipboard = require('react-zeroclipboard');

var ObjectiveCColor = React.createClass({
  getInitialState: function() {
    return {
        r: this.props.r,
        g: this.props.g,
        b: this.props.b
    };
  },

  componentWillReceiveProps: function (props) {
    this.setState({
        r: props.r,
        g: props.g,
        b: props.b
    });
  },

  getCopyText: function() {
    return "[UIColor colorWithRed:" + this.state.r + " green:" + this.state.g +" blue:" + this.state.b + " alpha:1]";
  },

  render: function() {
    return (
      <div className="code-block">
          <h3 className="language">Objective-C</h3>
          <span className="code">[UIColor colorWithRed: {this.props.r} green:{this.props.g} blue:{this.props.b} alpha:1]</span>
          <ReactZeroClipboard getText={this.getCopyText}>
              <button type="button" className="btn btn-default hidden-xs hidden-sm"><i className="fa fa-files-o"></i></button>
          </ReactZeroClipboard>
      </div>
    );
  }
});

module.exports = ObjectiveCColor;
