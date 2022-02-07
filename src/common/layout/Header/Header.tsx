import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';

export type HeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Header: FC<HeaderProps> = ({ children }) => <header>{children}</header>;

export default Header;
