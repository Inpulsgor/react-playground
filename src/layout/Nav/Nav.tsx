import { FC } from 'react';
import NavItem from './NavItem/NavItem';
import routes from 'src/services/routes';
import styles from './styles.module.scss';
import { NavProps } from './interface';

const Nav: FC<NavProps> = () => (
  <nav className={styles.nav}>
    <ul className={styles.list}>
      {routes &&
        routes.map(route => <NavItem key={route.label} route={route} />)}
    </ul>
  </nav>
);

export default Nav;
