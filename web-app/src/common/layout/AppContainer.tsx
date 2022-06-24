import { FC, ReactNode } from "react";
import { Container } from "@mui/material";
export interface AppContainerProps {
  children?: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const AppContainer: FC<AppContainerProps> = ({ size = "lg", children }) => (
  <Container maxWidth={size}>{children}</Container>
);

export default AppContainer;
