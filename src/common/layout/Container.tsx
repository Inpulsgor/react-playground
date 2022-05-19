import { FC, ReactNode } from "react";
import { Container as ContainerWrapper } from "@mui/material";
export interface ContainerProps {
  children?: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => (
  <ContainerWrapper maxWidth="md">{children}</ContainerWrapper>
);

export default Container;
