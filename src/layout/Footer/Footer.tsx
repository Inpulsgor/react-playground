import { FC } from 'react';
import { format } from 'date-fns';
import cn from 'classnames';
import { FooterProps } from './interface';
import styles from './styles.module.scss';

const Footer: FC<FooterProps> = ({ className, ...props }) => {
  const currentYear = format(new Date(), 'yyyy');

  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <span>React-playground - {currentYear} All Rights Reserved</span>
    </footer>
  );
};

export default Footer;
