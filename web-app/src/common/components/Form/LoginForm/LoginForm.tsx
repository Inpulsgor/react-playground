import { FC } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
} from "@mui/material";
import { useAppDispatch } from "redux/store";
import { signIn } from "entities/auth/redux/authOperations";
import { FormValues } from "./LoginForm.types";
import { styles } from "./LoginForm.styles";

const defaultValues = {
  email: "",
  password: "",
  agree: false,
};

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    // setError,
    formState: {
      errors,
      // isValid
    },
  } = useForm<FormValues>({
    defaultValues,
    mode: "onBlur",
  });

  const handleFormSubmit: SubmitHandler<FormValues> = ({ password, email }) => {
    dispatch(
      signIn({
        email: email,
        password: password,
      }),
    );
  };

  return (
    <FormControl
      sx={styles.form}
      onSubmit={handleSubmit(handleFormSubmit)}
      component="form"
    >
      <Controller
        name="email"
        control={control}
        rules={{ required: "Email is required" }}
        render={({ field: { value, onChange } }) => (
          <TextField
            sx={styles.input}
            label="Email Address"
            value={value}
            helperText={errors.email?.message}
            onChange={onChange}
            fullWidth
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{ required: "Password is required" }}
        render={({ field: { value, onChange } }) => (
          <TextField
            sx={styles.input}
            label="Password"
            type="password"
            value={value}
            helperText={errors.password?.message}
            onChange={onChange}
            fullWidth
          />
        )}
      />

      <FormControlLabel
        sx={styles.checkboxControl}
        label="Remember me"
        control={
          <Controller
            name="agree"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                sx={styles.checkbox}
                onChange={onChange}
                value={value}
              />
            )}
          />
        }
      />

      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="secondary"
        // disabled={!agree}
        sx={styles.button}
      >
        Sign In
      </Button>
    </FormControl>
  );
};

export default LoginForm;
