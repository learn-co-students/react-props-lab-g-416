// Code The Spaceship Component Here
import React, { Component } from "react";
import { shallow } from "enzyme";

export class Spaceship extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.name} </h2>
        <h3>{this.props.speed}</h3>
        <h3>{this.props.hasRockets}</h3>
        <h3>{this.props.colors}</h3>
      </div>
    );
  }
}
Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"],
};

export default Spaceship;
