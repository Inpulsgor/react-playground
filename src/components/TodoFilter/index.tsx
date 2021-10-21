import React, { FC } from 'react';
import { IProps } from './interface';
import styles from './styles.module.scss';

const TodoFilter: FC<IProps> = ({ inputValue, handleChange }) => {
  return (
    <div className={styles.filter}>
      <label>
        Filter todos:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
    </div>
  );
};

export default TodoFilter;
