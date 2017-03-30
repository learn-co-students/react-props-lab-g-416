import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>Speed: {this.props.speed}</h3>
        <h3>Rockets: {this.props.hasRockets ? 'Yes' : 'No'}</h3>
        <h3>Colors: {this.props.colors.join(', ')}</h3>
      </div>
    );
  }
};

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
};

module.exports = Spaceship;