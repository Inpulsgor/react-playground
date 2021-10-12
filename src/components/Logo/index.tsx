import React, { FC } from 'react';
import { IProps } from './interface';
import styles from './styles.module.scss';

const Logo: FC<IProps> = ({ logo }) => {
  return (
    <div className={styles.logo}>
      {logo && <img src={logo} alt="logotype" />}
    </div>
  );
};

export default Logo;
