import { FC } from 'react';
import { Link } from 'react-router-dom';
export interface NavLinkProps {
  route: string;
}

const NavLink: FC<NavLinkProps> = ({ route }) => {
  return (
    <Link key={route} to={route}>
      {route}
    </Link>
  );
};

export default NavLink;
