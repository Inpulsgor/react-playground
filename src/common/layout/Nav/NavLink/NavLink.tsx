import { FC } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { NavLinkProps } from './interface';

const NavLink: FC<NavLinkProps> = ({ path, label }) => {
  const { pathname } = useLocation();

  return (
    <Link key={label} to={path}>
      {label}
    </Link>
  );
};

export default NavLink;
