import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class ToDo extends Component {
  render() {
  return (
    <div className="App">
      <ul>
        <ToDo />
        <ToDo />
      </ul>
     </div>

  );
}
}

 export default ToDo;
