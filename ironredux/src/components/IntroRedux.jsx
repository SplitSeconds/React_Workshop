import React, { Component } from 'react';
import { connect } from 'react-redux';

class IntroRedux extends Component {
  clickHandler=()=>{
    this.props.dispatch({type: 'INCREASE'});
  }
  clickHandlerMinus=()=>{
    this.props.dispatch({type: 'POTATO'});
  }
  clickHandlerData=()=>{
    this.props.dispatch({type: 'SHOWDATA'});
  }

  render() {
    console.log(this.props.name1)
    return (
      <div>
        <h1>Hello Redux</h1>
        <h1>{this.props.count}</h1>
        <button onClick={this.clickHandler}>+</button>
        <button onClick={this.clickHandlerMinus}>-</button>
        <h2>{this.props.data.map(obj=> {
          return <div>Name: {obj.name}</div>
        })}</h2>
        <button onClick={this.clickHandlerData}>Show data</button>
       
      </div>
    )
  }
}

const mapStateToProps = state => ({
  //name from const reducer 
  count: state.count, 
  data: state.data,

  //state: state
})

export default connect(mapStateToProps) (IntroRedux);