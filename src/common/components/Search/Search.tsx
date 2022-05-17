import { FC, KeyboardEvent } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Paper, InputBase, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { styles } from './Search.styles';

type FormValues = {
  search: string;
};

const Search: FC = () => {
  const navigate = useNavigate();
  const { handleSubmit, control, reset, getValues } = useForm<FormValues>({
    defaultValues: {
      search: '',
    },
  });

  const goToSearch = () => {
    const { search } = getValues();

    navigate({
      pathname: 'search',
      search: createSearchParams({
        search,
      }).toString(),
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == 'Enter') goToSearch();
  };

  const onSumbit: SubmitHandler<FormValues> = data => {
    console.log('data', data);
    reset();
  };

  return (
    <Paper
      sx={styles.form}
      onSubmit={handleSubmit(onSumbit)}
      component="form"
      role="search"
    >
      <Controller
        name="search"
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputBase
            sx={styles.input}
            value={value}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            placeholder="Search..."
            inputProps={{ 'aria-label': 'Search on website' }}
          />
        )}
      />

      <IconButton
        sx={styles.button}
        onClick={goToSearch}
        type="submit"
        aria-label="search"
      >
        <SearchIcon sx={styles.buttonIcon} />
      </IconButton>
    </Paper>
  );
};

export default Search;
