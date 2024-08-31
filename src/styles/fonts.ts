import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: '"HSSaemaul-Regular", Arial, sans-serif',
    h1: {
      fontFamily: '"HSSaemaul-Regular", Arial, sans-serif',
    },
    h2: {
      fontFamily: '"HSSaemaul-Regular", Arial, sans-serif',
    },
    h3: {
      fontFamily: '"HSSaemaul-Regular", Arial, sans-serif',
    },
    h4: {
      fontFamily: '"HSSaemaul-Regular", Arial, sans-serif',
    },
    h5: {
      fontFamily: '"HSSaemaul-Regular", Arial, sans-serif',
    },
    h6: {
      fontFamily: '"HSSaemaul-Regular", Arial, sans-serif',
    },
    body1: {
      fontFamily: '"HSSaemaul-Regular", Arial, sans-serif',
    },
    body2: {
      fontFamily: '"HSSaemaul-Regular", Arial, sans-serif',
    },
    caption: {
      fontFamily: '"HSSaemaul-Regular", Arial, sans-serif',
    },
    subtitle1: {
      fontFamily: '"HSSaemaul-Regular", Arial, sans-serif',
    },
    subtitle2: {
      fontFamily: '"HSSaemaul-Regular", Arial, sans-serif',
    },
    overline: {
      fontFamily: '"HSSaemaul-Regular", Arial, sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"HSSaemaul-Regular", Arial, sans-serif',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: '"HSSaemaul-Regular", Arial, sans-serif',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: '"HSSaemaul-Regular", Arial, sans-serif',
        },
      },
    },
    // 다른 MUI 컴포넌트들도 필요에 따라 추가 설정 가능
  },
});
