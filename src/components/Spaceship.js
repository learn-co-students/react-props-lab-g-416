// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {

  generateColorList() {
    let output = "",
        colors = this.props.colors;
    if (colors.length === 0) {
      return output;
    } else if (colors.length === 1) {
      return output + colors[0];
    }
    for (let i = 0; i < colors.length; i++) {
      output += colors[i];
      if (i === colors.length - 2) {
        output += " and ";
      } else if (i < colors.length - 2) {
        output += ", ";
      }
    }
    return output;
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          <li>Speed: {this.props.speed}</li>
          <li>{ this.props.hasRockets ? 'Has rockets.' : 'Does not have rockets.' }</li>
          <li>Colors: {this.generateColorList()}</li>
        </ul>
      </div>
    );
  }

}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
