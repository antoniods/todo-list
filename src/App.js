import React from 'react';
import ToDoList from './components/todolist.component';
import './components/todolist.styles.css';

import './App.css';

class ToDoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {items : [], text: ''};
    
  }

  render() {
    return (
      <div>
        <h2>A faire</h2>
        <ToDoList items = {this.state.items} />
        <label htmlFor="new-todo">What are you going to do?</label>
        <input></input>
        <button></button>
      </div>
    )
  } 




}
export default ToDoApp;
