import React, { FC } from 'react';
import { IProps } from './interface';
import styles from './styles.module.scss';

const TodoItem: FC<IProps> = ({ todo: { id, text }, onDeleteTodo }) => {
  const handleDelete = () => onDeleteTodo(id);

  return (
    <li className={styles.item}>
      <p className={styles.text}>{text}</p>
      <button className={styles.btn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
