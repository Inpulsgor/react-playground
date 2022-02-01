import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SubLinksProps } from './interface';

const SubLinks: FC<SubLinksProps> = ({ sub }) => {
  return (
    sub && (
      <ul>
        {sub.map(({ label, path }) => (
          <Link key={label} to={path}>
            {label}
          </Link>
        ))}
      </ul>
    )
  );
};

export default SubLinks;
