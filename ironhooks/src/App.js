import React, { Component } from 'react';
import './App.css';
import NormalCounter from './components/NormalCounter';
import HooksCounter from './components/HooksCounter'
import NormalLifecycle from './components/NormalLifecycle'
import HooksLifecycle from './components/HooksLifecycle'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NormalCounter />
        <HooksCounter /> */}
        <NormalLifecycle />
        <HooksLifecycle potato="potato"/>
      </div>
    );
  }
}

export default App;
