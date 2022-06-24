import { FC, ReactNode } from "react";

export interface FormProps {
  children?: ReactNode;
  type?: "login" | "register";
}
