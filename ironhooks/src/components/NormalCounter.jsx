import React, { Component } from 'react'

class NormalCounter extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    };
  }

  setCount = () => {
    console.log("I am increase");
    this.setState({
      count: this.state.count + 1
    });
  }

  decrease = () => {
    console.log("I am decrease");
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <h1>I am a normal Counter</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.setCount}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    )
  }
}

export default NormalCounter;