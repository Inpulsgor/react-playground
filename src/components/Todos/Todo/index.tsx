import React, { Component } from 'react';
import shortid from 'shortid';
import { TodoList, TodoEditor, TodoFilter } from '../../';
import { IProps, IState } from './interface';
import {
  localStorageSet,
  localStorageGet,
} from '../../../services/helpers/localStorage';
import initialTodos from './todos.json';
import styles from './styles.module.scss';

class Todo extends Component<IProps, IState> {
  state = {
    todos: initialTodos,
    filter: '',
  };

  componentDidMount() {
    const storageTodos = localStorageGet('todos');

    if (storageTodos?.length > 0) this.setState({ todos: storageTodos });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos)
      localStorageSet('todos', this.state.todos);
  }

  handleAddTodo = message => {
    const todo = {
      id: shortid.generate(),
      text: message,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  handleChange = ({ currentTarget }) => {
    this.setState({ filter: currentTarget.value });
  };

  handleDelete = (ID: string) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== ID),
    }));
  };

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

  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { todos, filter } = this.state;
    const completedTodos = todos.filter(todo => todo.completed);
    const visibleTodos = this.getFilteredTodos();

    return (
      <div className={styles.todos}>
        <span className={styles.total}>Total: {todos.length}</span>
        <span className={styles.completed}>
          Completed: {completedTodos.length}
        </span>

        <TodoFilter inputValue={filter} handleChange={this.handleChange} />
        <TodoEditor onAddTodo={this.handleAddTodo} />

        {todos.length > 0 && (
          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.handleDelete}
            onToggleComplete={this.toggleComplete}
          />
        )}
      </div>
    );
  }
}

export default Todo;
