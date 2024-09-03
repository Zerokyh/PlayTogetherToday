// colors.ts
import { createTheme } from "@mui/material";

export const colors = {
  // 배경 색상 Background Color
  background: {
    primary: "#F5F7F8", // 기본 배경 색상
    secondary: "#EEEEEE", // 보조 배경 색상
    tertiary: "#E5E5E5", // 3번째 배경 색상
    button: "#006DFF", // 주 버튼 색상
    drawer: "#FFFFFF", // 드로어 배경 색상
  },

  // 텍스트 색상 Text Color
  text: {
    primary: "#23374D", // 메인 텍스트 색상 - 가장 짙은 파랑
    secondary: "#F5F7F8", // 보조 텍스트 색상 - 흰색에 가까운 색
    grey: "#888888", // 회색 텍스트 색상
  },

  // 테두리 색상 Border Color
  border: {
    primary: "#23374D", // 메인 보더 색상 - 가장 짙은 파랑
    drawer: "#23374D", // 드로어 버튼 보더 색상
  },

  // 서브 배경 색상  Sub Background Color
  sub_background: {
    primary: "#FFFAF4", // 기본 배경 색상
    secondary: "#FFF3E2", // 보조 배경 색상
    tertiary: "#FFE5CA", // 3번째 배경 색상
    button: "#FA9884", // 주 버튼 색상
    drawer: "#FFFFFF", // 드로어 배경 색상
  },

  // 서브 텍스트 색상 Sub Text Color
  sub_text: {
    primary: "#23374D", // 메인 텍스트 색상 - 가장 짙은 파랑
    secondary: "#F5F7F8", // 보조 텍스트 색상 - 흰색에 가까운 색
    grey: "#888888", // 회색 텍스트 색상
  },

  // 서브 테두리 색상 Sub Border Color
  sub_border: {
    primary: "#23374D", // 메인 보더 색상 - 가장 짙은 파랑
    drawer: "#23374D", // 드로어 버튼 보더 색상
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#006DFF",
      light: "#006DFF",
      dark: "#FA9884",
    },
    secondary: {
      main: "#FA9884",
      light: "#006DFF",
      dark: "#FA9884",
    },
  },
});
