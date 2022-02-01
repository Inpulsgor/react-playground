import { FC } from 'react';
import { TodoItem } from '../..';
import { IProps } from './interface';

const TodoList: FC<IProps> = ({ todos, onDeleteTodo, onToggleComplete }) => {
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
