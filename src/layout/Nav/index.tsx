import React from 'react';
import cn from 'classnames';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import routes from 'src/services/routes';
import styles from './styles.module.scss';

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {routes.length &&
          routes.map(({ path, label }) => (
            <NavLink
              key={label}
              to={path}
              className={cn(styles.link, {
                [styles.active]: path === pathname,
              })}
            >
              {label}
            </NavLink>
          ))}
      </ul>
    </nav>
  );
};

export default Nav;
