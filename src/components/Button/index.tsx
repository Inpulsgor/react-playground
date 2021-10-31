import React, { FC } from 'react';
import ButtonClose from './ButtonClose';
import { IProps } from './interface';

const Button: FC<IProps> = ({ type = 'default', onClick }) => {
  switch (type) {
    case 'close':
      return <ButtonClose onClick={onClick} />;
    default:
      return <></>;
  }
};

export default Button;
