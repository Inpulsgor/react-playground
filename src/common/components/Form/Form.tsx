import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Avatar, Button, Typography } from "@mui/material";
import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";
import { ROUTES } from "types/enum";
import { FormProps } from "./Form.types";
import { styles } from "./Form.styles";

import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";

const Form: FC<FormProps> = ({ type = "login" }) => {
  const isRegister = type === "register";

  return (
    <Box sx={styles.wrapper}>
      <Avatar sx={styles.avatar}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography sx={styles.title} component="span" variant="h5">
        {isRegister ? "Sign Up" : "Sign In"}
      </Typography>

      {isRegister ? <RegisterForm /> : <LoginForm />}

      <Button
        sx={styles.link}
        component={RouterLink}
        to={isRegister ? ROUTES.AUTH : ROUTES.REGISTRATION}
      >
        {isRegister
          ? "Already have an account? Sign in"
          : "Don't have an account? Sign Up"}
      </Button>
    </Box>
  );
};

export default Form;
