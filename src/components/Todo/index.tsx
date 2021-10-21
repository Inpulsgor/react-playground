import React, { Component } from 'react';
import { TodoList, Form } from '../';
import { IProps, IState } from './interface';
import initialTodos from './todos.json';
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

  handleSubmitForm = data => console.log(data);

  toggleComplete = todoID => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoID) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    }));
  };

  render() {
    const { todos } = this.state;
    const completedTodos = todos.filter(todo => todo.completed);

    return (
      <div className={styles.todos}>
        <Form formSubmit={this.handleSubmitForm} />

        <span className={styles.total}>Total: {todos.length}</span>
        <span className={styles.completed}>
          Completed: {completedTodos.length}
        </span>

        {todos.length > 0 && (
          <TodoList
            todos={todos}
            onDeleteTodo={this.handleDelete}
            onToggleComplete={this.toggleComplete}
          />
        )}
      </div>
    );
  }
}

export default Todo;
