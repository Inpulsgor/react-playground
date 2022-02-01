import { FC } from 'react';
import { IProps } from './interface';

const TodoFilter: FC<IProps> = ({ inputValue, handleChange }) => {
  return (
    <div>
      <label>
        Filter todos:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
    </div>
  );
};

export default TodoFilter;
