import React, { FC } from 'react';
import { IProsp } from './interface';
import styles from './styles.module.scss';

const Footer: FC<IProsp> = ({ children }) => (
  <footer className={styles.footer}>{children}</footer>
);

export default Footer;
