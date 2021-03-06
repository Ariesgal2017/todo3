import React, {Component} from 'react'

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

  export default TodoItem;