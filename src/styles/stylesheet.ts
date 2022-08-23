import { createTheme } from '@mui/material/styles';

export const primaryLight = '#ff5a4b';
export const primaryMain = '#ff0020';
export const primaryDark = '#c20000';
export const secondaryLight = '#2c2c2c';
export const secondaryMain = '#000000';
export const secondaryDark = '#000000';
export const warningMain = '#EAC435';
export const warningLight = '#F1D87E';
export const successMain = '#09BC8A';
export const successLight = '#29F5BB';
export const textBlack = '#070723';
export const textWhite = '#FFFFFF';

export const muiTheme = createTheme({
  personalColors: {
    white: textWhite,
    black: textBlack,
    primary: primaryMain,
    secondary: secondaryMain,
  },

  palette: {
    primary: {
      light: primaryLight,
      main: primaryMain,
      dark: primaryDark,
    },

    secondary: {
      light: secondaryLight,
      main: secondaryMain,
      dark: secondaryDark,
    },

    success: {
      main: successMain,
      light: successLight,
    },

    warning: {
      main: warningMain,
      light: warningLight,
    },
  },
});
