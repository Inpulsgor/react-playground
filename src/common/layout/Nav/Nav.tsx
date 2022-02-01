import { FC } from 'react';
import NavItem from './NavItem/NavItem';
import routes from 'pages/routes';
import { NavProps } from './interface';

const Nav: FC<NavProps> = () => (
  <nav>
    <ul>
      {routes.map(route => (
        <NavItem key={route.label} route={route} />
      ))}
    </ul>
  </nav>
);

export default Nav;
