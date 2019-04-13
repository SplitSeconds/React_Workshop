import React, { Component } from 'react';
import './App.css';
import IntroRedux from './components/IntroRedux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

class App extends Component {
  render() {
    const initialState = {
      count: 0
    };
    
    const reducer = (state = initialState, action) => {
      switch(action.type){
        case 'INCREASE': 
          return {count: state.count + 1};
        case 'POTATO':
          return {count: state.count - 1};
        default:
          return state;
      }
    };
    const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return (
      <Provider store={store}>
        <div className="App">
          <IntroRedux />
        </div>
      </Provider>
    );
  }
}

export default App;
