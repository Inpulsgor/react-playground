import { createTheme, responsiveFontSizes, Theme } from '@mui/material';
// import { grey } from '@mui/material/colors';

let theme: Theme = createTheme({
  palette: {},
});

theme = responsiveFontSizes(theme);

export default theme;
