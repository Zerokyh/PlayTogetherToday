// colors.ts
import { createTheme } from "@mui/material";

export const colors = {
  // 배경 색상 Background Color
  background: {
    main: "#F5F7F8", // default
    primary: "#F5F7F8", // 기본 배경 색상
    secondary: "#EEEEEE", // 보조 배경 색상
    tertiary: "#E5E5E5", // 3번째 배경 색상
    button: "#006DFF", // 주 버튼 색상
    drawer: "#FFFFFF", // 드로어 배경 색상
  },

  // 텍스트 색상 Text Color
  text: {
    primary: "#23374D", // 메인 텍스트 색상 - 가장 짙은 폰트
    secondary: "#E8E3D2", // 보조 텍스트 색상
    drawer: "#707070", // 드로어 텍스트 색상
  },

  // 테두리 색상 Border Color
  border: {
    drawer: "#23374D", // 드로어 버튼 보더 색상
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#EADDFF",
      light: "#FEF7FF",
      dark: "#3A1B71",
    },
    secondary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
    success: {
      main: "#04D862",
      light: "#FEF7FF",
      dark: "#3A1B71",
    },
  },
});
