import React, { FC } from 'react';
import { format } from 'date-fns';
import cn from 'classnames';
import { IProps } from './interface';
import styles from './styles.module.scss';

const Footer: FC<IProps> = ({ className, ...props }) => (
  <footer className={cn(styles.footer, className)} {...props}>
    <span>
      React-playground - {format(new Date(), 'yyyy')} All Rights Reserved
    </span>
  </footer>
);

export default Footer;
