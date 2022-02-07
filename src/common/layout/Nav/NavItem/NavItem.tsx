import { FC } from 'react';
import NavLink from '../NavLink/NavLink';
import { RouteTypes } from 'types/routes.interface';
export interface NavItemProps {
  route: RouteTypes;
}

const NavItem: FC<NavItemProps> = ({ route }) => {
  return (
    <li>
      <NavLink {...route} />
    </li>
  );
};

export default NavItem;
