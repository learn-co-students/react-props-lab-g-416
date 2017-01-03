import React from 'react';
import ReactDOM from 'react-dom';

class SpaceShip extends React.Component {
  render(){
    return (
      <div>
        <h1> Hello, {this.props.name} </h1>
        <p> Speed: {this.props.speed} </p>
        <p> Colors: {this.props.colors}.join('') </p>
      </div>
    );
  }
}

SpaceShip.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
};



module.exports = SpaceShip;