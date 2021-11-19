import { FC } from 'react';
import cn from 'classnames';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import routes from 'src/services/routes';
import styles from './styles.module.scss';
import { NavProps } from './interface';

const Nav: FC<NavProps> = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {routes.length &&
          routes.map(({ path, label, sub }) => (
            <li>
              <NavLink
                key={label}
                to={path}
                className={cn(styles.link, {
                  [styles.active]: path === pathname,
                })}
              >
                {label}
                {sub.length > 0 && (
                  <ul className={styles.subList}>
                    {sub.map(({ label, path }) => (
                      <NavLink key={label} to={path} className={styles.subLink}>
                        {label}
                      </NavLink>
                    ))}
                  </ul>
                )}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Nav;
