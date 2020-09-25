import React from 'react'

class Spaceship extends React.Component{

  render(){
    return(
      <div>
        <h1> Name: {this.props.name}</h1>
        <h3>Speed: {this.props.speed}</h3>
        <h3> colors: {this.props.colors}</h3>
      </div>
    )
  }

}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship