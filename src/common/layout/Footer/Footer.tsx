import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import { format } from 'date-fns';

export type FooterProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Footer: FC<FooterProps> = () => {
  const currentYear = format(new Date(), 'yyyy');

  return (
    <footer>
      <span>React-playground - {currentYear} All Rights Reserved</span>
    </footer>
  );
};

export default Footer;
