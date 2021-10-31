import React, { FC } from 'react';
import cn from 'classnames';
import { ReactComponent as CloseIcon } from '../../../assets/icons/cross.svg';
import styles from './styles.module.scss';
import { IProps } from './interface';

const ButtonClose: FC<IProps> = ({ onClick, className }) => {
  return (
    <button
      className={cn(styles.button, className)}
      type="button"
      onClick={onClick}
    >
      <CloseIcon />
    </button>
  );
};

export default ButtonClose;
