// colors.ts
import { createTheme } from "@mui/material";

export const colors = {
  // 배경 색상 Background Color
  background: {
    main: "#FDF7FE", // default
    primary: "#F3EAFB", // 기본 배경 색상
    secondary: "#EADDFF", // 보조 배경 색상
    tertiary: "#E5D3FD", // 3번째 배경 색상
    drawer: "#FFFFFF", // 드로어 배경 색상
  },

  // 텍스트 색상 Text Color
  text: {
    primary: "#888888", // 메인 텍스트 색상
    secondary: "#E8E3D2", // 보조 텍스트 색상
    drawer: "#707070", // 드로어 텍스트 색상
  },

  // 테두리 색상 Border Color
  border: {
    drawer: "#C0C0C0", // 드로어 버튼 보더 색상
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#EADDFF",
      light: "#F3EAFB",
      dark: "#3A1B71",
    },
    secondary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
  },
});
