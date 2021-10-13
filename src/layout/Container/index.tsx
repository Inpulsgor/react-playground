import React, { FC } from 'react';
import { IProps } from './interface';
import styles from './styles.module.scss';

const Container: FC<IProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
