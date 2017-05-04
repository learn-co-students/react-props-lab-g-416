const React = require('react');

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h4>{this.props.speed}</h4>
        <h4>{this.props.hasRockets ? "Has rockets" : "Does not have rockets"}</h4>
        <h4>{this.props.colors.join(', ')}</h4>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
};

module.exports = Spaceship;