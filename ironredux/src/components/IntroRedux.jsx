import React, { Component } from 'react';
import { connect } from 'react-redux';

class IntroRedux extends Component {
  clickHandler=()=>{
    this.props.dispatch({type: 'INCREASE'});
  }
  clickHandlerMinus=()=>{
    this.props.dispatch({type: 'POTATO'});
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Hello Redux</h1>
        <h1>{this.props.count}</h1>
        <button onClick={this.clickHandler}>+</button>
        <button onClick={this.clickHandlerMinus}>-</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  //name from const reducer 
  count: state.count  
  //state: state
})

export default connect(mapStateToProps) (IntroRedux);