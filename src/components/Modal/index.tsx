import React, { FC } from 'react';
import { IProps } from './interface';
import styles from './styles.module.scss';

const Modal: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;
