import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import DisplayTodo from './components/displayTodo';
import SortTodo from './components/SortTodo';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <AddTodo />
        <SortTodo />
        <DisplayTodo />
      </div>
    );
  }
}
 
export default App;