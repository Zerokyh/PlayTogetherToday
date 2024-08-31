import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import SideBar from "./SideBar";
import { FullPageBox } from "../styles/mui";

const PttLayout = () => {
  return (
    <Box sx={{ display: "flex", p: 0, m: 0 }}>
      <CssBaseline />
      <SideBar /> {/* 사이드바 등록 */}
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
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
