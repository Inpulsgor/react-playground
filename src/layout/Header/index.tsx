import React, { FC } from 'react';
import cn from 'classnames';
import { IProps } from './interface';
import styles from './styles.module.scss';

const Header: FC<IProps> = ({ className, children, ...props }) => (
  <header className={cn(styles.header, className)} {...props}>
    {children}
  </header>
);

export default Header;
