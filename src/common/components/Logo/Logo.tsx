import { FC } from 'react';
import { IProps } from './interface';

const Logo: FC<IProps> = ({ logo }) => {
  return (
    <>
      <div>{logo && <img src={logo} alt="logotype" />}</div>
    </>
  );
};

export default Logo;
