import { FC } from 'react';

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

const TodoItem: FC<TodoItemProps> = ({
  todo: { id, text, completed },
  onDeleteTodo,
  onToggleComplete,
}) => {
  const handleDelete = () => onDeleteTodo(id);

  return (
    <li>
      <p>{text}</p>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleComplete(id)}
      />
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
