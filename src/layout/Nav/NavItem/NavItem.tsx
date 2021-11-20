import { FC } from 'react';
import NavLink from '../NavLink/NavLink';
import SubLinks from '../SubLinks/SubLinks';
import { NavItemProps } from './interface';
import styles from './styles.module.scss';

const NavItem: FC<NavItemProps> = ({ route }) => {
  const { path, label, sub } = route;

  return (
    <li className={styles.item}>
      <NavLink path={path} label={label} />
      <SubLinks sub={sub} />
    </li>
  );
};

export default NavItem;
