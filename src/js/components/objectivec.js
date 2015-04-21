var React = require('react');

var ObjectiveCColor = React.createClass({
  render: function() {
    return (
      <div className="code-block">
          <h3 className="language">Objective-C</h3>
          <span className="code">[UIColor colorWithRed: {this.props.r} green:{this.props.g} blue:{this.props.b}, alpha:1]</span>
          <button type="button" className="btn btn-default hidden-xs hidden-sm"><i className="fa fa-files-o"></i></button>
      </div>
    );
  }
});

module.exports = ObjectiveCColor;
