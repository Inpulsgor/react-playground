import { FC, ReactNode } from "react";
import { Container as ContainerWrapper } from "@mui/material";
export interface ContainerProps {
  children?: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Container: FC<ContainerProps> = ({ size = "lg", children }) => (
  <ContainerWrapper maxWidth={size}>{children}</ContainerWrapper>
);

export default Container;
