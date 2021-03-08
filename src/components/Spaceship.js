// Code The Spaceship Component Here
import React from "react";

let colors=['black', 'red']

class Spaceship extends React.Component{
    render (){
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <p>Speed: {this.props.speed}</p>
                <p>Has Rockets?: {this.props.hasRockets}</p>
                <p>Colors: {this.props.colors}</p>
            </div>

        )
    }
}

export default Spaceship;


Spaceship.defaultProps={
    speed: "slow",
    hasRockets: false,
    colors: colors
  }
  