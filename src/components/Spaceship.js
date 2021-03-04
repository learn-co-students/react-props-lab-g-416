// Code The Spaceship Component Here

import React, { Component } from 'react';
import ReactDOM from 'react-dom';





class Spaceship extends Component {
    
debugger;

    render() {
        return (
            <div>
                <h3>{ this.props.name }</h3>
                <p>Speed: { this.props.speed}</p>
                <p>Colors: { this.props.color }</p>

                { this.props.hasRockets ? "Rockets up!" : "Rockets down." }
            </div>
        )
    }
}


Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red'],
  };



export default Spaceship;
