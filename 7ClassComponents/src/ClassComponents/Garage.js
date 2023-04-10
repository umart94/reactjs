import Car from './Car.js'
import React from 'react'
class Garage extends React.Component {
    constructor() {
      super();
      this.state = {color: "Blue"};
    }
    render() {
      return (
        <div>
          <h2>I am a {this.state.color} Garage!</h2>
          <h2>with a </h2>
          <Car></Car>
        </div>
      );
    }
  }
export default Garage;