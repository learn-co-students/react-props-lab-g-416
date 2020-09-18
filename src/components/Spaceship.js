import React, { Component } from 'react'

export default class Spaceship extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
				<p>Speed: {this.props.speed}</p>
				<p>Rockets: {this.props.hasRockets ? "yes" : "no"}</p>
				<p>Colors: {this.props.colors.join(", ")}</p>
            </div>
        )
    }
}


Spaceship.defaultProps = {
	speed: "slow",
	hasRockets: false,
	colors: ["black", "red"]
}