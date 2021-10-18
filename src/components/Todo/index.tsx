import React, { ChangeEvent, Component } from 'react';
import { TodoList } from '../';
import initialTodos from './todos.json';
import { IProps, IState } from './interface';
import styles from './styles.module.scss';

class Todo extends Component<IProps, IState> {
  state = {
    todos: initialTodos,
    name: '',
    email: '',
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;

    console.log(name, value);

    // TODO: fix typescript error in code below
    // this.setState({ [name]: value });
  };

  handleDelete = (ID: string) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== ID),
    }));
  };

  render() {
    const { todos, name, email } = this.state;
    const completedTodos = todos.filter(todo => todo.completed);

    return (
      <div className={styles.todos}>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </form>

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
