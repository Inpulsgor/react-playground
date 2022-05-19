// eslint-disable-next-line import/named
import { createTheme, responsiveFontSizes, Theme } from "@mui/material";
import { orange, grey, green, teal } from "@mui/material/colors";

let theme: Theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
      contrastText: "#FFF",
    },
    secondary: {
      main: orange[500],
      contrastText: "#FFF",
    },
    success: {
      main: green[300],
      contrastText: grey[800],
    },
    info: {
      main: teal[100],
      contrastText: grey[800],
    },
    custom: {
      white: "#FFF",
      black: "#000",
      green: "#ACBFA4",
      amber: "#FF7F11",
      beige: "#E2E8CE",
      dark: "#262626",
      red: "#FF1B1C",
    },
    background: {
      default: "#F5F6F8",
    },
    text: {
      primary: "#3B434E",
      secondary: "#FFF",
    },
  },
  typography: {
    fontFamily: [
      "Noto Sans",
      "sans-serif",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
    fontSize: 10,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h2: {
      fontSize: "32px",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    h3: {
      fontSize: "20px",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    h4: {
      fontSize: "18px",
      fontWeight: 700,
    },
    body1: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    body2: {
      fontSize: "13px",
      lineHeight: "17.7px",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  components: {},
});

theme = responsiveFontSizes(theme);

export default theme;
