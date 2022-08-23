import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    personalColors: {
      white: string;
      black: string;
      primary: string;
      secondary: string;
    };
  }

  interface ThemeOptions {
    personalColors?: {
      white: string;
      black: string;
      primary: string;
      secondary: string;
    };
  }
}

export type { Theme, ThemeOptions };
