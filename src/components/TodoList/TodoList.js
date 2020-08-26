import React, {Component} from 'react';
import TodoItem from '../TodoItem/TodoItem'

class TodoList extends Component {
    render() {
      return (
        <section className="main">
          <ul className="todo-list">
            {this.props.todos.map((todo) => (
              <TodoItem 
              id={todo.id}
              key={todo.id}
              title={todo.title} 
              completed={todo.completed}
              handleDelete={this.props.handleDelete}
              handleToggle={this.props.handleToggle}
               
              
              />
            ))}
          </ul>
        </section>
      );
    }
  }

  export default TodoList;