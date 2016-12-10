const React = require('react')

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
      <h4>{this.props.name}</h4>
      <h4>{this.props.speed}</h4>
      <h4>{this.props.hasRockets}</h4>
      <h4>{this.props.colors}</h4>
      </div>
    )
  }

}

Spaceship.defaultProps = {

hasRockets:false,
colors: ['black', 'red']
}

module.exports = Spaceship
