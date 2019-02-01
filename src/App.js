import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from "./components/Todos";


import './App.css';

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

  // toggle completed
  markComplete = (id ) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
      todo.completed = !todo.completed
      }
      return todo;
          }) 
      });
    }

  // Delete Todo
  delTodo = (id) => {
    this.setState ({ todos: [...this.state.todos.filter(todo =>todo.id !== id)] })
  }


  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
      <Header />
      < Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      
      </div>
    );
  }
}

export default App;
