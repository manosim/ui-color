'use strict';

var React = require('react');
var ReactBootstrap  = require('react-bootstrap');

var Switches = React.createClass({
    getInitialState: function () {
        return {type: "hex"};
    },

    componentDidMount: function (){

    },

    handleClick: function (value) {
        console.log(this.setState.type);
        console.log(value);

        this.setState({
          type : "rgb"
        });

        // if (this.setState.type == "hex") {
        //     this.replaceState({
        //       type : "rgb"
        //     });
        // } else {
        //     this.replaceState({
        //       type : "hex"
        //     });
        // }
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
      <div className='app'>
        <Switches />
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);