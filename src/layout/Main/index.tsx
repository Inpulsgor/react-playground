import React, { FC } from 'react';
import cn from 'classnames';
import { IProps } from './interface';
import styles from './styles.module.scss';

const Main: FC<IProps> = ({ className, children, ...props }) => (
  <main className={cn(styles.main, className)} {...props}>
    {children}
  </main>
);

export default Main;
