'use strict';

var React = require('react');
var Router = require('react-router');
var ReactBootstrap  = require('react-bootstrap');
var ButtonLink = require('react-router-bootstrap').ButtonLink;

var HexPage = require('./pages/hex-page.js');
var RgbPage = require('./pages/rgb-page.js');

var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

var Navigation = React.createClass({
    render: function () {
        return (
          <ReactBootstrap.ButtonGroup>
            <ButtonLink className='btn-success' to='hex'>HEX</ButtonLink>
            <ButtonLink className='btn-success' to='rgb'>RGB</ButtonLink>
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
              <Navigation />
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
