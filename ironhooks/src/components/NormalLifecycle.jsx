import React, { Component } from 'react'

class NormalLifecycle extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    };
  }

  clickHandler = () => {
    this.setState({
      count: this.state.count +1
    })
  }

  componentDidMount(){
    //runs only one time
    document.title = `hey ${this.state.count} time clicked`;
  }
  componentDidUpdate(){
    //is rendered everytime when something on the page is changed
    document.title = `hey ${this.state.count} time clicked`;
  }
  render() {
    
    return (
      <div>
        <h1>I'm normal lifecycle</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.clickHandler}>+</button>
      </div>
    )
  }
}

export default NormalLifecycle;