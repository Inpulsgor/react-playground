import React, { FC } from 'react';
import cn from 'classnames';
import { Logo } from '../../common/components';
import CoffeeLogo from '../../assets/icons/coffee.svg';
import { IProps } from './interface';

const Header: FC<IProps> = ({ children, ...props }) => (
  <header {...props}>
    <Logo logo={CoffeeLogo} />
    {children}
  </header>
);

export default Header;
