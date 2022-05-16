import { FC } from 'react';
import { TodoItem } from '../..';

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export interface TodoListProps {
  todos: Array<Todo>;
  onDeleteTodo: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

const TodoList: FC<TodoListProps> = ({
  todos,
  onDeleteTodo,
  onToggleComplete,
}) => {
  return (
    <ul>
      {todos &&
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleComplete={onToggleComplete}
          />
        ))}
    </ul>
  );
};

export default TodoList;
