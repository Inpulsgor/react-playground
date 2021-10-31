import React, { FC } from 'react';
import cn from 'classnames';
import { Logo } from '../../components';
import CoffeeLogo from '../../assets/icons/coffee.svg';
import { IProps } from './interface';
import styles from './styles.module.scss';

const Header: FC<IProps> = ({ className, children, ...props }) => (
  <header className={cn(styles.header, className)} {...props}>
    <Logo logo={CoffeeLogo} />
    {children}
  </header>
);

export default Header;
