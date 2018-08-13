import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class ToDo extends Component {
  render() {
  return (
    <li>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{ this.props.description }</span>
       </li>

  );
}
}

 export default ToDo;
