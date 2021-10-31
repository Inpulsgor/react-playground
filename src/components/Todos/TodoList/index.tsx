import React, { FC } from 'react';
import { TodoItem } from '../../';
import { IProps } from './interface';
import styles from './styles.module.scss';

const TodoList: FC<IProps> = ({ todos, onDeleteTodo, onToggleComplete }) => {
  return (
    <ul className={styles.list}>
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
