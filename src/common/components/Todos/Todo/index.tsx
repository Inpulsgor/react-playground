import { Component, ReactNode } from "react";
import shortid from "shortid";
import {
  TodoList,
  TodoEditor,
  // TodoFilter
} from "common/components";
// import { localStorageSet, localStorageGet } from 'common/utils/storage';
import initialTodos from "./todos.json";
export interface TodoProps {
  children?: ReactNode;
}

export interface TodoState {
  todos: Array<TodoItem>;
  filter: string;
}

export type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
};

class Todo extends Component<TodoProps, TodoState> {
  state = {
    todos: initialTodos,
    filter: "",
  };

  componentDidMount(): void {
    // const storageTodos = localStorageGet('todos');
    // if (storageTodos?.length > 0) this.setState({ todos: storageTodos });
  }

  // componentDidUpdate(prevProps, prevState): void {
  //   if (this.state.todos !== prevState.todos)
  //     localStorageSet('todos', this.state.todos);
  // }

  handleAddTodo = (message: string): void => {
    const todo = {
      id: shortid.generate(),
      text: message,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  // handleChange = ({ currentTarget }) => {
  //   this.setState({ filter: currentTarget.value });
  // };

  handleDelete = (ID: string): void => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== ID),
    }));
  };

  toggleComplete = (todoID: string): void => {
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

  getFilteredTodos = (): Array<TodoItem> => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  render(): JSX.Element {
    const { todos } = this.state;
    const completedTodos = todos.filter(todo => todo.completed);
    const visibleTodos = this.getFilteredTodos();

    return (
      <div>
        <span>Total: {todos.length}</span>
        <span>Completed: {completedTodos.length}</span>

        {/* <TodoFilter inputValue={filter} handleChange={this.handleChange} /> */}
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
