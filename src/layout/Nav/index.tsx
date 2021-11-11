import { FC } from 'react';
import { Link } from 'react-router-dom';
import routes from 'src/services/routes';
import styles from './styles.module.scss';

const Nav: FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {routes.length &&
          routes.map(route => <Link to={route.path}>{route.label}</Link>)}
      </ul>
    </nav>
  );
};

export default Nav;
