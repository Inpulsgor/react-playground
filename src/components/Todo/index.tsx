import React, { Component } from 'react';
import { TodoList, Form } from '../';
import initialTodos from './todos.json';
import { IProps, IState } from './interface';
import styles from './styles.module.scss';

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
    const completedTodos = todos.filter(todo => todo.completed);

    return (
      <div className={styles.todos}>
        <Form />

        <span className={styles.total}>Total: {todos.length}</span>
        <span className={styles.completed}>
          Completed: {completedTodos.length}
        </span>

        {todos.length > 0 && (
          <TodoList todos={todos} onDeleteTodo={this.handleDelete} />
        )}
      </div>
    );
  }
}

export default Todo;
