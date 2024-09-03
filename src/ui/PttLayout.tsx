//PttLayout.tsx

import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import { colors } from "../styles/colors";
import SideBar from "./SideBar";
import { FullPageBox } from "../styles/mui";
import Box from "@mui/material/Box";

// zustand 설정 파일 호출
import useThemeStore from "../store/store";

const PttLayout = () => {
  // Zustand로 관리하는 테마를 호출
  const { isTheme } = useThemeStore();

  return (
    <Box
      sx={{
        display: "flex",
        p: 0,
        m: 0,
        color: colors.text.primary,
      }}
    >
      <CssBaseline />
      <SideBar /> {/* 사이드바 등록 */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,

          // 전체 화면의 배경에 적용될 배경색을 유저가 선택한 테마에 따라 바뀌도록 설정 }
          backgroundColor:
            isTheme == "기본"
              ? colors.background.primary
              : colors.sub_background.primary,
        }}
      >
        <FullPageBox>
          <Box
            sx={{
              maxWidth: "1280px",
              width: "1280px",
            }}
          >
            <Outlet /> {/* 페이지가 바뀔 공간 등록 */}
          </Box>
        </FullPageBox>
      </Box>
    </Box>
  );
};

export default PttLayout;
