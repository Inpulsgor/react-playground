import { FC, ReactNode } from 'react';
// import NavItem from './NavItem/NavItem';
// import routes from 'pages/routes';

export interface NavProps {
  children?: ReactNode;
}

const Nav: FC<NavProps> = () => (
  <nav>
    <ul>
      {/* {routes.map(route => (
        <NavItem key={route} route={route} />
      ))} */}
    </ul>
  </nav>
);

export default Nav;
