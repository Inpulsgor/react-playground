import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
} from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { ROUTES } from 'types/enum';
import { styles } from './SignupForm.styles';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agreement: boolean;
};

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  agreement: false,
};

const SignupForm: FC = () => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues,
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <Box sx={styles.wrapper}>
      <Avatar sx={styles.avatar}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography component="span" variant="h5" sx={styles.title}>
        Sign up
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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

        <Button sx={styles.signin} component={RouterLink} to={ROUTES.AUTH}>
          Already have an account? Sign in
        </Button>
      </Box>
    </Box>
  );
};

export default SignupForm;
