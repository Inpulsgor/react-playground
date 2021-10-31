import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { IProps } from './interface';

const ButtonClose: FC<IProps> = ({ onClick, className, children }) => {
  return (
    <button
      className={cn(styles.button, className)}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonClose;
