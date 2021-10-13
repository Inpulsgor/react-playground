import React, { FC } from 'react';
import { IProps } from './interface';
import styles from './styles.module.scss';

const ColorPicker: FC<IProps> = ({ colors = [] }) => {
  return (
    <>
      <div className={styles.colorList}>
        {colors.map(({ label, color }) => (
          <li
            key={label}
            className={styles.colorItem}
            style={{ backgroundColor: color }}
          ></li>
        ))}
      </div>
    </>
  );
};

export default ColorPicker;
