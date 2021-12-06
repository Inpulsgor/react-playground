import { createTheme, responsiveFontSizes, Theme } from '@mui/material';
import { grey } from '@mui/material/colors';

let theme: Theme = createTheme({
  palette: {
    custom: {
      darkGrey: grey[600], // #747474
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
