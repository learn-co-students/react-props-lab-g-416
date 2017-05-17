import React from 'react';

class Spaceship extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.speed}</h2>
        <h3>{this.props.hasRockets ? 'Yes' : 'No'}</h3>
        <p>{this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;
