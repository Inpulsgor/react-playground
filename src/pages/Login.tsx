import { FC } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { TextField, Button, FormControl } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Container } from 'common/layout';

interface FormValues {
  [key: string]: string;
}

const defaultValues = {
  name: '',
  email: '',
};

const Login: FC = () => {
  const auth = getAuth();
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues,
  });

  const handleFormSubmit: SubmitHandler<FormValues> = data => {
    const { name, email } = data;
    console.log('name :>> ', name);
    console.log('email :>> ', email);

    signInWithEmailAndPassword(auth, name, email)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <Container>
      <FormControl onSubmit={handleSubmit(handleFormSubmit)} component="form">
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              label="login"
              variant="outlined"
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              label="email"
              variant="outlined"
            />
          )}
        />
        <Button type="submit" variant="contained" color="secondary">
          Login
        </Button>
      </FormControl>
    </Container>
  );
};

export default Login;
