import React, { FC } from 'react';
import { IProps } from './interface';
import styles from './styles.module.scss';

const Header: FC<IProps> = ({ children }) => (
  <header className={styles.header}>{children}</header>
);

export default Header;
