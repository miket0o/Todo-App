import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import DisplayTodo from './components/displayTodo';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <AddTodo />
        <DisplayTodo />
      </div>
    );
  }
}
 
export default App;