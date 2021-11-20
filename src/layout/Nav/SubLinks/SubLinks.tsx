import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SubLinksProps } from './interface';
import styles from './styles.module.scss';

const SubLinks: FC<SubLinksProps> = ({ sub }) => {
  return (
    sub && (
      <ul className={styles.subList}>
        {sub.map(({ label, path }) => (
          <Link key={label} to={path} className={styles.subLink}>
            {label}
          </Link>
        ))}
      </ul>
    )
  );
};

export default SubLinks;
