import React, { FC } from 'react';
import { IProps } from './interface';
import styles from './styles.module.scss';

const Logo: FC<IProps> = ({ path = '', alt = "logotype" }) => {
	return (
		<div className={styles.logo}>
			{path && <img src={path} alt={alt} />}
		</div>

	)
}

export default Logo;
