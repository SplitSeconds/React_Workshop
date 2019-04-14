import React, { Component } from 'react';
import './App.css';
import IntroRedux from './components/IntroRedux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './components/reducer'

class App extends Component {
  render() {
    
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
