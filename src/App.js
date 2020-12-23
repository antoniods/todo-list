import React from 'react';
import ToDoList from './components/todolist.component';
import './components/todolist.styles.css';

import './App.css';

class ToDoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {items : [], text: ''};
    // studiare handleChange, handleSubmit e il bild
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  render() {
    return (
      <div>
        <h3>À faire</h3>
        <ToDoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Que faut-il faire ?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Ajouter #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

export default ToDoApp;
