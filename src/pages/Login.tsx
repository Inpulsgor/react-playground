import { FC } from 'react';
import { TextField, Button, FormControl } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { Container } from 'common/layout';

interface DefaultValues {
  [key: string]: string;
}

const defaultValues: DefaultValues = {
  name: '',
  email: '',
};

const Login: FC = () => {
  const { control, handleSubmit } = useForm({
    defaultValues,
  });

  const handleFormSubmit = (data: DefaultValues) => {
    console.log('data :>> ', data);
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
