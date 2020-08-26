import React, { Component } from "react";
import todosList from "./todos.json";
import TodoList from './components/TodoList/TodoList';
import {Switch, Route, NavLink} from 'react-router-dom';

class App extends Component {
  state = {
    todos: todosList,
    text: "",
  };
  handleAddTodo = (event) => {
    if(event.keyCode === 13){
      let newTodoItem = event.target.value;
      let newTodo =  {
        "userId": 1,
        "id": Math.random()*10000,
        "title": newTodoItem,
        "completed": false
      }
      this.setState(state=>{
        return {
          todos:[newTodo, ...state.todos],
          text: ""
      }

      })
    }

  }
  handleChange=(event)=>{
    this.setState({
      text: event.target.value,
    })
  }
  handleDelete = (todoId) => {
    const newTodos = this.state.todos.filter(
      todoItem => todoItem.id !== todoId
    )
    this.setState({
      todos: newTodos
    })
  }
  handleDeleteCompleted = () => {
    const newTodos = this.state.todos.filter(
      todoItem => todoItem.completed !== true
    )
    this.setState({
      todos: newTodos
    })
  }
  handleToggle = (id) => {
    let newTodos = this.state.todos.map(
      todo => {
        if(todo.id === id){
          return {
            ...todo, completed: !todo.completed
          }
        }
        return {
          ...todo
        }
      })
      this.setState({
        todos:newTodos
      })
    }
 
render() {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input 
        onChange={this.handleChange}
        onKeyDown ={this.handleAddTodo} 
        value= {this.state.text}
        className="new-todo" 
        placeholder="What needs to be done?" 
        autoFocus 
        />
      </header>
      <Switch>
      <Route 
      exact
      path="/"
      render = {(props) =>  <TodoList 
      todos={this.state.todos} 
      handleToggle={this.handleToggle} 
      handleDelete ={this.handleDelete}
      handleDeleteCompleted ={this.handleDeleteCompleted}
      />
      }
      />
      <Route 
      exact
      path="/active"
      render = {(props) =>  <TodoList 
      todos={this.state.todos.filter(todoItem => todoItem.completed !== true)} 
      handleToggle={this.handleToggle} 
      handleDelete ={this.handleDelete}
      handleDeleteCompleted ={this.handleDeleteCompleted}
      />
      }
      />
       <Route 
      exact
      path="/completed"
      render = {(props) =>  <TodoList 
      todos={this.state.todos.filter(todoItem => todoItem.completed === true)} 
      handleToggle={this.handleToggle} 
      handleDelete ={this.handleDelete}
      handleDeleteCompleted ={this.handleDeleteCompleted}
      />
     
      }
      />
      </Switch>
      <footer className="footer">
        <span className="todo-count">
          <strong>0</strong> item(s) left
        </span>
        <ul className="filters">
    <li>
      <NavLink exact to='/' 
      activeClassName="selectedLink"
      >All</NavLink> 
    </li>
    <li>
      <NavLink to="/active" activeClassName="selectedLink">Active</NavLink>
    </li>
    <li>
      <NavLink to="/completed" activeClassName="selectedLink">Completed</NavLink>
    </li>
  </ul>

        <button 
        onClick={this.handleDeleteCompleted} 
        className="clear-completed"
        >Clear completed</button>
      </footer>
    </section>
  );
}
}


/*
class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input 
          onChange={(event) => this.props.handleToggle(this.props.id)}
          className="toggle"
          type="checkbox"
          checked={this.props.completed} />
          <label>{this.props.title}</label>
          <button className="destroy" onClick={(event) => this.props.handleDelete(this.props.id)} />
        </div>
      </li>
    );
  }
}
/*
class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map((todo) => (
          )}
        </ul>
      </section>
    );
  }
}
*/
export default App;
