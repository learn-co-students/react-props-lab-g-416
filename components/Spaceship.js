const React = require('react');
class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <p>
          This is a {this.props.name} {this.props.speed} {this.props.hasRockets} {this.props.colors}
        </p>
      </div>
    );
  }
};

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red'],
};

module.exports = Spaceship;
