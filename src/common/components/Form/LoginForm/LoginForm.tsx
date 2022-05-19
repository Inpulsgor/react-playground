import { FC } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
} from "@mui/material";
// import { useAppDispatch } from "common/hooks/useSelector";
// import { signIn } from "entities/auth/redux/authOperations";
import { FormValues } from "./LoginForm.types";
import { styles } from "./LoginForm.styles";

const defaultValues = {
  email: "",
  password: "",
  agree: false,
};

const LoginForm: FC = () => {
  // const dispatch = useAppDispatch();
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues,
    mode: "onBlur",
  });

  const handleFormSubmit: SubmitHandler<FormValues> = ({ password, email }) => {
    // dispatch(signIn({}));
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
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <TextField
            sx={styles.input}
            label="Email Address"
            value={value}
            onChange={onChange}
            fullWidth
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <TextField
            sx={styles.input}
            label="Password"
            type="password"
            value={value}
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
            rules={{ required: true }}
            control={control}
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
