import React, { Component } from 'react';
import { TodoList } from '../';
import initialTodos from './todos.json';
import { IProps, IState } from './interface';
// import styles from './styles.module.scss';

class Todo extends Component<IProps, IState> {
  state = {
    todos: initialTodos,
  };

  handleDelete = (ID: string) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== ID),
    }));
  };

  render() {
    const { todos } = this.state;

    return (
      <>
        {todos.length > 0 && (
          <TodoList todos={todos} onDeleteTodo={this.handleDelete} />
        )}
      </>
    );
  }
}

export default Todo;
