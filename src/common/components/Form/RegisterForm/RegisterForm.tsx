import { FC } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Button,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
// import { useAppDispatch } from "common/hooks/useSelector";
// import { signUp } from "entities/auth/redux/authOperations";
import { FormData } from "./RegisterForm.types";
import { styles } from "./RegisterForm.styles";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  agreement: false,
};

const RegisterForm: FC = () => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues,
  });
  // const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormData> = inputValues => {
    const { firstName, lastName, email, password, agreement } = inputValues;
    console.log("inputValues", firstName, lastName, email, password, agreement);

    // dispatch(signUp({ email, password }));
  };

  return (
    <FormControl
      sx={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      component="form"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="firstName"
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextField
                fullWidth
                id="firstName"
                label="First Name"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="lastName"
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="email"
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="password"
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextField
                fullWidth
                label="Password"
                type="password"
                id="password"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            label="Accept agreement"
            control={
              <Controller
                name="agreement"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Checkbox {...field} />}
              />
            }
          />
        </Grid>
      </Grid>

      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="secondary"
        sx={styles.button}
      >
        Sign Up
      </Button>
    </FormControl>
  );
};

export default RegisterForm;
