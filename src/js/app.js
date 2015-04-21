'use strict';

var React = require('react');
var ReactBootstrap  = require('react-bootstrap');

const HexInput = React.createClass({
  getInitialState() {
    return {
      hexValue: "#0072bc"
    };
  },

  validationState() {
    let length = this.state.hexValue.length;
    if (length < 3 || length > 7) { return 'error'; }
  },

  handleChange() {
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.setState({
      hexValue: this.refs.input.getValue()
    });
  },

  render() {
    return (
      <ReactBootstrap.Grid>
          <ReactBootstrap.Row className='converter hex-to-uicolor'>
            <ReactBootstrap.Col xs={12} mdOffset={3} md={6}>
              <ReactBootstrap.Input
                type='text'
                value={this.state.hexValue}
                placeholder='eg. 0072BC'
                help='Enter a valid HEX without the hashtag #.'
                bsStyle={this.validationState()}
                hasFeedback
                ref='input'
                groupClassName='group-class'
                wrapperClassName='wrapper-class'
                labelClassName='label-class'
                onChange={this.handleChange} />
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
      </ReactBootstrap.Grid>
    );
  }
});

var Switches = React.createClass({
    getInitialState: function () {
        return {type: "hex"};
    },

    componentDidMount: function (){

    },

    handleClick: function () {
        var newType;

        if (this.state.type == "hex") {
            newType = "rgb";
        } else {
            newType = "hex";
        }

        this.setState({type: newType});
    },

    render: function () {
        var hexClassName = this.state.type === 'hex' ? 'btn btn-success active' : 'btn btn-success ';
        var rgbClassName = this.state.type === 'rgb' ? 'btn btn-success active' : 'btn btn-success ';
        return (
            <ReactBootstrap.ButtonGroup>
                <ReactBootstrap.Button onClick={this.handleClick} className={hexClassName}>HEX</ReactBootstrap.Button>
                <ReactBootstrap.Button onClick={this.handleClick} className={rgbClassName}>RGB</ReactBootstrap.Button>
            </ReactBootstrap.ButtonGroup>
        );
    }
});

var App = React.createClass({
  render: function () {
    return (
      <div className="app">
        <Switches />
        <HexInput />
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);