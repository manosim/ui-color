'use strict';

var React = require('react');
var ReactBootstrap  = require('react-bootstrap');

var RgbInput = React.createClass({

  handleChange: function (key, event) {
    this.props.update(key, event.target.value);
  },

  render: function () {
    return (
      <div>
        <h1 className='title'>RGB to UIColor Converter</h1>

        <ReactBootstrap.Row>
          <ReactBootstrap.Input>

              <ReactBootstrap.Col md={4}>
                <ReactBootstrap.Input
                  type='text'
                  value={this.props.r}
                  addonBefore='R'
                  bsSize='large'
                  maxLength='3'
                  placeholder='255'
                  onChange={this.handleChange.bind(this, 'r')} />
              </ReactBootstrap.Col>

              <ReactBootstrap.Col md={4}>
                <ReactBootstrap.Input
                  type='text'
                  value={this.props.g}
                  addonBefore='G'
                  bsSize='large'
                  maxLength='3'
                  placeholder='255'
                  onChange={this.handleChange.bind(this, 'g')} />
              </ReactBootstrap.Col>

              <ReactBootstrap.Col md={4}>
                <ReactBootstrap.Input
                  type='text'
                  value={this.props.b}
                  addonBefore='B'
                  bsSize='large'
                  maxLength='3'
                  placeholder='255'
                  onChange={this.handleChange.bind(this, 'b')} />
              </ReactBootstrap.Col>

          </ReactBootstrap.Input>
        </ReactBootstrap.Row>

      </div>
    );
  }
});

module.exports = RgbInput;
