// eslint-disable-next-line import/named
import { createTheme, responsiveFontSizes, Theme } from '@mui/material';
import { grey } from '@mui/material/colors';

let theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#054748',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#94C11A',
      contrastText: '#FFF',
    },
    success: {
      main: '#F2F7F5 ',
      contrastText: '#006531',
    },
    info: {
      main: '#FFF',
      contrastText: '#002E36',
    },
    custom: {
      green: '#006531', // NEW UI
      lima: '#94C11A', // NEW UI
      white: '#FFFFFF', // NEW UI
      platinum: '#E3E3E3', // NEW UI
      deep: '#054748', // NEW UI
      sacramento: '#002E36', // NEW UI
      granny: '#80979B', // NEW UI
      cultured: '#F2F7F5', // NEW UI
      alabaster: grey[100], // #FAFAFA // NEW UI
      darkGray: grey[600], // "#747474" // NEW UI
      philippineGray: '#5B5B5B', // NEW UI
      light: grey[100], // "#F7F7F7"
      lightGray: '#EAEAEA',
      gray: '#D3D3D3',
      disabled: '#C6C6C6',
      silver: '#BABABA',
      black: '#000000',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h2: {
      fontFamily: 'Trois Mille Black',
      fontSize: '32px',
      fontWeight: 900,
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: 'Trois Mille Black',
      fontSize: '18px',
      fontWeight: 900,
      textTransform: 'uppercase',
    },
    h4: {
      fontSize: '18px',
      fontWeight: 700,
    },
    body1: {
      fontSize: '14px',
      lineHeight: '24px',
    },
    body2: {
      fontSize: '13px',
      lineHeight: '17.7px',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1440,
    },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        colorSecondary: {
          color: '#E3E3E3',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          marginTop: '10px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          margin: '0',
          padding: '0',
          minWidth: 'fit-content',
          textTransform: 'initial',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: '100vw',
          padding: '0',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none',
            },
            '&:hover fieldset': {
              border: 'none',
            },
            '&.Mui-focused fieldset': {
              border: 'none',
            },
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
