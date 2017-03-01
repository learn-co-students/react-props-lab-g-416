import React from 'react';
import ReactDOM from 'react-dom';

const colors = [];

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h2>Name: {this.props.name}</h2>
        <h2>Speed: {this.props.speed} light years per hour</h2>
        <h4>Has Rockets?:{this.props.hasRockets}</h4>
        <h4>Colors: {this.props.colors.join(', ')}</h4>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;
