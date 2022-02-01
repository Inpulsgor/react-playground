import { FC } from 'react';
import { IProps } from './interface';

const TodoItem: FC<IProps> = ({
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
