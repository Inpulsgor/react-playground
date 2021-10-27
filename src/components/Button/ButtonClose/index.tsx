import React, { FC } from 'react';
import { ReactComponent as CloseIcon } from '../../../assets/icons/cross.svg';
import { IProps } from './interface';

const ButtonClose: FC<IProps> = ({ onClick, onClose, isVisible }) => {
  return (
    <button type="button" onClick={onClick}>
      <CloseIcon />
    </button>
  );
};

export default ButtonClose;
