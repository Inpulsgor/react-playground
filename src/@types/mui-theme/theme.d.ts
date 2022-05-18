// eslint-disable-next-line
import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      white: string;
      black: string;
      green: string;
      amber: string;
      beige: string;
      dark: string;
      red: string;
    };
  }
  interface PaletteOptions {
    custom: {
      white: string;
      black: string;
      green: string;
      amber: string;
      beige: string;
      dark: string;
      red: string;
    };
  }
}
