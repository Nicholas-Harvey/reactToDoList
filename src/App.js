import React, { Component } from 'react';
import './App.css';
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
    {
      id: 1,
      title: "Go 'round mum's",
      completed: false
    },
    {
      id: 2,
      title: "Get Liz back",
      completed: false
    },
    {
      id: 3,
      title: "Sort life out",
      completed: false
    }
  ]
  }
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
      < Todos todos={this.state.todos}/>
      
      </div>
    );
  }
}

export default App;
