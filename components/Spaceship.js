const React = require('react');

class Spaceship extends React.Component {
  render() {
    return (
      <div className="Spaceship">
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Speed: {this.props.speed}</li>
          <li>Rockets: {this.props.hasRockets}</li>
          <li>Colors: {this.props.colors}</li>
        </ul>
      </div>
    );
  }
}
Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;
