import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import { Container, Box } from '@mui/material';

export type MainProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Main: FC<MainProps> = ({ children }) => (
  <Box component="main">
    <Container>{children}</Container>
  </Box>
);

export default Main;
