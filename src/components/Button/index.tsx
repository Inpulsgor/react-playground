import React, { FC } from 'react';
import ButtonClose from './ButtonClose';
import ButtonToggle from './ButtonToggle';
import { IProps } from './interface';

const Button: FC<IProps> = ({ style = 'default', onClick, children }) => {
  switch (style) {
    case 'close':
      return <ButtonClose onClick={onClick} />;
    case 'toggle':
      return <ButtonToggle onClick={onClick}>{children}</ButtonToggle>;
    default:
      return <></>;
  }
};

export default Button;
