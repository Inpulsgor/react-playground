import { FC } from 'react';
import cn from 'classnames';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { NavLinkProps } from './interface';
import styles from './styles.module.scss';

const NavLink: FC<NavLinkProps> = ({ path, label }) => {
  const { pathname } = useLocation();

  return (
    <Link
      key={label}
      to={path}
      className={cn(styles.link, {
        [styles.active]: path === pathname,
      })}
    >
      {label}
    </Link>
  );
};

export default NavLink;
