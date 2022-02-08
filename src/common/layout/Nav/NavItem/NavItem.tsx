import { FC } from 'react';
import NavLink from '../NavLink/NavLink';
import { ROUTES } from 'types/enum';
export interface NavItemProps {
  route: ROUTES;
}

const NavItem: FC<NavItemProps> = ({ route }) => {
  return (
    <li>
      <NavLink route={route} />
    </li>
  );
};

export default NavItem;
