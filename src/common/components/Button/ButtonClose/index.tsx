import { FC } from 'react';
import { ReactComponent as CloseIcon } from 'assets/icons/cross.svg';
import { IProps } from './interface';

const ButtonClose: FC<IProps> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      <CloseIcon />
    </button>
  );
};

export default ButtonClose;
