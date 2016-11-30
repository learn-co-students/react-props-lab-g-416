const React = require('react')

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets ? 'Yes' : 'No'}</p>
        <p>{this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  name: 'Enterprise',
  speed: 100,
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship
