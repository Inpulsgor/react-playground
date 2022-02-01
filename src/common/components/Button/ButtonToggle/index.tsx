import { FC } from 'react';
import { IProps } from './interface';

const ButtonClose: FC<IProps> = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonClose;
