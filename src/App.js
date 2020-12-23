import React from 'react';
import ToDoList from './components/todolist.comonent';
import ToDoList from './styles/todolist.comonent';

import './App.css';

class ToDoApp extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h2>A faire</h2>
        <ToDoList />
      </div>
    )
  } 




}
export default ToDoApp;
