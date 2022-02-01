import { FC } from 'react';
import { format } from 'date-fns';
import { FooterProps } from './interface';

const Footer: FC<FooterProps> = ({ ...props }) => {
  const currentYear = format(new Date(), 'yyyy');

  return (
    <footer {...props}>
      <span>React-playground - {currentYear} All Rights Reserved</span>
    </footer>
  );
};

export default Footer;
