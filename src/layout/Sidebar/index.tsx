import React, { FC } from 'react';
import cn from 'classnames';
import { IProps } from './interface';
import styles from './styles.module.scss';

const Sidebar: FC<IProps> = ({ className, children, ...props }) => (
  <aside className={cn(styles.sidebar, className)} {...props}>
    {children}
  </aside>
);

export default Sidebar;
