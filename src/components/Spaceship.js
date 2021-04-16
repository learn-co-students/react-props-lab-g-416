// Code The Spaceship Component Here
import React, { Component } from 'react'

export default class Spaceship extends Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Speed: {this.props.speed}</p>
                <p>Rockets: {this.props.hasRockets}</p>
                <p>Colors: {this.props.colors}</p>
            </div>
        )
    }
}

Spaceship.defaultProps = {
    speed: "slow",
    hasRockets: false,
    colors: ["black", "red"]
}