import { FC } from 'react';
import NavLink from '../NavLink/NavLink';
import SubLinks from '../SubLinks/SubLinks';
import { NavItemProps } from './interface';

const NavItem: FC<NavItemProps> = ({ route }) => {
  const { path, label, sub } = route;

  return (
    <li>
      <NavLink path={path} label={label} />
      <SubLinks sub={sub} />
    </li>
  );
};

export default NavItem;
