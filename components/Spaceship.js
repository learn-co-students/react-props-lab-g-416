const React = require('react');

class Spaceship extends React.Component{
	render(){
		return(
			<div>
				<h1>{this.props.name}</h1>
				<h1>{this.props.speed}</h1>
				<h1>{this.props.hasRockets}</h1>
				<h1>{this.props.colors.join(', ')}</h1>
			</div>
		)
	}
}

Spaceship.defaultProps = {
	speed: 500,
	hasRockets: false,
	colors: ['black', 'red']
}

module.exports = Spaceship;
