import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";
import {
  Box,
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  FormControl,
} from "@mui/material";
// import { useAppDispatch } from 'redux/store';
import { ROUTES } from "types/enum";
import { FormValues } from "./LoginForm.types";
import { styles } from "./LoginForm.styles";

const defaultValues = {
  name: "",
  email: "",
};

const LoginForm: FC = () => {
  // const dispatch = useAppDispatch();
  const { handleSubmit } = useForm<FormValues>({
    defaultValues,
    mode: "onBlur",
  });

  const handleFormSubmit: SubmitHandler<FormValues> = data => {
    const { name, email } = data;

    console.log("name :>> ", name);
    console.log("email :>> ", email);
  };

  return (
    <Box sx={styles.wrapper}>
      <Avatar sx={styles.avatar}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography component="span" variant="h5" sx={{ mb: 1 }}>
        Sign in
      </Typography>

      <FormControl onSubmit={handleSubmit(handleFormSubmit)} component="form">
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
        />
        <TextField
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="secondary"
          sx={styles.button}
        >
          Sign In
        </Button>

        <Button
          sx={styles.signup}
          component={RouterLink}
          to={ROUTES.REGISTRATION}
        >
          Don&lsquo;t have an account? Sign Up
        </Button>
      </FormControl>
    </Box>
  );
};

export default LoginForm;
