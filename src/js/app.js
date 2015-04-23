'use strict';

var React = require('react');
var Router = require('react-router');
var ReactBootstrap  = require('react-bootstrap');
var HexPage = require('./pages/hex-page.js');
var RgbPage = require('./pages/rgb-page.js');

var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Switches = React.createClass({
    getInitialState: function () {
        return {type: "hex"};
    },

    componentDidMount: function (){

    },

    contextTypes: {
      router: React.PropTypes.func
    },

    handleClick: function () {
        var newType;

        if (this.state.type == "hex") {
            newType = "rgb";
            this.context.router.transitionTo('rgb');
        } else {
            newType = "hex";
            this.context.router.transitionTo('hex');
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
      <ReactBootstrap.Grid className="app">
          <ReactBootstrap.Row className='converter hex-to-uicolor'>
            <ReactBootstrap.Col xs={12} mdOffset={3} md={6}>
              <Switches />
              <RouteHandler />
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
      </ReactBootstrap.Grid>
    );
  }
});

var NotFound = React.createClass({
  render: function () {
    return <h2>Not found</h2>;
  }
});

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={HexPage}/>
    <Route name="hex" path="hex" handler={HexPage}/>
    <Route name="rgb" path="rgb" handler={RgbPage}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
