import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: '"omyu_pretty", Arial, sans-serif',
    h1: {
      fontFamily: '"omyu_pretty", Arial, sans-serif',
    },
    h2: {
      fontFamily: '"omyu_pretty", Arial, sans-serif',
    },
    h3: {
      fontFamily: '"omyu_pretty", Arial, sans-serif',
    },
    h4: {
      fontFamily: '"omyu_pretty", Arial, sans-serif',
    },
    h5: {
      fontFamily: '"omyu_pretty", Arial, sans-serif',
    },
    h6: {
      fontFamily: '"omyu_pretty", Arial, sans-serif',
    },
    body1: {
      fontFamily: '"omyu_pretty", Arial, sans-serif',
    },
    body2: {
      fontFamily: '"omyu_pretty", Arial, sans-serif',
    },
    caption: {
      fontFamily: '"omyu_pretty", Arial, sans-serif',
    },
    subtitle1: {
      fontFamily: '"omyu_pretty", Arial, sans-serif',
    },
    subtitle2: {
      fontFamily: '"omyu_pretty", Arial, sans-serif',
    },
    overline: {
      fontFamily: '"omyu_pretty", Arial, sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"omyu_pretty", Arial, sans-serif',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: '"omyu_pretty", Arial, sans-serif',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: '"omyu_pretty", Arial, sans-serif',
        },
      },
    },
    // 다른 MUI 컴포넌트들도 필요에 따라 추가 설정 가능
  },
});
