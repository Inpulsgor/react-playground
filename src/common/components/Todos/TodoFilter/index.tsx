import { FC, ChangeEvent } from "react";
export interface IProps {
  inputValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

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
