import './App.css';
import React, { Component } from 'react';
import Navi from './Components/Navi'
import './Components/Navi.css'

class App extends Component{
  render(){
    return(
      <div className="App">
        <Navi></Navi>
      </div>
    );
  }
}

export default App;
